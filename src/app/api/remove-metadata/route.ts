import { NextResponse } from "next/server";
import sharp from "sharp";

export async function POST(req: Request) {
  try {
    const form = await req.formData();
    const file = form.get("file") as File | null;

    if (!file) {
      return NextResponse.json({ error: "No file provided" }, { status: 400 });
    }

    // Convert uploaded file -> Node Buffer
    const array = await file.arrayBuffer();
    const buffer = Buffer.from(array);

    // Detect input format
    const input = sharp(buffer);
    const meta = await input.metadata();

    let cleaned: Buffer;

    switch (meta.format) {
      case "jpeg":
        cleaned = await input.jpeg({ quality: 100 }).toBuffer();
        break;
      case "png":
        cleaned = await input.png().toBuffer();
        break;
      case "webp":
        cleaned = await input.webp({ quality: 100 }).toBuffer();
        break;
      default:
        return NextResponse.json(
          { error: "Unsupported image type" },
          { status: 400 }
        );
    }

    return new NextResponse(new Uint8Array(cleaned), {
      status: 200,
      headers: {
        "Content-Type": file.type,
        "Content-Disposition": `attachment; filename="cleaned-${file.name}"`,
      },
    });
  } catch (err) {
    console.error("Metadata removal error:", err);
    return NextResponse.json(
      { error: "Failed to remove metadata" },
      { status: 500 }
    );
  }
}
