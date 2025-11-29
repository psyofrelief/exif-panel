import { XMP_SLIDERS } from "../constants/xmp";

export function extractXmpSliders(obj: Record<string, any>) {
  const allowedKeys = XMP_SLIDERS.map((s) => s.key);
  const sliders: Record<string, number> = {};

  for (const key of allowedKeys) {
    if (typeof obj[key] === "number") {
      sliders[key] = obj[key];
    }
  }

  return sliders;
}
