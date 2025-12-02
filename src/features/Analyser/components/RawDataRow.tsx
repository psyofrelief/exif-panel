export default function RawDataRow({
  value,
  display,
  idx,
}: {
  value: string;
  display: string | number | null;
  idx: number;
}) {
  return (
    <li className={`flex justify-between ${idx % 2 === 0 ? "" : "bg-popover"}`}>
      <span className="font-medium text-start truncate flex-1 min-w-0 max-w-1/2">
        {value}
      </span>
      <span className="text-end truncate flex-1 min-w-0 max-w-1/2">
        {display}
      </span>
    </li>
  );
}
