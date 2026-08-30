import fs from "node:fs";
import path from "node:path";
import { createHash } from "node:crypto";

const root = path.resolve(process.argv[2] || ".");
const dataPath = path.join(root, "data", "country-macro-map.js");
const worldBankPath = path.join(root, "tools", "new-world-bank.json");
const tradePath = path.join(root, "tools", "new-trade-release.json");

const scope = {};
new Function("window", fs.readFileSync(dataPath, "utf8"))(scope);
const data = scope.countryMacroData;
const worldBank = JSON.parse(fs.readFileSync(worldBankPath, "utf8"));
const trade = JSON.parse(fs.readFileSync(tradePath, "utf8"));

if (worldBank.targetYear !== trade.targetYear) throw new Error("refresh artifacts target different years");
const targetYear = trade.targetYear;
const previousYear = targetYear - 1;
const previousLinks = data.links.filter((link) => link.year === previousYear);
if (previousLinks.length < 1_000) throw new Error(`cannot preserve a verified ${previousYear} link release`);

const observationYears = { gdp: [], exports: [], imports: [] };
for (const node of data.nodes) {
  for (const [family, field] of [["gdp", "gdpUsd"], ["exports", "exportsUsd"], ["imports", "importsUsd"]]) {
    const record = worldBank.indicators[family]?.values?.[node.iso3];
    if (!record) continue;
    node[field] = Math.round(record.value);
    node[`${family}Year`] = record.year;
    observationYears[family].push(record.year);
    if (family !== "gdp") node[`${family}Estimated`] = false;
  }
}

const maxGdp = Math.max(...data.nodes.map((node) => Number(node.gdpUsd) || 0));
for (const node of data.nodes) {
  node.bubbleRadius = Math.round(Math.max(8, Math.min(60, 8 + 52 * Math.sqrt(node.gdpUsd / maxGdp))));
}

data.links = [...trade.links, ...previousLinks];
data.sectorValuesBySectorYear = {
  [targetYear]: trade.sectorValues,
  [previousYear]: data.sectorValuesBySectorYear[String(previousYear)],
};
data.topProducersBySectorYear = {
  [targetYear]: Object.fromEntries(Object.entries(trade.sectorValues).map(([sector, values]) => [
    sector,
    values.slice(0, 10).map((record) => ({ ...record, provenance: "observed" })),
  ])),
  [previousYear]: data.topProducersBySectorYear[String(previousYear)],
};

const releasedAt = new Date().toISOString();
const dateOnly = releasedAt.slice(0, 10);
const range = (years) => {
  const minimum = Math.min(...years);
  const maximum = Math.max(...years);
  return minimum === maximum ? String(maximum) : `${minimum}–${maximum}`;
};
data.meta = {
  ...data.meta,
  generatedAt: releasedAt,
  snapshotDate: dateOnly,
  linkYears: [targetYear, previousYear],
  sectorYears: [targetYear, previousYear],
  sources: {
    gdp: "World Bank Indicators API · NY.GDP.MKTP.CD",
    tradeTotals: "World Bank Indicators API · NE.EXP.GNFS.CD / NE.IMP.GNFS.CD",
    bilateralLinks: "UN Comtrade public preview · HS TOTAL annual exports",
    sectors: "UN Comtrade public preview · selected HS chapter annual exports",
  },
  families: {
    gdp: { retrievedAt: worldBank.retrievedAt, observedYears: range(observationYears.gdp), countries: observationYears.gdp.length },
    tradeTotals: { retrievedAt: worldBank.retrievedAt, observedYears: `${range(observationYears.exports)} exports · ${range(observationYears.imports)} imports`, countries: Math.min(observationYears.exports.length, observationYears.imports.length) },
    bilateralLinks: { retrievedAt: trade.retrievedAt, observedYears: String(targetYear), reporters: trade.linkReporters, links: trade.links.length, connectedEconomies: trade.connectedEconomies },
    sectors: { retrievedAt: trade.retrievedAt, observedYears: String(targetYear), reporters: trade.sectorReporters },
  },
  coverage: {
    countries: data.nodes.length,
    bilateralLinks: data.links.length,
    latestBilateralLinks: trade.links.length,
    latestConnectedEconomies: trade.connectedEconomies,
    note: "Coverage varies with source reporting calendars; every family shows its observed period and retrieval date.",
  },
};

const payload = {
  nodes: data.nodes,
  links: data.links,
  sectors: data.sectors,
  topProducersBySectorYear: data.topProducersBySectorYear,
  sectorValuesBySectorYear: data.sectorValuesBySectorYear,
};
data.meta.contentHash = createHash("sha256").update(JSON.stringify(payload)).digest("hex");

const header = `/**\n * MacroIntel verified dataset release\n * Built: ${releasedAt}\n * Sources: World Bank Indicators API + UN Comtrade public preview\n */\n\n`;
const output = `${header}window.countryMacroData = ${JSON.stringify(data, null, 2)};\n`;
const temporaryPath = `${dataPath}.next`;
fs.writeFileSync(temporaryPath, output);
fs.copyFileSync(temporaryPath, dataPath);
fs.unlinkSync(temporaryPath);
console.log(`Published ${targetYear}/${previousYear}: ${data.nodes.length} economies, ${data.links.length} links, hash ${data.meta.contentHash.slice(0, 12)}`);
