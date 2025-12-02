import { NextResponse } from "next/server";
import exifr from "exifr";
import { formatIptcValue } from "@/features/Analyser/utils/format";
import { extractXmpSliders } from "@/features/Analyser/utils/flattenXmp";

export async function POST(req: Request) {
  const form = await req.formData();
  const file = form.get("file") as File | null;
  let imageUrl = form.get("imageUrl") as string | null;

  if (imageUrl?.startsWith("/")) {
    const base = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
    imageUrl = base + imageUrl;
  }

  let buffer: Buffer;

  // --- FILE MODE ---
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

    buffer = Buffer.from(await file.arrayBuffer());
  }

  // --- URL MODE ---
  else if (imageUrl) {
    const res = await fetch(imageUrl);
    if (!res.ok) {
      return NextResponse.json(
        { error: "Failed to fetch image" },
        { status: 400 }
      );
    }

    buffer = Buffer.from(await res.arrayBuffer());
  } else {
    return NextResponse.json({ error: "No image provided" }, { status: 400 });
  }

  // Parse EXIF safely
  let metadata: any = {};
  try {
    metadata =
      (await exifr.parse(buffer, {
        tiff: true,
        exif: true,
        gps: true,
        xmp: true,
        icc: true,
        jfif: true,
        iptc: true,
        interop: true,
      })) || {};
  } catch (e) {
    console.warn(
      "No metadata found (EXIF parse failed). Continuing with empty metadata:",
      e
    );
    metadata = {};
  }

  // Build EXIF fields safely
  const exifFields = {
    Width: metadata?.ExifImageWidth ?? metadata?.ImageWidth ?? null,
    Height: metadata?.ExifImageHeight ?? metadata?.ImageHeight ?? null,
    FNumber: metadata?.FNumber ?? null,
    Flash: metadata?.Flash ?? null,
    MeteringMode: metadata?.MeteringMode ?? null,
    ExposureMode: metadata?.ExposureMode ?? null,
    FocalLength: metadata?.FocalLength ?? null,
    ExposureTime: metadata?.ExposureTime ?? null,
    ISO: metadata?.ISO ?? null,
    LensModel: metadata?.LensModel ?? null,
    CameraMake: metadata?.Make ?? null,
    CameraModel: metadata?.Model ?? null,
    DateTimeOriginal: metadata?.DateTimeOriginal ?? null,
    GPSLatitude: metadata?.GPSLatitude ?? null,
    GPSLongitude: metadata?.GPSLongitude ?? null,
    GPSAltitude: metadata?.GPSAltitude ?? null,
  };

  // IPTC safe formatting
  const iptcRaw = {
    DateCreated: metadata?.DateCreated,
    TimeCreated: metadata?.TimeCreated,
    DigitalCreationDate: metadata?.DigitalCreationDate,
    DigitalCreationTime: metadata?.DigitalCreationTime,
  };

  const iptc = Object.fromEntries(
    Object.entries(iptcRaw).map(([k, v]) => [k, formatIptcValue(v)])
  );

  // XMP sliders safely extracted
  const xmpFields = extractXmpSliders(metadata);

  return NextResponse.json({
    exif: exifFields,
    xmp: xmpFields,
    rawExif: metadata,
    iptc,
  });
}
