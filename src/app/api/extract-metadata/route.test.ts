import { POST } from "@/app/api/extract-metadata/route";
import exifr from "exifr";

jest.mock("exifr", () => ({
  parse: jest.fn(),
}));

global.fetch = jest.fn();

// Helper to build mock req with FormData
function createRequest(body: FormData) {
  return new Request("http://localhost/api/extract-metadata", {
    method: "POST",
    body,
  });
}

function mockFile(opts: { type?: string; buffer?: Uint8Array }) {
  const data = opts.buffer ?? new Uint8Array([1, 2, 3]);
  return {
    type: opts.type ?? "image/jpeg",
    arrayBuffer: async () => data,
  } as unknown as File;
}

describe("POST /api/extract-metadata", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("returns 400 when neither file nor imageUrl is provided", async () => {
    const form = new FormData();
    const req = createRequest(form);

    const res = await POST(req);
    const json = await res.json();

    expect(res.status).toBe(400);
    expect(json.error).toBe("No image provided");
  });

  it("returns 400 for unsupported file types", async () => {
    const form = new FormData();
    form.append("file", mockFile({ type: "application/pdf" }));

    const req = createRequest(form);

    const res = await POST(req);
    const json = await res.json();

    expect(res.status).toBe(400);
    expect(json.error).toBe("Unsupported file type");
  });

  it("extracts metadata from a valid file upload", async () => {
    const fakeMetadata = {
      FNumber: 2.8,
      ISO: 100,
      LensModel: "Sigma 35mm",
    };

    // Mock exifr.parse. return fake metadata
    (exifr.parse as jest.Mock).mockResolvedValue(fakeMetadata);

    // Properly mocked file that behaves like a real browser file
    const mockFileObj = new File(["dummy"], "test.jpg", { type: "image/jpeg" });
    mockFileObj.arrayBuffer = async () =>
      new TextEncoder().encode("dummy").buffer;

    const form = new FormData();
    form.append("file", mockFileObj);

    const req = createRequest(form);
    const res = await POST(req);
    const json = await res.json();

    expect(res.status).toBe(200);
    expect(json.exif.ISO).toBe(100);
    expect(json.exif.LensModel).toBe("Sigma 35mm");
    expect(json.rawExif).toEqual(fakeMetadata);
  });

  it("extracts metadata from a remote image URL", async () => {
    const fakeBuffer = new Uint8Array([9, 9, 9]);
    const fakeMetadata = { Make: "Canon" };

    (global.fetch as jest.Mock).mockResolvedValue({
      ok: true,
      arrayBuffer: async () => fakeBuffer,
      headers: { get: () => "image/jpeg" },
    });

    (exifr.parse as jest.Mock).mockResolvedValue(fakeMetadata);

    const form = new FormData();
    form.append("imageUrl", "https://example.com/test.jpg");

    const req = createRequest(form);
    const res = await POST(req);
    const json = await res.json();

    expect(res.status).toBe(200);
    expect(json.exif.CameraMake).toBe("Canon");
  });

  it("returns error metadata when exifr.parse throws", async () => {
    (exifr.parse as jest.Mock).mockRejectedValue(new Error("bad exif"));

    const form = new FormData();
    form.append("file", mockFile({ type: "image/jpeg" }));

    const req = createRequest(form);
    const res = await POST(req);
    const json = await res.json();

    expect(res.status).toBe(400);
    expect(json.rawExif).toEqual(undefined);
  });

  it("returns 400 if imageUrl fails to fetch", async () => {
    (global.fetch as jest.Mock).mockResolvedValue({
      ok: false,
    });

    const form = new FormData();
    form.append("imageUrl", "https://example.com/missing.jpg");

    const req = createRequest(form);
    const res = await POST(req);
    const json = await res.json();

    expect(res.status).toBe(400);
    expect(json.error).toBe("Failed to fetch image");
  });
});
