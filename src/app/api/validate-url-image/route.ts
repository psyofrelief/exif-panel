import { NextResponse } from "next/server";

const ALLOWED_TYPES = ["image/jpeg", "image/png", "image/webp", "image/tiff"];

export async function POST(req: Request) {
  try {
    const form = await req.formData();

    const file = form.get("file") as File | null;
    const imgUrl = form.get("url") as string | null;

    // Handle image URL case
    if (imgUrl) {
      let parsed: URL;
      try {
        parsed = new URL(imgUrl);
      } catch {
        return NextResponse.json(
          { error: "Invalid URL format" },
          { status: 400 }
        );
      }

      const res = await fetch(parsed.toString(), { method: "GET" });

      if (!res.ok) {
        return NextResponse.json(
          { error: "URL could not be fetched" },
          { status: 400 }
        );
      }

      const contentType = res.headers.get("content-type") ?? "";
      // Ensure content type from URL headers is also checked robustly
      const isImage = ALLOWED_TYPES.some((t) =>
        contentType.toLowerCase().includes(t)
      );

      if (!isImage) {
        return NextResponse.json(
          { error: "URL does not point to a supported image format" },
          { status: 400 }
        );
      }

      return NextResponse.json({ ok: true, type: "url", contentType });
    }

    // Handle uploaded file case
    if (file) {
      // 1. Check for empty file size first.
      if (file.size === 0) {
        return NextResponse.json({ error: "File is empty" }, { status: 400 });
      }

      // Safely access and sanitize file type, ensuring it is trimmed and lowercase for validation.
      const rawFileType = file.type || "";
      const sanitizedFileType = rawFileType.trim().toLowerCase();

      // 2. Check the file type.
      if (!ALLOWED_TYPES.includes(sanitizedFileType)) {
        return NextResponse.json(
          { error: "Unsupported file type" },
          { status: 400 }
        );
      }

      return NextResponse.json({
        ok: true,
        type: "file",
        // Return the original file type, but validation used the sanitized version
        contentType: file.type,
      });
    }

    // Nothing provided
    return NextResponse.json(
      { error: "Provide either a file or a URL" },
      { status: 400 }
    );
  } catch (err) {
    console.error("Image check failed:", err);
    return NextResponse.json(
      { error: "Server error validating image. Try different URL" },
      { status: 500 }
    );
  }
}
