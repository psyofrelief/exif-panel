import Footer from "@/components/layout/footer/Footer";
import FaqSection from "@/components/sections/about/FaqSection";
import FeaturesSection from "@/components/sections/about/FeaturesSection";
import ProcessSection from "@/components/sections/about/ProcessSection";
import SamplePhotosSection from "@/components/sections/about/SampePhotosSection";

export default function AboutPage() {
  return (
    <>
      <main className="flex-1 flex flex-col items-center justify-center p-sm size-full mx-auto gap-y-lg min-h-screen max-w-7xl">
        <FeaturesSection />
        <SamplePhotosSection />
        <ProcessSection />
        <FaqSection />
      </main>
      <Footer />
    </>
  );
}
