export type ProcessStep = {
  id: number;
  title: string;
  description: string;
};

export const processSteps: ProcessStep[] = [
  {
    id: 1,
    title: "Upload a Photo",
    description:
      "Choose a photo directly from your device, or simply paste a URL. Supported formats currently are JPEG, PNG, TIFF, and WebP.",
  },
  {
    id: 2,
    title: "Extract Metadata",
    description:
      "We scan the image and pull out all available EXIF, XMP, and IPTC data - including camera settings and Lightroom adjustments.",
  },
  {
    id: 3,
    title: "Explore the Edit",
    description:
      "View structured sliders, color grading, tone values, and camera settings to understand exactly how the photo was created.",
  },
  {
    id: 4,
    title: "Download or Recreate",
    description:
      "Export the metadata as a dedicated preset file, or replicate the original adjustments in editing tools like Lightroom, Capture One, or your chosen editor.",
  },
];
