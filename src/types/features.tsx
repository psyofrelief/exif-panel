import { ReactNode } from "react";
import SearchIcon from "@/components/icons/SearchIcon";
import EraseIcon from "@/components/icons/EraseIcon";
import SlidersIcon from "@/components/icons/SlidersIcon";
import SwatchesIcon from "@/components/icons/SwatchesIcon";

export type FeatureItem = {
  label: string;
  content: string;
  icon: ReactNode;
};

export const features: FeatureItem[] = [
  {
    label: "Deep Metadata Analysis",
    content:
      "View full EXIF, GPS, XMP sliders, HSL adjustments, sharpening, grain, and more—exactly how the photo was edited.",
    icon: <SearchIcon />,
  },
  {
    label: "Strip Metadata Safely",
    content:
      "Remove all EXIF, XMP, and IPTC data from any image and download a clean file ready for sharing.",

    icon: <EraseIcon />,
  },
  {
    label: "Rebuild Lightroom Looks",
    content:
      "Instantly convert XMP slider data into usable presets. Understand tone, color grading, and calibration settings at a professional level.",

    icon: <SlidersIcon />,
  },
  {
    label: "Try Sample Images",
    content:
      "Experiment with high-quality sample photos already embedded with full EXIF + XMP data to see how real edits are constructed.",

    icon: <SwatchesIcon />,
  },
];
