import Card from "@/components/shared/Card";
import Heading from "@/components/ui/Heading";
import { features } from "@/types/features";

export default function FeaturesSection() {
  return (
    <div className="min-h-screen-minus-navbar flex justify-center items-center ">
      <div className="flex flex-col gap-y-xl max-w-fit items-center">
        <Heading size="large">What Can You Do With ExifPanel?</Heading>

        <p className="font-mono uppercase text-foreground-secondary">
          {"// Some Features of this app"}
        </p>
        <div className="grid grid-cols-2 grid-rows-2 gap-xs">
          {features.map(({ label, content }) => (
            <Card label={label} content={content} key={label} />
          ))}
        </div>
      </div>
    </div>
  );
}
