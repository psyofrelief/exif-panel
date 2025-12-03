import { useAnalyserContext } from "@/contexts/analyserContext";
import RawDataRow from "../components/RawDataRow";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/Accordion";
import { hasMeaningfulExif } from "../utils/hasMeaningfulExif";
import { formatValue } from "../utils/format";

export default function RawDataAccordion() {
  const { metadata } = useAnalyserContext();
  const { exif, rawExif, iptc, xmp } = metadata;
  const meaningful = hasMeaningfulExif(exif);

  const hasXmp = !!xmp && Object.keys(xmp).length > 0;

  return (
    <Accordion
      type="single"
      collapsible
      className="grid grid-cols-1 w-full gap-xs flex-col "
    >
      <AccordionItem value="raw-iptc">
        <AccordionTrigger>IPTC Data</AccordionTrigger>
        <AccordionContent>
          <ul>
            {meaningful &&
              iptc &&
              Object.entries(iptc).map(([key, value], idx) => {
                const display = formatValue(value);
                if (display === "") return null;
                return (
                  <RawDataRow
                    key={key}
                    value={key}
                    display={display}
                    idx={idx}
                  />
                );
              })}
          </ul>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="raw-exif">
        <AccordionTrigger>Raw EXIF Data</AccordionTrigger>
        <AccordionContent>
          <ul>
            {meaningful &&
              rawExif &&
              Object.entries(rawExif).map(([key, value], idx) => {
                if (typeof value === "object" && value !== null) return null;

                const display = formatValue(value);
                if (display === "") return null;

                return (
                  <RawDataRow
                    key={key}
                    value={key}
                    display={display}
                    idx={idx}
                  />
                );
              })}
          </ul>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="raw-xmp">
        <AccordionTrigger>Raw XMP Data</AccordionTrigger>
        <AccordionContent>
          <ul>
            {meaningful && hasXmp ? (
              Object.entries(xmp).map(([key, value], idx) => {
                return (
                  <RawDataRow key={key} value={key} display={value} idx={idx} />
                );
              })
            ) : (
              <RawDataRow value="No XMP Data" idx={1} display={null} />
            )}
          </ul>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
