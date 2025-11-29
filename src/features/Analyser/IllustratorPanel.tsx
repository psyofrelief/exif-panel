import Panel from "@/components/shared/Panel";
import { useAnalyserContext } from "@/contexts/analyserContext";
import XmpSliderRow from "./components/XmpSliderRow";
import { XMP_SLIDER_STYLES } from "./constants/xmp";

export default function IllustratorPanel() {
  const { metadata } = useAnalyserContext();
  const xmp = metadata.xmp;

  if (!xmp) return null;

  return (
    <Panel className="border-r size-full bg-green-200 col-span-2 p-md">
      <ul className="space-y-md">
        {Object.entries(xmp).map(([key, value]) => {
          if (typeof value !== "number") return null;

          const track =
            XMP_SLIDER_STYLES[key] ?? "linear-gradient(90deg, #ddd, #000)";

          return (
            <XmpSliderRow
              key={key}
              label={key}
              value={value}
              min={-100}
              max={100}
              track={track}
            />
          );
        })}
      </ul>
    </Panel>
  );
}
