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
import RawDataAccordion from "../components/RawDataAccordion";

export default function ExifPanel() {
  const { metadata, file, error } = useAnalyserContext();
  const { exif, rawExif } = metadata;
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
    <Panel className="border-r">
      <Header
        heading="Exif Data / Camera"
        buttonLabel="Download Raw EXIF"
        onClickAction={handleDownloadExif}
      />
      {/* @ts-ignore */}
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
      <div className="flex flex-col gap-y-md">
        <RawDataAccordion />
        <Button onClick={() => stripAndDownload()} type="button">
          Remove Metadata and Download Image
        </Button>
      </div>
    </Panel>
  );
}
