import { cn } from "@/lib/utils";
import { BaseProps } from "@/types/ui";

export default function Panel({ children, className = "" }: BaseProps) {
  return (
    <section
      className={cn(
        "flex flex-col p-sm md:p-2xl lg:p-md border-r border-r-outline xl:max-h-screen-minus-navbar xl:overflow-y-scroll gap-y-lg sm:border-b-none border-b border-b-outline ",
        className
      )}
    >
      {children}
    </section>
  );
}
