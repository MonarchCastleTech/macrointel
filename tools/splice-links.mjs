// Splice freshly-fetched real bilateral links into the data file, preserving
// nodes/sectors/etc and updating provenance metadata.
import fs from 'node:fs';
import path from 'node:path';

const ROOT = path.resolve(process.argv[2] || '.');
const DATA = path.join(ROOT, 'data', 'country-macro-map.js');

const src = fs.readFileSync(DATA, 'utf8');
const g = {};
// eslint-disable-next-line no-new-func
new Function('window', src)(g);
const data = g.countryMacroData;

const newLinks = JSON.parse(fs.readFileSync(path.join(ROOT, 'tools', 'new-links.json'), 'utf8'));
data.links = newLinks;

const now = new Date();
const today = now.toISOString().split('T')[0];
data.meta = {
  ...data.meta,
  generatedAt: now.toISOString(),
  snapshotDate: today,
  linkYears: [2024, 2023],
  sources: {
    gdp: 'World Bank API (NY.GDP.MKTP.CD, current USD)',
    tradeTotals: 'World Bank API (NE.EXP.GNFS.CD, NE.IMP.GNFS.CD)',
    bilateralLinks: 'UN Comtrade (HS TOTAL goods exports, annual)',
    sectors: 'UN Comtrade (HS chapters, goods exports)',
  },
  coverage: {
    countries: data.nodes.length,
    bilateralLinks: newLinks.length,
    note: 'Bilateral links cover economies that report goods trade to UN Comtrade. A few late/non-reporters (e.g. Russia, Taiwan) appear without outbound links.',
  },
};

const header = `/**\n * Country Macro Intelligence — dataset\n * Generated: ${now.toISOString()}\n * Sources: World Bank (GDP & trade totals) + UN Comtrade (bilateral & sector trade)\n */\n\n`;
const out = header + 'window.countryMacroData = ' + JSON.stringify(data, null, 2) + ';\n';
fs.writeFileSync(DATA, out);

// report
const deg = {};
data.nodes.forEach((n) => (deg[n.iso2] = 0));
newLinks.forEach((l) => { deg[l.s]++; deg[l.t]++; });
const zero = data.nodes.filter((n) => deg[n.iso2] === 0).map((n) => n.iso2);
console.log(`Spliced ${newLinks.length} links. File ${(out.length / 1024).toFixed(0)}KB. Connected ${data.nodes.length - zero.length}/${data.nodes.length}. Zero-degree: ${JSON.stringify(zero)}`);
