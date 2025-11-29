export const XMP_SLIDERS = [
  // Basic - Presence / Tone
  { key: "Exposure2012", label: "Exposure", min: -5, max: 5 },
  { key: "Contrast2012", label: "Contrast", min: -100, max: 100 },
  { key: "Highlights2012", label: "Highlights", min: -100, max: 100 },
  { key: "Shadows2012", label: "Shadows", min: -100, max: 100 },
  { key: "Whites2012", label: "Whites", min: -100, max: 100 },
  { key: "Blacks2012", label: "Blacks", min: -100, max: 100 },

  // Presence
  { key: "Texture", label: "Texture", min: -100, max: 100 },
  { key: "Clarity2012", label: "Clarity", min: -100, max: 100 },
  { key: "Dehaze", label: "Dehaze", min: -100, max: 100 },
  { key: "Vibrance", label: "Vibrance", min: -100, max: 100 },
  { key: "Saturation", label: "Saturation", min: -100, max: 100 },

  // HSL - Hue
  { key: "HueAdjustmentRed", label: "Hue (Red)", min: -100, max: 100 },
  { key: "HueAdjustmentOrange", label: "Hue (Orange)", min: -100, max: 100 },
  { key: "HueAdjustmentYellow", label: "Hue (Yellow)", min: -100, max: 100 },
  { key: "HueAdjustmentGreen", label: "Hue (Green)", min: -100, max: 100 },
  { key: "HueAdjustmentAqua", label: "Hue (Aqua)", min: -100, max: 100 },
  { key: "HueAdjustmentBlue", label: "Hue (Blue)", min: -100, max: 100 },
  { key: "HueAdjustmentPurple", label: "Hue (Purple)", min: -100, max: 100 },
  { key: "HueAdjustmentMagenta", label: "Hue (Magenta)", min: -100, max: 100 },

  // HSL - Saturation
  {
    key: "SaturationAdjustmentRed",
    label: "Sat (Red)",
    min: -100,
    max: 100,
  },
  {
    key: "SaturationAdjustmentOrange",
    label: "Sat (Orange)",
    min: -100,
    max: 100,
  },
  {
    key: "SaturationAdjustmentYellow",
    label: "Sat (Yellow)",
    min: -100,
    max: 100,
  },
  {
    key: "SaturationAdjustmentGreen",
    label: "Sat (Green)",
    min: -100,
    max: 100,
  },
  { key: "SaturationAdjustmentAqua", label: "Sat (Aqua)", min: -100, max: 100 },
  { key: "SaturationAdjustmentBlue", label: "Sat (Blue)", min: -100, max: 100 },
  {
    key: "SaturationAdjustmentPurple",
    label: "Sat (Purple)",
    min: -100,
    max: 100,
  },
  {
    key: "SaturationAdjustmentMagenta",
    label: "Sat (Magenta)",
    min: -100,
    max: 100,
  },

  // HSL - Luminance
  {
    key: "LuminanceAdjustmentRed",
    label: "Lum (Red)",
    min: -100,
    max: 100,
  },
  {
    key: "LuminanceAdjustmentOrange",
    label: "Lum (Orange)",
    min: -100,
    max: 100,
  },
  {
    key: "LuminanceAdjustmentYellow",
    label: "Lum (Yellow)",
    min: -100,
    max: 100,
  },
  {
    key: "LuminanceAdjustmentGreen",
    label: "Lum (Green)",
    min: -100,
    max: 100,
  },
  { key: "LuminanceAdjustmentAqua", label: "Lum (Aqua)", min: -100, max: 100 },
  { key: "LuminanceAdjustmentBlue", label: "Lum (Blue)", min: -100, max: 100 },
  {
    key: "LuminanceAdjustmentPurple",
    label: "Lum (Purple)",
    min: -100,
    max: 100,
  },
  {
    key: "LuminanceAdjustmentMagenta",
    label: "Lum (Magenta)",
    min: -100,
    max: 100,
  },

  // Split Toning / Color Grading
  { key: "SplitToningShadowHue", label: "Shadow Hue", min: 0, max: 360 },
  {
    key: "SplitToningShadowSaturation",
    label: "Shadow Sat",
    min: 0,
    max: 100,
  },
  { key: "SplitToningHighlightHue", label: "Highlight Hue", min: 0, max: 360 },
  {
    key: "SplitToningHighlightSaturation",
    label: "Highlight Sat",
    min: 0,
    max: 100,
  },
  { key: "SplitToningBalance", label: "Balance", min: -100, max: 100 },

  // Detail - Sharpening
  { key: "SharpenRadius", label: "Sharpen Radius", min: 0, max: 3 },
  { key: "SharpenDetail", label: "Sharpen Detail", min: 0, max: 100 },
  { key: "SharpenEdgeMasking", label: "Sharpen Masking", min: 0, max: 100 },

  // Noise Reduction
  { key: "LuminanceSmoothing", label: "NR Luminance", min: 0, max: 100 },
  {
    key: "ColorNoiseReduction",
    label: "NR Color",
    min: 0,
    max: 100,
  },
  {
    key: "ColorNoiseReductionDetail",
    label: "NR Color Detail",
    min: 0,
    max: 100,
  },
  {
    key: "ColorNoiseReductionSmoothness",
    label: "NR Smoothness",
    min: 0,
    max: 100,
  },

  // Effects - Grain
  { key: "GrainAmount", label: "Grain Amount", min: 0, max: 100 },
  { key: "GrainSize", label: "Grain Size", min: 0, max: 100 },
  { key: "GrainFrequency", label: "Grain Roughness", min: 0, max: 100 },
];

