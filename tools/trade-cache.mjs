import fs from "node:fs";

const MAX_AGE_MS = 30 * 24 * 60 * 60 * 1000;

export function readCachedRows(file, now = Date.now()) {
  try {
    const cached = JSON.parse(fs.readFileSync(file, "utf8"));
    const retrieved = Date.parse(cached.retrievedAt);
    const age = now - retrieved;
    if (!Array.isArray(cached.rows) || !Number.isFinite(retrieved) || age < 0 || age > MAX_AGE_MS) return null;
    return cached;
  } catch {
    return null;
  }
}

export function writeCachedRows(file, rows, retrievedAt = new Date().toISOString()) {
  fs.writeFileSync(file, JSON.stringify({ retrievedAt, rows }));
  return { retrievedAt, rows };
}
