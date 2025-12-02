import { cn } from "@/lib/utils";

export default function UploadIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 128 128"
      id="upload"
      className={cn("stroke-foreground w-[64px] h-auto stroke-4", className)}
    >
      <path
        strokeLinecap="round"
        d="M113 80V81C113 96.0849 113 103.627 108.314 108.314C103.627 113 96.0849 113 81 113H48C32.9151 113 25.3726 113 20.6863 108.314C16 103.627 16 96.0849 16 81V80"
      ></path>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M86 41L64 17L42 41"
      ></path>
      <path strokeLinecap="round" d="M64 89L64 17"></path>
    </svg>
  );
}
