import assert from "node:assert/strict";
import { existsSync, readFileSync, statSync } from "node:fs";
import { resolve } from "node:path";
import test from "node:test";

const root = resolve(import.meta.dirname, "..");
const html = readFileSync(resolve(root, "index.html"), "utf8");
const css = readFileSync(resolve(root, "styles.css"), "utf8");
const app = readFileSync(resolve(root, "app.js"), "utf8");
const readme = readFileSync(resolve(root, "README.md"), "utf8");
const workflow = readFileSync(resolve(root, ".github", "workflows", "pages.yml"), "utf8");

function textOf(markup) {
  return markup.replace(/<[^>]*>/g, " ").replace(/&amp;/g, "&").replace(/\s+/g, " ").trim();
}

test("product identity, endorsement, and heading hierarchy are explicit", () => {
  const logo = resolve(root, "assets", "macrointel-logo-dark.png");
  assert.ok(existsSync(logo));
  assert.ok(statSync(logo).size > 100);
  assert.match(
    html,
    /<img src="\.\/assets\/macrointel-logo-dark\.png" alt="MacroIntel"/,
  );
  assert.ok(html.includes("Part of Monarch Castle Technologies"));

  const h1 = [...html.matchAll(/<h1\b[^>]*>([\s\S]*?)<\/h1>/g)].map((match) => textOf(match[1]));
  assert.deepEqual(h1, ["MacroIntel"]);
  for (const heading of [
    "Global GDP and Bilateral Trade",
    "Country Details",
    "Top Producers",
    "Release Provenance",
  ]) {
    assert.match(html, new RegExp(`<h2\\b[^>]*>${heading}</h2>`));
  }
});

test("top bar uses the official dark MacroIntel lockup", () => {
  assert.match(html, /src="\.\/assets\/macrointel-logo-dark\.png"/);
  assert.match(html, /alt="MacroIntel"/);
  assert.doesNotMatch(css, /filter:\s*[^;]*(brightness|saturate|contrast)\(/);
});

test("release freshness, methodology, and source attribution stay visible", () => {
  assert.match(html, /<aside id="releaseProvenance"[^>]*aria-labelledby="releaseProvenanceTitle"/);
  assert.match(html, /<span class="releaseLabel">Verified release<\/span>/);
  assert.match(html, /<time id="releaseDate"/);
  assert.match(html, /id="releaseMethodology"/);
  assert.match(html, /id="releaseSources"/);
  assert.match(app, /meta\.snapshotDate/);
  assert.match(app, /Object\.entries\(sources\)/);
  assert.match(app, /releaseSources/);
  assert.match(app, /releaseMethodology/);
  assert.match(app, /Each family is dated independently/);
  assert.match(app, /families\[key\]/);
  assert.doesNotMatch(css, /@keyframes pulse/);
});

test("keyless refresh is autonomous, gated, and checked after deployment", () => {
  const worldBank = readFileSync(resolve(root, "tools", "refresh-world-bank.mjs"), "utf8");
  const comtrade = readFileSync(resolve(root, "tools", "enrich-links.mjs"), "utf8");
  const verifier = readFileSync(resolve(root, "tools", "verify-dataset.mjs"), "utf8");
  assert.match(workflow, /schedule:/);
  assert.match(workflow, /tools\/refresh-world-bank\.mjs/);
  assert.match(workflow, /tools\/enrich-links\.mjs/);
  assert.match(workflow, /tools\/verify-dataset\.mjs/);
  assert.match(workflow, /Verify live deployment/);
  assert.match(worldBank, /api\.worldbank\.org\/v2/);
  assert.match(comtrade, /public\/v1\/preview/);
  assert.doesNotMatch(`${worldBank}\n${comtrade}`, /subscription-key|API_KEY|COMTRADE_KEY/);
  assert.match(verifier, /contentHash/);
});

test("rendering and interaction contracts are deterministic and keyboard operable", () => {
  assert.doesNotMatch(app, /Math\.random\(/);
  assert.match(app, /function deterministicUnit\(/);
  assert.match(app, /\.attr\("tabindex", 0\)/);
  assert.match(app, /event\.key === "Enter" \|\| event\.key === " "/);
  assert.match(app, /event\.key === "ArrowDown" \|\| event\.key === "ArrowUp"/);
  assert.match(app, /event\.key !== "Escape"/);
  assert.match(html, /role="combobox"[^>]*aria-controls="macroSearchSuggest"/);
  assert.match(css, /:focus-visible/);
});

test("shared tokens and responsive presentation prevent narrow-screen overflow", () => {
  for (const token of [
    "--bg: #15130f",
    "--panel: #191711",
    "--card: #17140f",
    "--border: #2c2820",
    "--accent: #c9a24b",
    "--text: #ece6d8",
    "--muted: #9a9284",
    "--font-serif: \"Spectral\"",
    "--font-sans: \"IBM Plex Sans\"",
    "--font-mono: \"IBM Plex Mono\"",
  ]) {
    assert.ok(css.includes(token), `missing shared token: ${token}`);
  }
  assert.match(html, /name="viewport"/);
  assert.match(css, /@media \(max-width: 768px\)/);
  assert.match(css, /overflow-wrap:\s*anywhere/);
  assert.match(css, /min-width:\s*0/);
  assert.match(workflow, /node --test tests\/\*\.test\.mjs/);
  assert.match(workflow, /node --check app\.js/);
  assert.ok(!html.includes("akgularda.github.io/macrointel"));
  assert.ok(html.includes("monarchcastletech.github.io/macrointel"));
});

test("published copy avoids prohibited certainty and advice claims", () => {
  const copy = `${textOf(html)}\n${textOf(readme)}`.toLowerCase();
  for (const claim of [
    "guaranteed accurate",
    "official government intelligence",
    "investment advice",
    "risk-free",
  ]) {
    assert.ok(!copy.includes(claim), `prohibited claim: ${claim}`);
  }
});
