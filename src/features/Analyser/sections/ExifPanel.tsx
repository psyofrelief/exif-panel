import Panel from "@/components/shared/Panel";
import Button from "@/components/ui/Button";
import { useAnalyserContext } from "@/contexts/analyserContext";
import { useEffect } from "react";
import ExifRow from "../components/ExifRow";
import { formatValue } from "../utils/format";
import { EXIF_GROUPS } from "../constants/exif";
import { downloadExifJSON } from "../utils/exportExif";
import { hasMeaningfulExif } from "../utils/hasMeaningfulExif";
import { useRemoveMetadata } from "../hooks/useRemoveMetadata";
import Heading from "@/components/ui/Heading";
import Header from "../components/Header";
import RawDataRow from "../components/RawDataRow";

export default function ExifPanel() {
  const { metadata, file, error } = useAnalyserContext();
  const { exif, rawExif, iptc, xmp } = metadata;
  const meaningful = hasMeaningfulExif(exif);

  const stripAndDownload = useRemoveMetadata();

  const handleDownloadExif = () => {
    if (!rawExif) return;
    downloadExifJSON(rawExif, "raw-exif.json");
  };

  useEffect(() => {
    if (metadata) console.log("Metadata updated in ExifPanel:", metadata);
  }, [metadata]);

  return (
    <Panel className="border-r size-full">
      <Header
        heading="Exif Data / Camera"
        buttonLabel="Download Raw EXIF"
        onClickAction={handleDownloadExif}
      />
      {file && !hasMeaningfulExif(exif) && !error && (
        <p className="my-md">No EXIF data found for this image.</p>
      )}
      <div className="flex flex-col gap-y-lg">
        {EXIF_GROUPS.map((group) => (
          <div key={group.title} className="flex flex-col gap-y-xs">
            <Heading size="small">{group.title}</Heading>
            <ul>
              {group.fields.map(({ label, key, format }) => (
                <ExifRow
                  key={key}
                  label={label}
                  value={meaningful ? formatValue(exif?.[key], format) : null}
                />
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="bg-popover p-md flex justify-between items-center text-md rounded">
        <p>Raw Exif</p>
        <p>+</p>
      </div>
      <ul className="mt-md border-t pt-md">
        {hasMeaningfulExif(exif) &&
          rawExif &&
          Object.entries(rawExif).map(([key, value], idx) => {
            if (typeof value === "object" && value !== null) return null;

            const display = formatValue(value);
            if (display === "") return null;

            return (
              <RawDataRow key={key} value={key} display={display} idx={idx} />
            );
          })}
      </ul>

      <p className="my-lg">IPTC</p>
      <ul className="mt-md border-t pt-md">
        {hasMeaningfulExif(exif) &&
          iptc &&
          Object.entries(iptc).map(([key, value], idx) => {
            const display = formatValue(value);
            if (display === "") return null;
            return (
              <RawDataRow key={key} value={key} display={display} idx={idx} />
            );
          })}
      </ul>

      <p className="my-lg">RAW XMP</p>
      <ul className="mt-md border-t pt-md">
        {hasMeaningfulExif(exif) &&
          xmp &&
          Object.entries(xmp).map(([key, value], idx) => {
            return (
              <RawDataRow key={key} value={key} display={value} idx={idx} />
            );
          })}
      </ul>
      <Button onClick={() => stripAndDownload()} type="button">
        Remove Metadata and Download Image
      </Button>
    </Panel>
  );
}
