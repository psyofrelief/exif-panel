import { cn } from "@/lib/utils";
import { BaseProps } from "@/types/ui";

export default function Panel({ children, className = "" }: BaseProps) {
  return (
    <section
      className={cn(
        "flex flex-col min-h-screen-minus-navbar  p-sm md:px-2xl md:py-2xl lg:px-md lg:py-md border-r border-r-outline xl:max-h-screen-minus-navbar xl:overflow-y-scroll gap-y-lg ",
        className
      )}
    >
      {children}
    </section>
  );
}
