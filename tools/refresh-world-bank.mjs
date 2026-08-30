import fs from "node:fs";
import path from "node:path";

const root = path.resolve(process.argv[2] || ".");
const dataPath = path.join(root, "data", "country-macro-map.js");
const outputPath = path.join(root, "tools", "new-world-bank.json");
const targetYear = Number(process.env.MACRO_TARGET_YEAR || new Date().getUTCFullYear() - 1);

const scope = {};
new Function("window", fs.readFileSync(dataPath, "utf8"))(scope);
const nodes = scope.countryMacroData.nodes;
const wanted = new Set(nodes.map((node) => node.iso3));

const indicators = {
  gdp: "NY.GDP.MKTP.CD",
  exports: "NE.EXP.GNFS.CD",
  imports: "NE.IMP.GNFS.CD",
};

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function fetchJson(url, attempts = 4) {
  let lastError;
  for (let attempt = 0; attempt < attempts; attempt += 1) {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 45_000);
    try {
      const response = await fetch(url, {
        signal: controller.signal,
        headers: { accept: "application/json", "user-agent": "MacroIntel-data-refresh/1.0" },
      });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      return await response.json();
    } catch (error) {
      lastError = error;
      if (attempt + 1 < attempts) await sleep(2_000 * (attempt + 1));
    } finally {
      clearTimeout(timeout);
    }
  }
  throw new Error(`World Bank request failed: ${lastError?.message || "unknown error"}`);
}

async function collectIndicator(code) {
  const startYear = targetYear - 4;
  const url = `https://api.worldbank.org/v2/country/all/indicator/${code}?format=json&date=${startYear}:${targetYear}&per_page=20000`;
  const response = await fetchJson(url);
  const rows = Array.isArray(response) ? response[1] : null;
  if (!Array.isArray(rows)) throw new Error(`World Bank returned no rows for ${code}`);

  const values = {};
  for (const row of rows) {
    const iso3 = String(row.countryiso3code || "").toUpperCase();
    const value = Number(row.value);
    const year = Number(row.date);
    if (!wanted.has(iso3) || !Number.isFinite(value) || value < 0 || !Number.isInteger(year)) continue;
    if (!values[iso3] || year > values[iso3].year) values[iso3] = { value, year };
  }
  return values;
}

const result = { retrievedAt: new Date().toISOString(), targetYear, indicators: {} };
for (const [name, code] of Object.entries(indicators)) {
  console.log(`World Bank: ${name} (${code})`);
  const values = await collectIndicator(code);
  const minimum = name === "gdp" ? 90 : 80;
  if (Object.keys(values).length < minimum) {
    throw new Error(`${name} coverage too small: ${Object.keys(values).length}/${nodes.length}`);
  }
  result.indicators[name] = { code, values };
}

fs.writeFileSync(outputPath, `${JSON.stringify(result)}\n`);
console.log(`Wrote ${path.relative(root, outputPath)} for ${nodes.length} economies`);
