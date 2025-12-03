import ArrowDiagonalUpIcon from "@/components/icons/ArrowDiagonalUpIcon";
import Button from "@/components/ui/Button";
import Heading from "@/components/ui/Heading";
import StaggeredText from "@/components/ui/StaggeredLetters";
import ProcessFlow from "@/features/Analyser/components/ProcessFlow";
import Link from "next/link";

export default function ProcessSection() {
  return (
    <div className="min-h-screen flex justify-center items-center w-full">
      <div className="flex md:flex-row flex-col gap-md xl:gap-lg w-full">
        <div className="flex flex-col gap-y-xs max-w-[512px] justify-between">
          <StaggeredText
            as="h2"
            text="// The Process"
            className="uppercase font-mono text-foreground-secondary"
          />
          <Heading size="large" className="max-w-[600px]">
            Master Your Editing Workflow.
          </Heading>
          <div className="flex flex-col gap-y-md mt-auto pb-9">
            <p className="max-w-[300px]">
              Examine complete photo metadata, including camera and editing
              data.
            </p>

            <Link href={"/"} className="flex">
              <Button variant="secondary" className="">
                Start Analysing
                <ArrowDiagonalUpIcon />
              </Button>
            </Link>
          </div>
        </div>

        <ProcessFlow />
      </div>
    </div>
  );
}
