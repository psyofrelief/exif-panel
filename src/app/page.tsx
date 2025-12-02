"use client";
import XmpPanel from "@/features/Analyser/sections/ExifPanel";
import IllustratorPanel from "@/features/Analyser/sections/XmpPanel";
import ImagePanel from "@/features/Analyser/sections/ImagePanel";

export default function Home() {
  return (
    <div className="grid grid-cols-3 relative bg-background h-screen-minus-navbar overflow-clip">
      <ImagePanel />
      <XmpPanel />
      <IllustratorPanel />
    </div>
  );
}
