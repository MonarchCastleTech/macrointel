import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { createHash } from "node:crypto";

const root = path.resolve(process.argv[2] || ".");
const scope = {};
new Function("window", fs.readFileSync(path.join(root, "data", "country-macro-map.js"), "utf8"))(scope);
const data = scope.countryMacroData;
const meta = data.meta || {};
const ageDays = (Date.now() - Date.parse(meta.generatedAt)) / 86_400_000;

assert.ok(data.nodes.length >= 100, "economy coverage is too small");
assert.ok(Number.isFinite(ageDays) && ageDays >= -1 && ageDays <= 45, "verified release is outside the 45-day safety window");
assert.deepEqual(meta.linkYears, [...meta.linkYears].sort((a, b) => b - a), "link years must be newest first");
assert.deepEqual(meta.sectorYears, [...meta.sectorYears].sort((a, b) => b - a), "sector years must be newest first");

const iso2 = new Set(data.nodes.map((node) => node.iso2));
assert.equal(iso2.size, data.nodes.length, "duplicate economy identifiers");
for (const node of data.nodes) {
  assert.match(node.iso2, /^[A-Z]{2}$/);
  assert.match(node.iso3, /^[A-Z]{3}$/);
  assert.ok(Number.isFinite(node.gdpUsd) && node.gdpUsd >= 0);
}

const latestYear = meta.linkYears[0];
const latestLinks = data.links.filter((link) => link.year === latestYear);
const latestConnectedEconomies = new Set(latestLinks.flatMap((link) => [link.s, link.t])).size;
assert.ok(latestLinks.length >= 1_500, "latest bilateral coverage is too small");
assert.ok(latestConnectedEconomies >= 90, "latest bilateral network reaches too few economies");
assert.ok(data.links.length >= 3_000, "two-release bilateral coverage is too small");
for (const link of data.links) {
  assert.ok(iso2.has(link.s) && iso2.has(link.t), "link references an unknown economy");
  assert.ok(meta.linkYears.includes(link.year), "link uses an unregistered release year");
  assert.ok(Number.isFinite(link.tradeUsd) && link.tradeUsd >= 0);
}

const latestSectorYear = String(meta.sectorYears[0]);
for (const sector of data.sectors) {
  const values = data.sectorValuesBySectorYear[latestSectorYear]?.[sector.id] || [];
  const top = data.topProducersBySectorYear[latestSectorYear]?.[sector.id] || [];
  assert.ok(values.length >= 50, `${sector.id} sector coverage is too small`);
  assert.equal(top.length, 10, `${sector.id} top-producer list is incomplete`);
  assert.deepEqual(top.map((record) => record.iso2), values.slice(0, 10).map((record) => record.iso2));
}

for (const family of ["gdp", "tradeTotals", "bilateralLinks", "sectors"]) {
  assert.ok(meta.families?.[family]?.retrievedAt, `${family} retrieval provenance is missing`);
  assert.ok(meta.families?.[family]?.observedYears, `${family} observation period is missing`);
}
assert.equal(meta.coverage.countries, data.nodes.length);
assert.equal(meta.coverage.bilateralLinks, data.links.length);

const payload = {
  nodes: data.nodes,
  links: data.links,
  sectors: data.sectors,
  topProducersBySectorYear: data.topProducersBySectorYear,
  sectorValuesBySectorYear: data.sectorValuesBySectorYear,
};
const contentHash = createHash("sha256").update(JSON.stringify(payload)).digest("hex");
assert.equal(meta.contentHash, contentHash, "release checksum does not match its records");
console.log(`Verified ${data.nodes.length} economies, ${data.links.length} links, release age ${ageDays.toFixed(1)} days`);
