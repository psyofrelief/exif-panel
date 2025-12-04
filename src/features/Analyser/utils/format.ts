export function formatValue(value: unknown, format?: string) {
  if (value == null) return null;

  if (format === "date") {
    const date = new Date(String(value));
    if (!isNaN(date.getTime())) {
      return date.toISOString().split("T")[0]; // yyyy-mm-dd
    }
    return String(value);
  }

  if (typeof value === "number") {
    return value % 1 === 0 ? value : Number(value.toFixed(2));
  }

  return String(value);
}

export function formatIptcValue(value: string | number | null) {
  if (typeof value !== "string") return value;

  if (/^\d{8}$/.test(value)) {
    return `${value.slice(0, 4)}-${value.slice(4, 6)}-${value.slice(6, 8)}`;
  }

  if (/^\d{6}$/.test(value)) {
    return `${value.slice(0, 2)}:${value.slice(2, 4)}:${value.slice(4, 6)}`;
  }

  // Leave binary / weird escape values alone
  if (value.includes("\\u")) return value;

  return value;
}

export function formatDate(value: unknown): string | number | null {
  if (!value) return null;

  // only format ISO like strings
  if (typeof value === "string" && !isNaN(Date.parse(value))) {
    const d = new Date(value);
    return d.toISOString().slice(0, 10); // yyyy-mm-dd
  }

  return typeof value === "string" ? value : null;
}
