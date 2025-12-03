import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface SimpleDividerProps {
  label?: string | ReactNode;
}

export default function SimpleDivider({ label }: SimpleDividerProps) {
  return (
    <div className="relative flex items-center justify-center w-full my-xl">
      <div
        aria-hidden="true"
        className="absolute left-0 w-full h-px top-1/2 -translate-y-1/2 pointer-events-none z-0 
          bg-[linear-gradient(to_right,transparent_0%,rgba(255,255,255,0.2)_25%,rgba(255,255,255,0.2)_75%,transparent_100%)] 
      "
      />

      {label && (
        <span
          className={cn(
            "relative z-10 px-md text-sm font-medium",
            "bg-background text-foreground-secondary"
          )}
        >
          {label}
        </span>
      )}
    </div>
  );
}
