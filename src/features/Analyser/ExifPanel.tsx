import Panel from "@/components/shared/Panel";
import Button from "@/components/ui/Button";
import { useAnalyserContext } from "@/contexts/analyserContext";
import { useExtractMetadata } from "@/features/Analyser/hooks/useExtractMetadata";
import { useEffect } from "react";
import ExifRow from "./components/ExifRow";
import { formatValue } from "./utils/format";
import { EXIF_GROUPS } from "./constants/exif";
import { downloadExifJSON } from "./utils/exportExif";

export default function ExifPanel() {
  const { metadata } = useAnalyserContext();
  const { exif, rawExif, iptc, xmp } = metadata;

  const extract = useExtractMetadata();

  const handleExtract = async () => {
    await extract();
  };

  const handleDownloadExif = () => {
    if (!rawExif) return;
    downloadExifJSON(rawExif, "raw-exif.json");
  };

  useEffect(() => {
    if (metadata) console.log("Metadata updated in ExifPanel:", metadata);
  }, [metadata]);

  return (
    <Panel className="border-r size-full bg-red-200 col-span-2">
      <Button type="button" onClick={handleExtract}>
        Extract
      </Button>
      <Button type="button" onClick={handleDownloadExif} className="mb-md">
        Download Raw EXIF
      </Button>

      {EXIF_GROUPS.map((group) => (
        <div key={group.title} className="mb-lg">
          <h3 className="mb-sm font-semibold">{group.title}</h3>
          <ul className="space-y-xs">
            {group.fields.map(({ label, key, format }) => (
              <ExifRow
                key={key}
                label={label}
                //@ts-ignore
                value={formatValue(exif?.[key], format)}
              />
            ))}
          </ul>
        </div>
      ))}

      <ul className="mt-md border-t pt-md">
        {rawExif &&
          Object.entries(rawExif).map(([key, value]) => {
            if (typeof value === "object" && value !== null) return null;

            const display = formatValue(value);
            if (display === "") return null;

            return (
              <li key={key} className="flex justify-between">
                <span className="font-medium">{key}</span>
                <span>{display}</span>
              </li>
            );
          })}
      </ul>

      <p className="my-lg">IPTC</p>
      <ul className="mt-md border-t pt-md">
        {iptc &&
          Object.entries(iptc).map(([key, value]) => {
            const display = formatValue(value);
            if (display === "") return null;
            return (
              <li key={key} className="flex justify-between">
                <span className="font-medium">{key}</span>
                <span>{display}</span>
              </li>
            );
          })}
      </ul>

      <p className="my-lg">RAW XMP</p>
      <ul className="mt-md border-t pt-md">
        {xmp &&
          Object.entries(xmp).map(([key, value]) => {
            return (
              <li key={key} className="flex justify-between">
                <span className="font-medium">{key}</span>
                <span>{formatValue(value)}</span>
              </li>
            );
          })}
      </ul>
    </Panel>
  );
}
