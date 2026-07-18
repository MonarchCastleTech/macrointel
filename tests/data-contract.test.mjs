import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import test from "node:test";
import vm from "node:vm";

const root = resolve(import.meta.dirname, "..");
const dataPath = resolve(root, "data", "country-macro-map.js");
const source = readFileSync(dataPath, "utf8");

function loadDataset() {
  const context = { window: {} };
  vm.createContext(context);
  vm.runInContext(source, context, { filename: dataPath, timeout: 5_000 });
  return context.window.countryMacroData;
}

test("dataset release exposes stable schema and release metadata", () => {
  const data = loadDataset();
  assert.deepEqual(
    Object.keys(data).sort(),
    ["links", "meta", "nodes", "sectorValuesBySectorYear", "sectors", "topProducersBySectorYear"],
  );
  assert.ok(Array.isArray(data.nodes) && data.nodes.length > 0);
  assert.ok(Array.isArray(data.links) && data.links.length > 0);
  assert.match(data.meta.generatedAt, /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/);
  assert.match(data.meta.snapshotDate, /^\d{4}-\d{2}-\d{2}$/);
  assert.ok(Number.isFinite(Date.parse(data.meta.generatedAt)));
  assert.equal(data.meta.coverage.countries, data.nodes.length);
  assert.equal(data.meta.coverage.bilateralLinks, data.links.length);
});

test("release sources are explicit for every rendered data family", () => {
  const { meta } = loadDataset();
  assert.deepEqual(
    Object.keys(meta.sources).sort(),
    ["bilateralLinks", "gdp", "sectors", "tradeTotals"],
  );
  assert.match(meta.sources.gdp, /World Bank/i);
  assert.match(meta.sources.tradeTotals, /World Bank/i);
  assert.match(meta.sources.bilateralLinks, /UN Comtrade/i);
  assert.match(meta.sources.sectors, /UN Comtrade/i);
  for (const attribution of Object.values(meta.sources)) {
    assert.ok(String(attribution).trim().length >= 20);
  }
});

test("country and link records preserve typed, connected identifiers", () => {
  const data = loadDataset();
  const iso2 = new Set();
  for (const country of data.nodes) {
    assert.match(country.iso2, /^[A-Z]{2}$/);
    assert.match(country.iso3, /^[A-Z]{3}$/);
    assert.ok(!iso2.has(country.iso2), `duplicate country: ${country.iso2}`);
    iso2.add(country.iso2);
    assert.ok(country.country.trim());
    for (const field of ["gdpUsd", "exportsUsd", "importsUsd", "bubbleRadius"]) {
      assert.ok(Number.isFinite(country[field]) && country[field] >= 0, `${country.iso2}.${field}`);
    }
    assert.equal(typeof country.exportsEstimated, "boolean");
    assert.equal(typeof country.importsEstimated, "boolean");
  }

  const releaseYears = new Set(data.meta.linkYears);
  for (const link of data.links) {
    assert.ok(iso2.has(link.s), `unknown source: ${link.s}`);
    assert.ok(iso2.has(link.t), `unknown target: ${link.t}`);
    assert.ok(releaseYears.has(link.year), `unreleased year: ${link.year}`);
    assert.ok(Number.isFinite(link.tradeUsd) && link.tradeUsd >= 0);
    assert.equal(link.direction, "export");
  }
});

test("loading the static release is deterministic and side-effect free", () => {
  assert.equal(JSON.stringify(loadDataset()), JSON.stringify(loadDataset()));
  assert.doesNotMatch(source, /\b(?:fetch|XMLHttpRequest|Date\.now|Math\.random)\b/);
});
