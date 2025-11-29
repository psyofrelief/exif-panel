export const EXIF_GROUPS = [
  {
    title: "Camera",
    fields: [
      { label: "Make", key: "CameraMake" },
      { label: "Model", key: "CameraModel" },
      { label: "Lens", key: "LensModel" },
      { label: "Software", key: "Software" },
    ],
  },
  {
    title: "Exposure",
    fields: [
      { label: "F-Stop", key: "FNumber" },
      { label: "Exposure Time", key: "ExposureTime" },
      { label: "ISO", key: "ISO" },
      { label: "Focal Length", key: "FocalLength" },
      { label: "Exposure Program", key: "ExposureProgram" },
      { label: "Metering Mode", key: "MeteringMode" },
      { label: "Flash", key: "Flash" },
    ],
  },
  {
    title: "Image",
    fields: [
      { label: "Date Taken", key: "DateTimeOriginal", format: "date" },
      { label: "Image Width", key: "Width" },
      { label: "Image Height", key: "Height" },
    ],
  },
  {
    title: "GPS",
    fields: [
      { label: "Latitude", key: "GPSLatitude" },
      { label: "Longitude", key: "GPSLongitude" },
      { label: "Altitude", key: "GPSAltitude" },
    ],
  },
];
