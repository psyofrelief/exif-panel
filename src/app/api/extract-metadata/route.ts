import { NextResponse } from "next/server";
import exifr from "exifr";

export async function POST(req: Request) {
  const form = await req.formData();
  const file = form.get("file") as File | null;
  const imageUrl = form.get("imageUrl") as string | null;

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
    if (!contentType.startsWith("image/")) {
      return NextResponse.json(
        { error: "URL does not point to an image" },
        { status: 400 }
      );
    }

    buffer = Buffer.from(await res.arrayBuffer());
  } else {
    return NextResponse.json({ error: "No image provided" }, { status: 400 });
  }

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
