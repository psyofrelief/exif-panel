// src/features/analyser/constants/exifFields.ts
import { ExifData } from "@/types/analyser";

export const EXIF_FIELDS: { key: keyof ExifData; label: string }[] = [
  { key: "Height", label: "Height" },
  { key: "Width", label: "Width" },
  { key: "FNumber", label: "FNumber" },
  { key: "ExposureTime", label: "Shutter Speed" },
  { key: "FocalLength", label: "Focal Length" },
  { key: "ISO", label: "ISO" },
  { key: "ExposureProgram", label: "Exposure Program" },
  { key: "MeteringMode", label: "Metering Mode" },
  { key: "Flash", label: "Flash" },
  { key: "DateTimeOriginal", label: "Date Taken" },
  { key: "LensModel", label: "Lens" },
  { key: "CameraMake", label: "Camera Make" },
  { key: "CameraModel", label: "Camera Model" },
  { key: "Software", label: "Software" },
  { key: "CameraProfile", label: "Camera Profile" },
];
