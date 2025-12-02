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
      <div className="flex items-center justify-between gap-x-md text-sm dark:text-foreground-secondary">
        <span className="whitespace-nowrap min-w-[120px] ">{label}</span>
        <input
          type="range"
          min={min}
          max={max}
          value={value}
          readOnly
          className="w-full h-[4px]  rounded col-span-6 appearance-none"
          style={{
            background: track,
          }}
        />

        <span className="col-span-1 min-w-14">
          {value > 0 && "+"}
          {value}
        </span>
      </div>
    </li>
  );
}
