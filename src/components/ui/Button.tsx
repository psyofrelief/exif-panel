import { cn } from "@/lib/utils";
import { BaseProps } from "@/types/ui";

interface Props
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    BaseProps {
  isLoading?: boolean;
  type?: "button" | "submit";
  variant?: "primary" | "secondary";
}

export default function Button({
  children,
  isLoading = false,
  type = "button",
  variant = "primary",
  className = "",
  ...props
}: Props) {
  return (
    <button
      type={type}
      className={cn(
        "flex items-center gap-x-xs cursor-pointer justify-center uppercase whitespace-nowrap px-sm py-xs rounded  text-sm bg-primary text-primary-foreground font-mono disabled:opacity-75 disabled:cursor-not-allowed",
        variant === "primary"
          ? "bg-primary text-primary-foreground"
          : "bg-popover text-popover-foreground",
        isLoading && "opacity-50 cursor-not-allowed",
        className
      )}
      disabled={isLoading}
      {...props}
    >
      {isLoading ? <span>loading...</span> : children}
    </button>
  );
}
