import { createHash } from "node:crypto";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

export function versionAssets(html, assets) {
  for (const [asset, content] of Object.entries(assets)) {
    const hash = createHash("sha256").update(content).digest("hex").slice(0, 16);
    const escaped = asset.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const pattern = new RegExp(`(src=["']\\./${escaped})(?:\\?[^"']*)?(["'])`, "g");
    let count = 0;
    html = html.replace(pattern, (_, prefix, quote) => {
      count += 1;
      return `${prefix}?v=${hash}${quote}`;
    });
    if (count !== 1) throw new Error(`Expected one reference to ${asset}, found ${count}`);
  }
  return html;
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const root = path.resolve(process.argv[2] || ".");
  const names = ["data/country-macro-map.js", "app.js"];
  const assets = Object.fromEntries(names.map((name) => [name, fs.readFileSync(path.join(root, name))]));
  const indexPath = path.join(root, "index.html");
  fs.writeFileSync(indexPath, versionAssets(fs.readFileSync(indexPath, "utf8"), assets));
}
