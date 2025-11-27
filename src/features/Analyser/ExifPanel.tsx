import Panel from "@/components/shared/Panel";
import Button from "@/components/ui/Button";
import { useAnalyserContext } from "@/contexts/analyserContext";
import { useExtractMetadata } from "@/features/Analyser/hooks/useExtractMetadata";
import { useEffect } from "react";

export default function ExifPanel() {
  const { metadata } = useAnalyserContext();
  const extract = useExtractMetadata();

  const handleExtract = async () => {
    await extract();
  };

  useEffect(() => {
    if (metadata) {
      console.log("Metadata extracted:", metadata);
    }
  }, [metadata]);

  return (
    <Panel className="border-r size-full bg-red-200 col-span-2">
      <Button type="button" onClick={handleExtract}>
        Extract
      </Button>
    </Panel>
  );
}
