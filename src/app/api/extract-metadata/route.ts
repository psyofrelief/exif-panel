import { NextResponse } from "next/server";
import exifr from "exifr";
import { formatIptcValue } from "@/features/Analyser/utils/format";
import { extractXmpSliders } from "@/features/Analyser/utils/flattenXmp";

export async function POST(req: Request) {
  const form = await req.formData();
  const file = form.get("file") as File | null;
  let imageUrl = form.get("imageUrl") as string | null;

  if (imageUrl && imageUrl.startsWith("/")) {
    const base = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
    imageUrl = base + imageUrl;
  }

  let buffer: Buffer;

  if (file) {
    if (
      !["image/jpeg", "image/png", "image/tiff", "image/webp"].includes(
        file.type
      )
    ) {
      return NextResponse.json(
        { error: "Unsupported file type" },
        { status: 400 }
      );
    }
    if (file.size > 10 * 1024 * 1024) {
      return NextResponse.json({ error: "File too large" }, { status: 400 });
    }

    buffer = Buffer.from(await file.arrayBuffer());
  } else if (imageUrl) {
    try {
      new URL(imageUrl);
    } catch {
      return NextResponse.json({ error: "Invalid URL" }, { status: 400 });
    }

    const res = await fetch(imageUrl);
    if (!res.ok) {
      return NextResponse.json(
        { error: "Failed to fetch image" },
        { status: 400 }
      );
    }

    const contentType = res.headers.get("content-type") || "";

    // Allow Next.js public assets
    const isLikelyImage =
      contentType.startsWith("image/") ||
      imageUrl.startsWith("/") ||
      imageUrl.startsWith("http://localhost") ||
      imageUrl.startsWith("https://myplaceholderuntilibuydomainfaried.com");

    if (!isLikelyImage) {
      return NextResponse.json(
        { error: "URL does not point to an image" },
        { status: 400 }
      );
    }

    buffer = Buffer.from(await res.arrayBuffer());
  } else {
    return NextResponse.json({ error: "No image provided" }, { status: 400 });
  }

  const metadata = await exifr.parse(buffer, {
    tiff: true,
    exif: true,
    gps: true,
    xmp: true,
    icc: true,
    jfif: true,
    iptc: true,
    interop: true,
  });

  const width =
    metadata.ExifImageWidth ??
    metadata.ImageWidth ??
    metadata.PixelXDimension ??
    null;

  const height =
    metadata.ExifImageHeight ??
    metadata.ImageHeight ??
    metadata.PixelYDimension ??
    null;

  // EXIF bucket
  const exifFields = {
    Width: width,
    Height: height,
    FNumber: metadata.FNumber,
    FocalLength: metadata.FocalLength,
    ISO: metadata.ISO,
    Aperture: metadata.ApertureValue,
    ShutterSpeed: metadata.ShutterSpeedValue,
    Flash: metadata.Flash,

    ExposureTime: metadata.ExposureTime,
    ExposureCompensation: metadata.ExposureCompensation,
    MeteringMode: metadata.MeteringMode,
    ExposureProgram: metadata.ExposureProgram,
    SceneCaptureType: metadata.SceneCaptureType,

    CreateDate: metadata.CreateDate,
    DateTimeOriginal: metadata.DateTimeOriginal,

    CameraMake: metadata.Make,
    CameraModel: metadata.Model,
    LensModel: metadata.LensModel,
    FocalLengthIn35mmFormat: metadata.FocalLengthIn35mmFormat,
    Software: metadata.Software,

    WhiteBalance: metadata.WhiteBalance,
    LightSource: metadata.LightSource,

    XResolution: metadata.XResolution,
    YResolution: metadata.YResolution,

    GPSLatitude: metadata.GPSLatitude,
    GPSLongitude: metadata.GPSLongitude,
    GPSAltitude: metadata.GPSAltitude,
  };

  const iptcRaw = {
    DateCreated: metadata.DateCreated,
    TimeCreated: metadata.TimeCreated,
    DigitalCreationDate: metadata.DigitalCreationDate,
    DigitalCreationTime: metadata.DigitalCreationTime,
  };

  const iptc = Object.fromEntries(
    Object.entries(iptcRaw).map(([k, v]) => [k, formatIptcValue(v)])
  );

  const xmpFields = extractXmpSliders(metadata);

  return NextResponse.json({
    exif: exifFields,
    xmp: xmpFields,
    rawExif: metadata,
    iptc,
  });
}
