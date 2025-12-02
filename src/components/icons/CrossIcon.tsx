import { cn } from "@/lib/utils";

export default function CrossIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      id="cross"
      className={cn("w-5 h-auto stroke-4 stroke-popover-foreground", className)}
    >
      <line
        x1="9.37"
        x2="54.63"
        y1="9.37"
        y2="54.63"
        fill="none"
        strokeMiterlimit="10"
      ></line>
      <line
        x1="9.37"
        x2="54.63"
        y1="54.63"
        y2="9.37"
        fill="none"
        strokeMiterlimit="10"
      ></line>
    </svg>
  );
}
