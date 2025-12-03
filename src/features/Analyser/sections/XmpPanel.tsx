import Panel from "@/components/shared/Panel";
import { useAnalyserContext } from "@/contexts/analyserContext";
import XmpSliderRow from "../components/XmpSliderRow";
import { XMP_GROUPS, XMP_SLIDERS, XMP_SLIDER_STYLES } from "../constants/xmp";
import { buildXmpPreset, downloadXmp } from "../utils/exportXmp";
import Header from "../components/Header";
import Heading from "@/components/ui/Heading";
import WarningPanel from "../components/WarningPanel";

export default function IllustratorPanel() {
  const { metadata, file, error } = useAnalyserContext();
  const xmp = metadata.xmp;

  const hasXmp = !!xmp && Object.keys(xmp).length > 0;

  const fileUploaded = !error && file;

  const handleDownloadXmp = () => {
    if (hasXmp) {
      const preset = buildXmpPreset(xmp);
      downloadXmp("preset", preset);
    }
  };

  return (
    <Panel className={`border-r ${!hasXmp && "overflow-y-clip!"}`}>
      <Header
        heading="Lightroom / XMP"
        buttonLabel="Download XMP Preset"
        onClickAction={handleDownloadXmp}
      />
      {fileUploaded && !hasXmp && (
        <WarningPanel
          label="
          No XMP / Lightroom data found for this image"
          content="This file does not have XMP metadata. It may have been stripped or this file was not edited in Lightroom."
        />
      )}

      <div className={`flex flex-col gap-y-lg ${!hasXmp && "opacity-50"}`}>
        {XMP_GROUPS.map((group) => (
          <div key={group.title} className="flex flex-col gap-y-xs">
            <Heading size="small">{group.title}</Heading>

            <ul className="gap-y-sm">
              {group.keys.map((key) => {
                const slider = XMP_SLIDERS.find((s) => s.key === key);
                if (!slider) return null;

                const raw = hasXmp ? xmp?.[key] : undefined;
                const value = typeof raw === "number" ? raw : 0;

                const track =
                  XMP_SLIDER_STYLES[key] ??
                  "linear-gradient(90deg, #ccc, #000)";

                return (
                  <XmpSliderRow
                    key={key}
                    label={slider.label}
                    value={value}
                    min={slider.min}
                    max={slider.max}
                    track={track}
                  />
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </Panel>
  );
}
