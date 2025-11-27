"use client";
import ExifPanel from "@/features/Analyser/ExifPanel";
import IllustratorPanel from "@/features/Analyser/IllustratorPanel";
import ImagePanel from "@/features/Analyser/ImagePanel";

export default function Home() {
  return (
    <div className="grid grid-cols-7 min-h-screen items-center justify-center bg-background">
      <ImagePanel />
      <ExifPanel />
      <IllustratorPanel />
    </div>
  );
}
