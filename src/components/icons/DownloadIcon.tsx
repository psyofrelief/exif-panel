import { cn } from "@/lib/utils";

export default function DownloadIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlSpace="preserve"
      viewBox="0 0 101 101"
      id="download"
      className={cn("w-5 h-auto stroke-1 fill-popover-foreground", className)}
    >
      <path d="M48.8 74.2c.2.2.5.4.8.5.3.1.6.2.9.2s.6-.1.9-.2c.3-.1.6-.3.8-.5l31.7-31.7c.9-.9.9-2.5 0-3.4s-2.5-.9-3.4 0L52.9 66.7V20.6c0-1.3-1.1-2.4-2.4-2.4s-2.4 1.1-2.4 2.4v46.2L20.5 39.1c-.9-.9-2.5-.9-3.4 0s-.9 2.5 0 3.4l31.7 31.7zM18.8 82.8h63.4c1.3 0 2.4-1.1 2.4-2.4S83.5 78 82.2 78H18.8c-1.3 0-2.4 1.1-2.4 2.4s1.1 2.4 2.4 2.4z"></path>
    </svg>
  );
}
