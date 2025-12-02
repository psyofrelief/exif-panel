const MEANINGFUL_EXIF_KEYS = [
  "FNumber",
  "ExposureTime",
  "ISO",
  "FocalLength",
  "DateTimeOriginal",
  "CreateDate",
  "LensModel",
  "CameraMake",
  "CameraModel",
  "FocalLengthIn35mmFormat",
];

export function hasMeaningfulExif(
  exif: Record<string, null> | null | undefined
) {
  console.log("Checking meaningful EXIF for:", exif);
  if (!exif) return false;

  return MEANINGFUL_EXIF_KEYS.some((key) => {
    const v = exif[key];
    return v !== null && v !== undefined;
  });
}
