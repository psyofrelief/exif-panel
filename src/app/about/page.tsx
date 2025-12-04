import Footer from "@/components/layout/footer/Footer";
import FaqSection from "@/components/sections/about/FaqSection";
import FeaturesSection from "@/components/sections/about/FeaturesSection";
import ProcessSection from "@/components/sections/about/ProcessSection";
import SamplePhotosSection from "@/components/sections/about/SampePhotosSection";
import Divider from "@/components/ui/Divider";

export default function AboutPage() {
  return (
    <>
      <main className="flex-1 flex flex-col items-center justify-center p-lg sm:pt-0 pt-xl md:p-sm size-full mx-auto min-h-screen max-w-5xl">
        <FeaturesSection />
        <Divider />
        <SamplePhotosSection />
        <Divider />
        <ProcessSection />
        <Divider />
        <FaqSection />
      </main>
      <Footer />
    </>
  );
}
