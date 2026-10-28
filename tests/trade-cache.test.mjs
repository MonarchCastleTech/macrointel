import assert from "node:assert/strict";
import { mkdtempSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import test from "node:test";
import { readCachedRows, writeCachedRows } from "../tools/trade-cache.mjs";

test("trade cache retains source retrieval time and expires old or invalid entries", () => {
  const dir = mkdtempSync(join(tmpdir(), "macro-trade-"));
  const file = join(dir, "rows.json");
  try {
    const retrievedAt = "2026-10-01T00:00:00.000Z";
    writeCachedRows(file, [{ primaryValue: 10 }], retrievedAt);
    assert.deepEqual(readCachedRows(file, Date.parse("2026-10-28T00:00:00Z")), { retrievedAt, rows: [{ primaryValue: 10 }] });
    assert.equal(readCachedRows(file, Date.parse("2026-11-02T00:00:00Z")), null);
    assert.equal(readCachedRows(file, Date.parse("2026-09-30T00:00:00Z")), null);
    writeFileSync(file, "[1,2,3]");
    assert.equal(readCachedRows(file), null);
  } finally {
    rmSync(dir, { recursive: true, force: true });
  }
});
