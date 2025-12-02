import { cn } from "@/lib/utils";

export default function Card({
  label,
  content,
  inverted = false,
}: {
  label: string;
  content: string;
  inverted?: boolean;
}) {
  return (
    <li
      className={cn(
        "rounded flex flex-col gap-y-xs p-lg",
        inverted
          ? "bg-primary text-primary-foreground"
          : "bg-popover text-popover-foreground"
      )}
    >
      <p className="font-medium uppercase font-mono">{label}</p>
      <p
        className={cn(
          inverted ? "text-primary-foreground" : "text-foreground-secondary"
        )}
      >
        {content}
      </p>
    </li>
  );
}
