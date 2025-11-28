export function formatValue(value: unknown): string {
  if (value == null) return "—";

  // If array join safely
  if (Array.isArray(value)) {
    return value.map((v) => formatValue(v)).join(", ");
  }

  if (typeof value === "object") return "";

  // If number trim to 2 decimals only when needed
  if (typeof value === "number") {
    return Number.isInteger(value) ? String(value) : value.toFixed(2);
  }

  return String(value);
}
