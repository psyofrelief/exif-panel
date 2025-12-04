import Card from "@/components/shared/Card";
import Heading from "@/components/ui/Heading";
import StaggeredText from "@/components/ui/StaggeredLetters";
import { faqs } from "@/types/faq";

export default function FaqSection() {
  return (
    <div id="faq" className="min-h-screen flex justify-center items-center">
      <div className="flex flex-col gap-y-md lg:gap-y-xl max-w-fit">
        <header className="flex flex-col gap-y-sm">
          <Heading size="large">Frequently Asked Questions</Heading>
          <StaggeredText
            text="// Didn't make these up..."
            className="uppercase font-mono text-foreground-secondary"
          />
        </header>
        <ul className="grid md:grid-cols-2 grid-rows-3 gap-xs">
          {faqs.map(({ label, content }) => (
            <Card inverted label={label} content={content} key={label} />
          ))}
        </ul>
      </div>
    </div>
  );
}
