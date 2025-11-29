"use client";

type Props = {
  label: string;
  value: number | null | undefined;
  min: number;
  max: number;
  track: string; // gradient string
};

export default function XmpSliderRow({ label, value, min, max, track }: Props) {
  if (typeof value !== "number") return null;

  return (
    <li className="flex flex-col gap-xs py-xs">
      <div className="flex justify-between text-sm">
        <span>{label}</span>
        <span>{value}</span>
      </div>

      <input
        type="range"
        min={min}
        max={max}
        value={value}
        readOnly
        className="w-full h-2 rounded appearance-none"
        style={{
          background: track,
        }}
      />
    </li>
  );
}
