import { cn } from "@/lib/utils";
import { BaseProps } from "@/types/ui";

export default function Panel({ children, className = "" }: BaseProps) {
  return (
    <section className={cn("flex flex-col p-md border-r", className)}>
      {children}
    </section>
  );
}
