import ArrowDiagonalUpIcon from "@/components/icons/ArrowDiagonalUp";
import Button from "@/components/ui/Button";
import Heading from "@/components/ui/Heading";
import ProcessFlow from "@/features/Analyser/components/ProcessFlow";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="flex-1 flex flex-col items-center justify-center p-sm size-full min-h-screen">
      <div className="flex gap-[200px] max-w-fit">
        <div className="flex flex-col gap-y-xs max-w-[512px] justify-center">
          <p className="font-mono uppercase text-foreground-secondary">
            {"// The Process"}
          </p>
          <Heading size="large" className="max-w-[400px]">
            Master Your Editing Workflow.
          </Heading>
          <div className="flex flex-col gap-y-sm mt-auto pb-9">
            <p className="text-sm max-w-[400px]">
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
    </main>
  );
}
