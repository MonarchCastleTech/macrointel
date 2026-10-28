import assert from "node:assert/strict";
import { test } from "node:test";
import { versionAssets } from "../tools/version-assets.mjs";

test("asset URLs change when their content changes, including an existing query", () => {
  const html = '<script src="./data/country-macro-map.js"></script><script src="./app.js?v=old"></script>';
  const one = versionAssets(html, { "data/country-macro-map.js": "first", "app.js": "code" });
  const two = versionAssets(html, { "data/country-macro-map.js": "second", "app.js": "code" });
  assert.match(one, /country-macro-map\.js\?v=[a-f0-9]{16}/);
  assert.match(one, /app\.js\?v=[a-f0-9]{16}/);
  assert.notEqual(one, two);
  assert.equal(versionAssets(one, { "data/country-macro-map.js": "first", "app.js": "code" }), one);
  assert.throws(() => versionAssets(html, { "missing.js": "code" }), /Expected one reference/);
});
