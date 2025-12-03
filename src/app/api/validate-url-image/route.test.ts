import { POST } from "@/app/api/validate-url-image/route";

// Mock global.fetch to control API external calls
global.fetch = jest.fn();

// Helper to build mock req with FormData
function createRequest(body: FormData) {
  return new Request("http://localhost/api/validate-image", {
    method: "POST",
    body,
  });
}

// Helper to create a mock File object
function mockFile(name: string, type: string, size = 100) {
  // Mock File constructor to allow setting name, type, and size
  const file = {
    name,
    type,
    size,
    arrayBuffer: async () => new ArrayBuffer(size), // Mock buffer for size check
    // Ensure File instance works with FormData
    [Symbol.toStringTag]: "File",
  };
  return file as unknown as File;
}

describe("POST /api/validate-image", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  // --- General Cases ---

  it("returns 400 when neither file nor URL is provided", async () => {
    const form = new FormData();
    const req = createRequest(form);

    const res = await POST(req);
    const json = await res.json();

    expect(res.status).toBe(400);
    expect(json.error).toBe("Provide either a file or a URL");
  });

  // --- File Upload Tests ---

  it("returns 400 for unsupported file types", async () => {
    const form = new FormData();
    form.append("file", mockFile("test.pdf", "application/pdf"));

    const req = createRequest(form);
    const res = await POST(req);
    const json = await res.json();

    expect(res.status).toBe(400);
    expect(json.error).toBe("Unsupported file type");
  });

  // --- URL Validation Tests ---

  it("returns 400 for an invalid URL format", async () => {
    const form = new FormData();
    form.append("url", "not-a-valid-url");

    const req = createRequest(form);
    const res = await POST(req);
    const json = await res.json();

    expect(res.status).toBe(400);
    expect(json.error).toBe("Invalid URL format");
  });

  it("returns 400 if the URL fetch fails (res.ok is false)", async () => {
    (global.fetch as jest.Mock).mockResolvedValueOnce({
      ok: false,
      status: 404,
    });

    const form = new FormData();
    form.append("url", "http://example.com/404.jpg");

    const req = createRequest(form);
    const res = await POST(req);
    const json = await res.json();

    expect(res.status).toBe(400);
    expect(json.error).toBe("URL could not be fetched");
  });

  it("returns 400 if URL points to an unsupported content type", async () => {
    (global.fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      headers: {
        get: (key: string) => (key === "content-type" ? "text/html" : ""),
      },
    });

    const form = new FormData();
    form.append("url", "http://example.com/page.html");

    const req = createRequest(form);
    const res = await POST(req);
    const json = await res.json();

    expect(res.status).toBe(400);
    expect(json.error).toBe("URL does not point to a supported image format");
  });

  it("returns 200 and details for a valid remote image URL (WEBP)", async () => {
    const contentType = "image/webp";

    (global.fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      headers: {
        get: (key: string) => (key === "content-type" ? contentType : ""),
      },
    });

    const form = new FormData();
    form.append("url", "http://example.com/test.webp");

    const req = createRequest(form);
    const res = await POST(req);
    const json = await res.json();

    expect(res.status).toBe(200);
    expect(json.ok).toBe(true);
    expect(json.type).toBe("url");
    expect(json.contentType).toBe(contentType);
  });

  it("returns 500 on unexpected server error (e.g., fetch throws)", async () => {
    (global.fetch as jest.Mock).mockRejectedValue(new Error("Network Error"));

    const form = new FormData();
    form.append("url", "http://example.com/error.jpg");

    const req = createRequest(form);
    const res = await POST(req);
    const json = await res.json();

    expect(res.status).toBe(500);
    expect(json.error).toBe("Server error validating image. Try different URL");
  });
});
