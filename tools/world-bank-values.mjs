export function latestWorldBankValues(rows, wanted) {
  const values = {};
  for (const row of rows) {
    const iso3 = String(row.countryiso3code || "").toUpperCase();
    if ((typeof row.value !== "number" && typeof row.value !== "string") || (typeof row.value === "string" && !row.value.trim())) continue;
    const value = Number(row.value);
    const year = Number(row.date);
    if (!wanted.has(iso3) || !Number.isFinite(value) || value < 0 || !Number.isInteger(year) || year < 1900) continue;
    if (!values[iso3] || year > values[iso3].year) values[iso3] = { value, year };
  }
  return values;
}
