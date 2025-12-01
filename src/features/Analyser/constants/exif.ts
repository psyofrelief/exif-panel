import { ExifData } from "@/types/analyser";

export const EXIF_GROUPS: {
  title: string;
  fields: { label: string; key: keyof ExifData; format?: "date" }[];
}[] = [
  {
    title: "Camera",
    fields: [
      { label: "Make", key: "CameraMake" as keyof ExifData },
      { label: "Model", key: "CameraModel" as keyof ExifData },
      { label: "Lens", key: "LensModel" as keyof ExifData },
      { label: "Software", key: "Software" as keyof ExifData },
    ],
  },
  {
    title: "Exposure",
    fields: [
      { label: "F-Stop", key: "FNumber" as keyof ExifData },
      { label: "Exposure Time", key: "ExposureTime" as keyof ExifData },
      { label: "ISO", key: "ISO" as keyof ExifData },
      { label: "Focal Length", key: "FocalLength" as keyof ExifData },
      { label: "Exposure Program", key: "ExposureProgram" as keyof ExifData },
      { label: "Metering Mode", key: "MeteringMode" as keyof ExifData },
      { label: "Flash", key: "Flash" as keyof ExifData },
    ],
  },
  {
    title: "Image",
    fields: [
      {
        label: "Date Taken",
        key: "DateTimeOriginal" as keyof ExifData,
        format: "date",
      },
      { label: "Image Width", key: "Width" as keyof ExifData },
      { label: "Image Height", key: "Height" as keyof ExifData },
    ],
  },
  {
    title: "GPS",
    fields: [
      { label: "Latitude", key: "GPSLatitude" as keyof ExifData },
      { label: "Longitude", key: "GPSLongitude" as keyof ExifData },
      { label: "Altitude", key: "GPSAltitude" as keyof ExifData },
    ],
  },
];
