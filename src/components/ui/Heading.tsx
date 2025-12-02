import { cn } from "@/lib/utils";
import { BaseProps } from "@/types/ui";

interface Props extends BaseProps {
  size?: "large" | "normal" | "small";
}

export default function Heading({
  children,
  className = "",
  size = "normal",
}: Props) {
  return (
    <h1
      className={cn(
        size === "large" && "text-xl",
        size === "normal" && "text-md",
        "font-medium leading-tight font-sans",
        size === "small" && "text-sm font-mono font-normal uppercase",
        className
      )}
    >
      {children}
    </h1>
  );
}