// Base colors for HSL channels
const HSL_COLORS = {
  Red: "red",
  Orange: "orange",
  Yellow: "yellow",
  Green: "green",
  Aqua: "cyan",
  Blue: "blue",
  Purple: "purple",
  Magenta: "magenta",
};

// Auto generate gradients for Hue/Sat/Lum sliders
function genHslStyles() {
  const map: Record<string, string> = {};

  for (const [name, color] of Object.entries(HSL_COLORS)) {
    // HueAdjustment*
    map[`HueAdjustment${name}`] = `linear-gradient(90deg, ${color}, white)`;

    // SaturationAdjustment*
    map[
      `SaturationAdjustment${name}`
    ] = `linear-gradient(90deg, gray, ${color})`;

    // LuminanceAdjustment*
    map[
      `LuminanceAdjustment${name}`
    ] = `linear-gradient(90deg, black, ${color})`;
  }

  return map;
}

const HSL_STYLES = genHslStyles();

export const XMP_SLIDER_STYLES: Record<string, string> = {
  // Exposure / Tone
  Exposure2012: "linear-gradient(90deg, #000, #fff)",
  Contrast2012: "linear-gradient(90deg, #fff, #000)",
  Highlights2012: "linear-gradient(90deg, #000, #fff)",
  Shadows2012: "linear-gradient(90deg, #fff, #000)",
  Whites2012: "linear-gradient(90deg, #000, #fff)",
  Blacks2012: "linear-gradient(90deg, #fff, #000)",
  Clarity2012: "linear-gradient(90deg, #ccc, #000)",

  // Presence
  Vibrance: "linear-gradient(90deg, #1e90ff, #ff1493)",
  Saturation: "linear-gradient(90deg, red, yellow, green, cyan, blue, magenta)",
  Dehaze: "linear-gradient(90deg, #666, #fff)",

  // Sharpening
  SharpenDetail: "linear-gradient(90deg, #444, #fff)",
  SharpenRadius: "linear-gradient(90deg, #666, #ddd)",

  // Grain
  GrainAmount: "linear-gradient(90deg, #888, #fff)",
  GrainSize: "linear-gradient(90deg, #999, #fff)",
  GrainFrequency: "linear-gradient(90deg, #aaa, #fff)",

  // --- Split Toning / Color Grading ---

  // Hue sliders - full color wheel
  SplitToningShadowHue:
    "linear-gradient(90deg, red, yellow, lime, cyan, blue, magenta, red)",
  SplitToningHighlightHue:
    "linear-gradient(90deg, red, yellow, lime, cyan, blue, magenta, red)",

  // Saturation sliders - greyscale -> full color
  SplitToningShadowSaturation: "linear-gradient(90deg, #777, red)", // desaturated -> fully saturated
  SplitToningHighlightSaturation: "linear-gradient(90deg, #777, yellow)",

  // Balance - shadow → highlight
  SplitToningBalance: "linear-gradient(90deg, #2e2e6e, #ffd27f)", // cool shadows -> warm highlights

  // Detail - Sharpening
  SharpenEdgeMasking: "linear-gradient(90deg, #888, #000)",

  // Noise Reduction
  LuminanceSmoothing: "linear-gradient(90deg, #999, #eee)",
  ColorNoiseReduction: "linear-gradient(90deg, #55f, #fff)",
  ColorNoiseReductionDetail: "linear-gradient(90deg, #55f, #ccc)",
  ColorNoiseReductionSmoothness: "linear-gradient(90deg, #55f, #eee)",

  ...HSL_STYLES,
};

