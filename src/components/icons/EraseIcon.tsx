import { cn } from "@/lib/utils";

export default function EraseIcon({ className }: { className?: string }) {
  return (
    <svg
      className={cn(
        "w-5 h-auto stroke-1 fill-popover-foreground stroke-popover-foreground",
        className
      )}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      id="eraser"
    >
      <path d="M21.027 26.117L28 19.143A6.026 6.026 0 0028 10.6L24.665 7.258A1 1 0 1023.25 8.672l3.338 3.339a4.027 4.027 0 010 5.716l-6.3 6.3L8.872 12.615l6.3-6.3a4 4 0 012.847-1.188h0A4.022 4.022 0 0120.89 6.312 1 1 0 1022.3 4.9a6.008 6.008 0 00-4.276-1.775h-.007A5.982 5.982 0 0013.76 4.9L3.777 14.881a6.028 6.028 0 000 8.546L6.446 26.1H5.8a1 1 0 000 2H20.932a.992.992 0 00.1-1.981zM9.273 26.1L5.189 22.013a4.029 4.029 0 010-5.716l2.269-2.268L18.872 25.443l-.654.655zM29 26.1H23.958a1 1 0 000 2H29a1 1 0 000-2z"></path>
    </svg>
  );
}
