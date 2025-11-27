// app/api/analyze/route.ts
import { NextResponse } from "next/server";
import exifr from "exifr";

export async function POST(req: Request) {
  const form = await req.formData();
  const file = form.get("file") as File;

  if (!file) {
    return NextResponse.json({ error: "No file" }, { status: 400 });
  }

  // convert File → ArrayBuffer
  const buffer = Buffer.from(await file.arrayBuffer());

  // extract EVERYTHING in one go
  const exif = await exifr.parse(buffer, {
    tiff: true,
    exif: true,
    gps: true,
    xmp: true,
    icc: true,
    jfif: true,
    iptc: true,
    interop: true,
  });

  return NextResponse.json({ exif });
}
