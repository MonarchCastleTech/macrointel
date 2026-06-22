// Regenerate bilateral export links for all node countries from UN Comtrade public preview.
// Same source already credited in meta.sources.trade. Real data, not fabricated.
import fs from 'node:fs';
import path from 'node:path';

const ROOT = path.resolve(process.argv[2] || '.');
const DATA = path.join(ROOT, 'data', 'country-macro-map.js');
const CACHE = path.join(ROOT, 'tools', '.comtrade-cache');
fs.mkdirSync(CACHE, { recursive: true });

const YEARS = [2024, 2023];
const VALUE_FLOOR = 5e8; // $500M — keep links meaningful but allow low thresholds in UI
const DELAY_MS = 450;
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

function loadData() {
  const src = fs.readFileSync(DATA, 'utf8');
  const g = {};
  // eslint-disable-next-line no-new-func
  new Function('window', src)(g);
  return g.countryMacroData;
}

async function getJSON(url, tries = 5) {
  for (let i = 0; i < tries; i++) {
    try {
      const ctl = new AbortController();
      const t = setTimeout(() => ctl.abort(), 30000);
      const r = await fetch(url, { signal: ctl.signal, headers: { accept: 'application/json' } });
      clearTimeout(t);
      if (r.status === 429 || r.status >= 500) {
        const wait = [4000, 10000, 20000, 35000, 50000][i] || 60000;
        console.log(`  ${r.status} -> backoff ${wait}ms`);
        await sleep(wait);
        continue;
      }
      if (!r.ok) return { _err: r.status };
      return await r.json();
    } catch (e) {
      const wait = [3000, 8000, 15000, 25000, 40000][i] || 50000;
      console.log(`  fetch err ${e.message} -> wait ${wait}ms`);
      await sleep(wait);
    }
  }
  return { _err: 'exhausted' };
}

async function main() {
  const data = loadData();
  const nodeIso = new Set(data.nodes.map((n) => n.iso2));

  const repJson = await getJSON('https://comtradeapi.un.org/files/v1/app/reference/Reporters.json');
  const reporters = repJson.results || repJson;
  const iso2ToCode = {};
  const codeToIso2 = {};
  for (const r of reporters) {
    if (!r.reporterCodeIsoAlpha2) continue;
    // Keep every code -> iso2 (incl. historical) so partner codes still resolve.
    codeToIso2[r.reporterCode] = r.reporterCodeIsoAlpha2;
    // But only fetch using ACTIVE reporter codes — Reporters.json also lists
    // expired historical splits (e.g. US 841 ...1980, India 356 ...1974) that
    // return zero rows for recent years.
    if (r.entryExpiredDate) continue;
    iso2ToCode[r.reporterCodeIsoAlpha2] = r.reporterCode;
  }
  // partner codes -> iso2
  const parJson = await getJSON('https://comtradeapi.un.org/files/v1/app/reference/partnerAreas.json');
  const partners = parJson.results || parJson;
  for (const p of partners) {
    if (p.PartnerCodeIsoAlpha2 && !codeToIso2[p.PartnerCode]) codeToIso2[p.PartnerCode] = p.PartnerCodeIsoAlpha2;
  }

  const reporterNodes = data.nodes.filter((n) => iso2ToCode[n.iso2]);
  const noReporter = data.nodes.filter((n) => !iso2ToCode[n.iso2]).map((n) => n.iso2);
  console.log(`Reporters available for ${reporterNodes.length}/${data.nodes.length} nodes. No reporter code: ${JSON.stringify(noReporter)}`);

  const links = [];
  let done = 0;
  for (const node of reporterNodes) {
    const code = iso2ToCode[node.iso2];
    for (const year of YEARS) {
      const cacheFile = path.join(CACHE, `${code}_${year}.json`);
      let rows;
      if (fs.existsSync(cacheFile)) {
        rows = JSON.parse(fs.readFileSync(cacheFile, 'utf8'));
      } else {
        const url = `https://comtradeapi.un.org/public/v1/preview/C/A/HS?reporterCode=${code}&period=${year}&flowCode=X&cmdCode=TOTAL`;
        const j = await getJSON(url);
        if (j._err) {
          console.log(`  ${node.iso2} ${year}: ERR ${j._err}`);
          await sleep(DELAY_MS);
          continue;
        }
        rows = (j.data || [])
          .filter((x) => x.partnerCode && x.partnerCode !== 0)
          .map((x) => ({ p: x.partnerCode, v: Number(x.primaryValue || x.cifvalue || x.fobvalue || 0) }));
        fs.writeFileSync(cacheFile, JSON.stringify(rows));
        await sleep(DELAY_MS);
      }
      for (const row of rows) {
        const tIso = codeToIso2[row.p];
        if (!tIso || !nodeIso.has(tIso) || tIso === node.iso2) continue;
        if (!(row.v >= VALUE_FLOOR)) continue;
        links.push({ s: node.iso2, t: tIso, tradeUsd: Math.round(row.v), year, direction: 'export', weight: 1 });
      }
    }
    done++;
    if (done % 10 === 0) console.log(`  ...${done}/${reporterNodes.length} reporters, ${links.length} links so far`);
  }

  // dedup (keep max value per s,t,year)
  const map = new Map();
  for (const l of links) {
    const k = `${l.s}|${l.t}|${l.year}`;
    if (!map.has(k) || map.get(k).tradeUsd < l.tradeUsd) map.set(k, l);
  }
  const finalLinks = [...map.values()].sort((a, b) => b.tradeUsd - a.tradeUsd);

  // coverage
  const deg = {};
  data.nodes.forEach((n) => (deg[n.iso2] = 0));
  finalLinks.forEach((l) => { deg[l.s]++; deg[l.t]++; });
  const zero = data.nodes.filter((n) => deg[n.iso2] === 0).map((n) => n.iso2);
  const byYear = {};
  finalLinks.forEach((l) => (byYear[l.year] = (byYear[l.year] || 0) + 1));

  console.log(`\nFINAL: ${finalLinks.length} links | by year ${JSON.stringify(byYear)}`);
  console.log(`Connected nodes: ${data.nodes.length - zero.length}/${data.nodes.length} | still zero: ${JSON.stringify(zero)}`);

  fs.writeFileSync(path.join(ROOT, 'tools', 'new-links.json'), JSON.stringify(finalLinks));
  console.log('Wrote tools/new-links.json');
}

main().catch((e) => { console.error('FATAL', e); process.exit(1); });
