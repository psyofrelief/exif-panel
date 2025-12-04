import Panel from "@/components/shared/Panel";
import Button from "@/components/ui/Button";
import { useAnalyserContext } from "@/contexts/analyserContext";
import ExifRow from "../components/ExifRow";
import { formatValue } from "../utils/format";
import { EXIF_GROUPS } from "../constants/exif";
import { downloadExifJSON } from "../utils/exportExif";
import { hasMeaningfulExif } from "../utils/hasMeaningfulExif";
import { useRemoveMetadata } from "../hooks/useRemoveMetadata";
import Heading from "@/components/ui/Heading";
import Header from "../components/Header";
import RawDataAccordion from "../components/RawDataAccordion";
import WarningPanel from "../components/WarningPanel";

export default function ExifPanel() {
  const { metadata, file, error } = useAnalyserContext();
  const { exif, rawExif } = metadata;
  const meaningful = hasMeaningfulExif(exif);

  const fileUploaded = !error && file;

  const stripAndDownload = useRemoveMetadata();

  const handleDownloadExif = () => {
    if (meaningful) {
      downloadExifJSON(rawExif, "raw-exif.json");
    }
  };

  return (
    <Panel className={`border-r ${!meaningful && "overflow-y-clip!"}`}>
      <Header
        heading="Exif Data / Camera"
        buttonLabel="Download Raw EXIF"
        onClickAction={handleDownloadExif}
      />
      {fileUploaded && !meaningful && exif && (
        <WarningPanel
          label="No EXIF data found for this image"
          content="This file does not have EXIF metadata. It may have been stripped or the camera did not include it."
        />
      )}
      <div className={`flex flex-col gap-y-lg ${!meaningful && "opacity-50"}`}>
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
