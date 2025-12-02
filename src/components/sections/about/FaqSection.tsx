import Card from "@/components/shared/Card";
import Heading from "@/components/ui/Heading";
import { faqs } from "@/types/faq";

export default function FaqSection() {
  return (
    <div
      id="faq"
      className="min-h-screen flex justify-center items-center border-t-outline border-t"
    >
      <div className="flex flex-col gap-y-xl max-w-fit items-center">
        <Heading size="large">Frequently Asked Questions</Heading>

        <p className="font-mono uppercase text-foreground-secondary">
          {"// Definitely didn't make these up"}
        </p>
        <div className="grid grid-cols-2 grid-rows-3 gap-xs">
          {faqs.map(({ label, content }) => (
            <Card inverted label={label} content={content} key={label} />
          ))}
        </div>
      </div>
    </div>
  );
}
