import ArrowDiagonalUpIcon from "@/components/icons/ArrowDiagonalUpIcon";
import Button from "@/components/ui/Button";
import Heading from "@/components/ui/Heading";
import ProcessFlow from "@/features/Analyser/components/ProcessFlow";
import Link from "next/link";

export default function ProcessSection() {
  return (
    <div className="min-h-screen flex justify-center items-center ">
      <div className="flex gap-[200px] max-w-fit">
        <div className="flex flex-col gap-y-xs max-w-[512px] justify-between">
          <p className="font-mono uppercase text-foreground-secondary">
            {"// The Process"}
          </p>
          <Heading size="large" className="max-w-[600px]">
            Master Your Editing Workflow.
          </Heading>
          <div className="flex flex-col gap-y-md mt-auto pb-9">
            <p className="max-w-[400px]">
              Learn how to analyse any photo’s metadata - including camera
              settings and complete Lightroom adjustments.
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
