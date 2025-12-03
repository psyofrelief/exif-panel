"use client";
import XmpPanel from "@/features/Analyser/sections/ExifPanel";
import IllustratorPanel from "@/features/Analyser/sections/XmpPanel";
import ImagePanel from "@/features/Analyser/sections/ImagePanel";

export default function Home() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 relative bg-background min-h-screen-minus-navbar xl:overflow-clip gap-y-[64px] sm:gap-y-xl">
      <ImagePanel />
      <XmpPanel />
      <IllustratorPanel />
    </div>
  );
}
