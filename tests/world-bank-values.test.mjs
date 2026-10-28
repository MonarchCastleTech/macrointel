import assert from "node:assert/strict";
import test from "node:test";
import { latestWorldBankValues } from "../tools/world-bank-values.mjs";

test("missing recent World Bank values never overwrite an older observation with zero", () => {
  const rows = [
    { countryiso3code: "ARE", date: "2025", value: null },
    { countryiso3code: "ARE", date: "2024", value: 552324919095.872 },
    { countryiso3code: "ARE", date: "2023", value: 522622268401.125 },
    { countryiso3code: "USA", date: "2025", value: "" },
    { countryiso3code: "USA", date: "2024", value: 0 },
  ];
  assert.deepEqual(latestWorldBankValues(rows, new Set(["ARE", "USA"])), {
    ARE: { value: 552324919095.872, year: 2024 },
    USA: { value: 0, year: 2024 },
  });
});
