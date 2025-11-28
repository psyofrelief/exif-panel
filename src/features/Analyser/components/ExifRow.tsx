export default function ExifRow({
  label,
  value,
}: {
  label: string;
  value: string | number | null | undefined;
}) {
  return (
    <li className="flex justify-between items-center py-xs">
      <span>{label}</span>
      <span>{value ?? "—"}</span>
    </li>
  );
}
