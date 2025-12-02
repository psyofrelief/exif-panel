export type FeatureItem = {
  label: string;
  content: string;
};

export const features: FeatureItem[] = [
  {
    label: "Deep Metadata Analysis",
    content:
      "View full EXIF, GPS, XMP sliders, HSL adjustments, sharpening, grain, and more—exactly how the photo was edited.",
  },
  {
    label: "Strip Metadata Safely",
    content:
      "Remove all EXIF, XMP, and IPTC data from any image and download a clean file ready for sharing.",
  },
  {
    label: "Rebuild Lightroom Looks",
    content:
      "Instantly convert XMP slider data into usable presets. Understand tone, color grading, and calibration settings at a professional level.",
  },
  {
    label: "Try Sample Images",
    content:
      "Experiment with high-quality sample photos already embedded with full EXIF + XMP data to see how real edits are constructed.",
  },
];
