import Panel from "@/components/shared/Panel";
import { useAnalyserContext } from "@/contexts/analyserContext";
import XmpSliderRow from "./components/XmpSliderRow";
import { XMP_GROUPS, XMP_SLIDERS, XMP_SLIDER_STYLES } from "./constants/xmp";
import Button from "@/components/ui/Button";
import { buildXmpPreset, downloadXmp } from "./utils/exportXmp";

export default function IllustratorPanel() {
  const { metadata } = useAnalyserContext();
  const xmp = metadata.xmp;

  if (!xmp) return null;

  const handleDownload = () => {
    const preset = buildXmpPreset(xmp);
    downloadXmp("preset", preset);
  };

  return (
    <Panel className="border-r size-full bg-green-200 col-span-2 p-md">
      <Button onClick={handleDownload} className="mb-md">
        Download XMP Preset
      </Button>
      {XMP_GROUPS.map((group) => (
        <div key={group.title} className="mb-xl">
          <h3 className="font-semibold mb-sm">{group.title}</h3>

          <ul className="space-y-md">
            {group.keys.map((key) => {
              const slider = XMP_SLIDERS.find((s) => s.key === key);
              if (!slider) return null;

              const value = xmp[key];
              if (typeof value !== "number") return null;

              const track =
                XMP_SLIDER_STYLES[key] ?? "linear-gradient(90deg, #ccc, #000)";

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
    </Panel>
  );
}
