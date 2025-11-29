export type ExifData = {
  Width: number | null;
  Height: number | null;
  ExposureTime?: number;
  FNumber?: number;
  ISO?: number;
  Flash?: string;
  FocalLength?: number;
  MeteringMode?: string;
  ExposureProgram?: string;
  DateTimeOriginal?: string;
  Software?: string;
  CameraProfile?: string;
  CameraMake?: string;
  CameraModel?: string;
  LensModel?: string;
};

export type ImageMetadata = {
  exif: ExifData | null;
  xmp: Record<string, unknown> | null;
  rawExif: Record<string, unknown> | null;
  iptc: Record<string, unknown> | null;
};
