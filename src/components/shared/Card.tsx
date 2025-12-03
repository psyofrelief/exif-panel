import { cn } from "@/lib/utils";

export default function Card({
  label,
  content,
  icon,
  inverted = false,
}: {
  label: string;
  content: string;
  icon?: React.ReactNode;
  inverted?: boolean;
}) {
  return (
    <li
      className={cn(
        "rounded text-start flex flex-col gap-y-xs p-lg",
        inverted
          ? "bg-popover text-popover-foreground"
          : "bg-background border-outline border text-popover-foreground"
      )}
    >
      {icon && <div className="mb-xs text-2xl">{icon}</div>}

      <p className="uppercase font-mono">{label}</p>
      <p
        className={cn(
          inverted
            ? "text-popover-foreground-secondary"
            : "text-foreground-secondary"
        )}
      >
        {content}
      </p>
    </li>
  );
}
