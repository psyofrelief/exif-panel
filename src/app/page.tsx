"use client";
import ExifPanel from "@/features/Analyser/sections/ExifPanel";
import IllustratorPanel from "@/features/Analyser/sections/IllustratorPanel";
import ImagePanel from "@/features/Analyser/sections/ImagePanel";

export default function Home() {
  return (
    <div className="grid grid-cols-7 min-h-screen items-center justify-center bg-background">
      <ImagePanel />
      <ExifPanel />
      <IllustratorPanel />
    </div>
  );
}