export const XMP_GROUPS = [
  {
    title: "Tone",
    keys: [
      "Exposure2012",
      "Contrast2012",
      "Highlights2012",
      "Shadows2012",
      "Whites2012",
      "Blacks2012",
    ],
  },
  {
    title: "Presence",
    keys: ["Texture", "Clarity2012", "Dehaze", "Vibrance", "Saturation"],
  },
  {
    title: "HSL - Hue",
    keys: [
      "HueAdjustmentRed",
      "HueAdjustmentOrange",
      "HueAdjustmentYellow",
      "HueAdjustmentGreen",
      "HueAdjustmentAqua",
      "HueAdjustmentBlue",
      "HueAdjustmentPurple",
      "HueAdjustmentMagenta",
    ],
  },
  {
    title: "HSL - Saturation",
    keys: [
      "SaturationAdjustmentRed",
      "SaturationAdjustmentOrange",
      "SaturationAdjustmentYellow",
      "SaturationAdjustmentGreen",
      "SaturationAdjustmentAqua",
      "SaturationAdjustmentBlue",
      "SaturationAdjustmentPurple",
      "SaturationAdjustmentMagenta",
    ],
  },
  {
    title: "HSL - Luminance",
    keys: [
      "LuminanceAdjustmentRed",
      "LuminanceAdjustmentOrange",
      "LuminanceAdjustmentYellow",
      "LuminanceAdjustmentGreen",
      "LuminanceAdjustmentAqua",
      "LuminanceAdjustmentBlue",
      "LuminanceAdjustmentPurple",
      "LuminanceAdjustmentMagenta",
    ],
  },
  {
    title: "Split Toning / Color Grading",
    keys: [
      "SplitToningShadowHue",
      "SplitToningShadowSaturation",
      "SplitToningHighlightHue",
      "SplitToningHighlightSaturation",
      "SplitToningBalance",
    ],
  },
  {
    title: "Detail - Sharpening",
    keys: ["SharpenRadius", "SharpenDetail", "SharpenEdgeMasking"],
  },
  {
    title: "Noise Reduction",
    keys: [
      "LuminanceSmoothing",
      "ColorNoiseReduction",
      "ColorNoiseReductionDetail",
      "ColorNoiseReductionSmoothness",
    ],
  },
  {
    title: "Effects - Grain",
    keys: ["GrainAmount", "GrainSize", "GrainFrequency"],
  },
];

export const DEFAULT_XMP = Object.fromEntries(
  XMP_SLIDERS.map((s) => [s.key, 0])
);
