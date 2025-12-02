import { cn } from "@/lib/utils";

export default function ArrowDiagonalUpIcon({
  className,
}: {
  className?: string;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      id="diagonal-arrow"
      className={cn("w-4 h-auto stroke-1 fill-popover-foreground", className)}
    >
      <path d="M26.92 5.62a1 1 0 0 0-.54-.54A1 1 0 0 0 26 5H6a1 1 0 0 0 0 2h17.59L5.29 25.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0L25 8.41V26a1 1 0 0 0 2 0V6a1 1 0 0 0-.08-.38Z"></path>
    </svg>
  );
}
