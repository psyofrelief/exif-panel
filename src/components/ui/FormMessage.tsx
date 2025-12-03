import { cn } from "@/lib/utils";

interface Props {
  className?: string;
  children: React.ReactNode;
}
export default function FormMessage({ className = "", children }: Props) {
  return (
    <p
      className={cn(
        "text-xs bg-destructive/50 w-fit py-1 px-2 rounded-[2px]",
        className
      )}
    >
      {children}
    </p>
  );
}
