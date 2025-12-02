"use client";
import Footer from "@/components/layout/footer/Footer";
import Heading from "@/components/ui/Heading";
import SampleImage from "@/features/Analyser/components/SampleImage";
import { samplesGallery } from "@/features/Analyser/constants/samples";

export default function SamplePhotosPage() {
  return (
    <>
      <main className="flex-1 flex flex-col p-lg gap-y-lg min-h-screen">
        <header className="flex flex-col gap-y-xs">
          <Heading size="large">Browse The Sample Photos.</Heading>
          <p>
            Explore our curated gallery of sample photos with complete Lightroom
            edits and camera settings. Download settings as presets and apply
            them to your own photos.
          </p>
        </header>
        <div className="grid gap-sm grid-cols-2 sm:grid-cols-4">
          {samplesGallery.map((val, idx) => (
            <SampleImage gallery url={val} idx={idx} key={idx} />
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
