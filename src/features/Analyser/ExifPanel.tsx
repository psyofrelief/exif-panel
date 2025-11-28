import Panel from "@/components/shared/Panel";
import Button from "@/components/ui/Button";
import { useAnalyserContext } from "@/contexts/analyserContext";
import { useExtractMetadata } from "@/features/Analyser/hooks/useExtractMetadata";
import { useEffect } from "react";
import ExifRow from "./components/ExifRow";
import { EXIF_FIELDS } from "./constants/exifFields";
import { formatValue } from "./utils/format";

export default function ExifPanel() {
  const { metadata } = useAnalyserContext();
  const exif = metadata.exif;
  const rawExif = metadata.rawExif;

  const extract = useExtractMetadata();

  const handleExtract = async () => {
    await extract();
  };

  useEffect(() => {
    if (metadata) console.log("Metadata updated in ExifPanel:", metadata);
  }, [metadata]);

  return (
    <Panel className="border-r size-full bg-red-200 col-span-2">
      <Button type="button" onClick={handleExtract}>
        Extract
      </Button>
      <ul>
        {EXIF_FIELDS.map(({ label, key }) => (
          <ExifRow key={key} label={label} value={exif?.[key]} />
        ))}
      </ul>
      <div>fda</div>
      <ul className="mt-md border-t pt-md">
        {rawExif &&
          Object.entries(rawExif).map(([key, value]) => {
            const display = formatValue(value);
            if (display === "") return null; // skip objects
            return (
              <li key={key} className="flex justify-between">
                <span className="font-medium">{key}</span>
                <span>{display}</span>
              </li>
            );
          })}
      </ul>
    </Panel>
  );
}
