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
  // Dynamically set the HTML tag based on the size prop
  const Tag = size === "small" ? "h2" : "h1";

  return (
    <Tag
      className={cn(
        size === "large" && "text-lg lg:text-xl",
        size === "normal" && "text-md",
        "leading-tight font-sans",
        size === "small" &&
          "text-xs sm:text-sm font-mono uppercase text-foreground-secondary",
        className
      )}
    >
      {children}
    </Tag>
  );
}
