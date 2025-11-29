export const XMP_SLIDERS = [
  { key: "Exposure2012", label: "Exposure", min: -5, max: 5 },
  { key: "Contrast2012", label: "Contrast", min: -100, max: 100 },
  { key: "Highlights2012", label: "Highlights", min: -100, max: 100 },
  { key: "Shadows2012", label: "Shadows", min: -100, max: 100 },
  { key: "Whites2012", label: "Whites", min: -100, max: 100 },
  { key: "Blacks2012", label: "Blacks", min: -100, max: 100 },
  { key: "Clarity2012", label: "Clarity", min: -100, max: 100 },
  { key: "Vibrance", label: "Vibrance", min: -100, max: 100 },
  { key: "Saturation", label: "Saturation", min: -100, max: 100 },
  { key: "GrainAmount", label: "Grain", min: 0, max: 100 },
  { key: "Dehaze", label: "Dehaze", min: -100, max: 100 },
];

export const XMP_SLIDER_STYLES: Record<string, string> = {
  Exposure2012: "linear-gradient(90deg, #000, #fff)", // black -> white
  Contrast2012: "linear-gradient(90deg, #fff, #000)", // white -> black
  Highlights2012: "linear-gradient(90deg, #000, #fff)",
  Shadows2012: "linear-gradient(90deg, #fff, #000)",
  Whites2012: "linear-gradient(90deg, #000, #fff)",
  Blacks2012: "linear-gradient(90deg, #fff, #000)",
  Clarity2012: "linear-gradient(90deg, #ccc, #000)",

  Vibrance: "linear-gradient(90deg, #1e90ff, #ff1493)", // cool -> warm
  Saturation: "linear-gradient(90deg, red, yellow, green, cyan, blue, magenta)",

  Dehaze: "linear-gradient(90deg, #666, #fff)",

  SharpenDetail: "linear-gradient(90deg, #444, #fff)",
  SharpenRadius: "linear-gradient(90deg, #666, #ddd)",

  GrainAmount: "linear-gradient(90deg, #888, #fff)",
};
