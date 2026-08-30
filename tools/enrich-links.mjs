import fs from "node:fs";
import path from "node:path";

const root = path.resolve(process.argv[2] || ".");
const dataPath = path.join(root, "data", "country-macro-map.js");
const cacheDir = path.join(root, "tools", ".comtrade-cache");
const outputPath = path.join(root, "tools", "new-trade-release.json");
const targetYear = Number(process.env.MACRO_TARGET_YEAR || new Date().getUTCFullYear() - 1);
const valueFloor = 5e8;
const sectorCodes = { 30: "medicine", 85: "electronics", 87: "automotive", 27: "energy", 10: "agriculture", 61: "textiles", 72: "metals", 29: "chemicals" };
const sectorQuery = Object.keys(sectorCodes).join(",");
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

fs.mkdirSync(cacheDir, { recursive: true });
const scope = {};
new Function("window", fs.readFileSync(dataPath, "utf8"))(scope);
const data = scope.countryMacroData;
const nodeIso2 = new Set(data.nodes.map((node) => node.iso2));

async function fetchJson(url, attempts = 5) {
  let lastError;
  for (let attempt = 0; attempt < attempts; attempt += 1) {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 45_000);
    try {
      const response = await fetch(url, {
        signal: controller.signal,
        headers: { accept: "application/json", "user-agent": "MacroIntel-data-refresh/1.0" },
      });
      if (response.status === 429 || response.status >= 500) throw new Error(`HTTP ${response.status}`);
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      return await response.json();
    } catch (error) {
      lastError = error;
      if (attempt + 1 < attempts) await sleep([3_000, 8_000, 15_000, 25_000][attempt]);
    } finally {
      clearTimeout(timeout);
    }
  }
  throw new Error(`UN Comtrade request failed: ${lastError?.message || "unknown error"}`);
}

async function cachedRows(key, url) {
  const cachePath = path.join(cacheDir, `${key}.json`);
  if (fs.existsSync(cachePath)) return JSON.parse(fs.readFileSync(cachePath, "utf8"));
  const response = await fetchJson(url);
  const rows = Array.isArray(response?.data) ? response.data : [];
  fs.writeFileSync(cachePath, JSON.stringify(rows));
  await sleep(500);
  return rows;
}

const reporterResponse = await fetchJson("https://comtradeapi.un.org/files/v1/app/reference/Reporters.json");
const partnerResponse = await fetchJson("https://comtradeapi.un.org/files/v1/app/reference/partnerAreas.json");
const reporters = reporterResponse.results || reporterResponse;
const partners = partnerResponse.results || partnerResponse;
const iso2ToCode = {};
const codeToIso2 = {};

for (const reporter of reporters) {
  const iso2 = reporter.reporterCodeIsoAlpha2;
  if (!iso2) continue;
  codeToIso2[reporter.reporterCode] = iso2;
  if (!reporter.entryExpiredDate) iso2ToCode[iso2] = reporter.reporterCode;
}
for (const partner of partners) {
  if (partner.PartnerCodeIsoAlpha2) codeToIso2[partner.PartnerCode] = partner.PartnerCodeIsoAlpha2;
}

const links = [];
const sectorValues = Object.fromEntries(Object.values(sectorCodes).map((id) => [id, []]));
let linkReporters = 0;
let sectorReporters = 0;
const eligible = data.nodes.filter((node) => iso2ToCode[node.iso2]);

for (let index = 0; index < eligible.length; index += 1) {
  const node = eligible[index];
  const code = iso2ToCode[node.iso2];
  const base = "https://comtradeapi.un.org/public/v1/preview/C/A/HS";
  const totalUrl = `${base}?reporterCode=${code}&period=${targetYear}&flowCode=X&cmdCode=TOTAL&maxRecords=500`;
  const totalRows = await cachedRows(`${code}_${targetYear}_total`, totalUrl);
  let reporterLinkCount = 0;
  for (const row of totalRows) {
    const target = codeToIso2[row.partnerCode];
    const value = Number(row.primaryValue ?? row.fobvalue ?? row.cifvalue ?? 0);
    if (!target || !nodeIso2.has(target) || target === node.iso2 || value < valueFloor) continue;
    links.push({ s: node.iso2, t: target, tradeUsd: Math.round(value), year: targetYear, direction: "export", weight: 1 });
    reporterLinkCount += 1;
  }
  if (reporterLinkCount) linkReporters += 1;

  const sectorUrl = `${base}?reporterCode=${code}&period=${targetYear}&flowCode=X&partnerCode=0&cmdCode=${sectorQuery}&maxRecords=500`;
  const sectorRows = await cachedRows(`${code}_${targetYear}_sectors`, sectorUrl);
  let reporterSectorCount = 0;
  for (const row of sectorRows) {
    const sector = sectorCodes[String(row.cmdCode)];
    const value = Number(row.primaryValue ?? row.fobvalue ?? row.cifvalue ?? 0);
    if (!sector || !(value > 0)) continue;
    sectorValues[sector].push({ iso2: node.iso2, value: Math.round(value) });
    reporterSectorCount += 1;
  }
  if (reporterSectorCount) sectorReporters += 1;
  if ((index + 1) % 10 === 0) console.log(`${index + 1}/${eligible.length} reporters · ${links.length} links`);
}

const deduplicated = new Map();
for (const link of links) {
  const key = `${link.s}|${link.t}|${link.year}`;
  if (!deduplicated.has(key) || deduplicated.get(key).tradeUsd < link.tradeUsd) deduplicated.set(key, link);
}
const finalLinks = [...deduplicated.values()].sort((a, b) => b.tradeUsd - a.tradeUsd);
const connectedEconomies = new Set(finalLinks.flatMap((link) => [link.s, link.t])).size;
for (const values of Object.values(sectorValues)) values.sort((a, b) => b.value - a.value || a.iso2.localeCompare(b.iso2));

if (linkReporters < 60 || finalLinks.length < 1_500 || connectedEconomies < 90) {
  throw new Error(`UN Comtrade bilateral coverage too small: ${linkReporters} reporters, ${finalLinks.length} links, ${connectedEconomies} connected economies`);
}
if (sectorReporters < 60 || Object.values(sectorValues).some((values) => values.length < 50)) {
  throw new Error(`UN Comtrade sector coverage too small: ${sectorReporters} reporters`);
}

const result = {
  retrievedAt: new Date().toISOString(),
  targetYear,
  linkReporters,
  connectedEconomies,
  sectorReporters,
  links: finalLinks,
  sectorValues,
};
fs.writeFileSync(outputPath, `${JSON.stringify(result)}\n`);
console.log(`Wrote ${path.relative(root, outputPath)}: ${finalLinks.length} links, ${sectorReporters} sector reporters`);
