import { formatDate } from "../utils/format";

export default function ExifRow({
  label,
  value,
  format,
}: {
  label: string;
  value: string | number | null | undefined;
  format?: "date";
}) {
  let display: string | number | null = "—";

  // only try formatting if value exists
  if (value !== null && value !== undefined) {
    if (format === "date" && typeof value === "string") {
      display = formatDate(value);
    } else if (typeof value === "number" && value % 1 !== 0) {
      display = Number(value.toFixed(2));
    } else {
      display = value;
    }
  }

  return (
    <li className="flex justify-between items-center py-xs border-t border-t-outline dark:text-foreground-secondary">
      <span>{label}</span>
      <span>{display}</span>
    </li>
  );
}
