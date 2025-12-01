import { cn } from "@/lib/utils";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

export default function Button({ children, className, ...props }: Props) {
  return (
    <button
      className={cn(
        "flex items-center gap-x-xs uppercase whitespace-nowrap px-sm py-xs rounded text-xs bg-primary text-primary-foreground disabled:opacity-50",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
