import Card from "@/components/shared/Card";
import Heading from "@/components/ui/Heading";
import StaggeredText from "@/components/ui/StaggeredLetters";
import { features } from "@/types/features";

export default function FeaturesSection() {
  return (
    <div className="min-h-screen-minus-navbar relative flex sm:justify-center items-center ">
      <div className="flex flex-col gap-y-md lg:gap-y-xl max-w-fit">
        <header className="flex flex-col gap-y-sm">
          <StaggeredText
            text="// Some Features"
            className="uppercase font-mono text-foreground-secondary"
          />
          <Heading size="large">What Can You Do With ExifPanel?</Heading>
        </header>
        <ul className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 gap-xs">
          {features.map(({ label, content, icon }) => (
            <Card icon={icon} label={label} content={content} key={label} />
          ))}
        </ul>
      </div>
    </div>
  );
}
