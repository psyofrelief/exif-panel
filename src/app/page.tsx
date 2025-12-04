"use client";
import { useEffect } from "react"; // 👈 Import useEffect
import XmpPanel from "@/features/Analyser/sections/ExifPanel";
import IllustratorPanel from "@/features/Analyser/sections/XmpPanel";
import ImagePanel from "@/features/Analyser/sections/ImagePanel";

export default function Home() {
  // useEffect(() => {
  //   // 1. Set overflow to hidden when the component mounts
  //   document.body.style.overflowY = "hidden";

  //   return () => {
  //     document.body.style.overflowY = "auto";
  //   };
  // }, []);
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 relative bg-background h-screen-minus-navbar overflow-y-scroll lg:overflow-y-clip gap-y-[64px] sm:gap-y-xl">
      <ImagePanel />
      <XmpPanel />
      <IllustratorPanel />
    </div>
  );
}
