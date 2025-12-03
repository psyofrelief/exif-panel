/* eslint-disable @typescript-eslint/no-explicit-any */
import { POST } from "@/app/api/remove-metadata/route";
import sharp from "sharp";

// Define an interface for the mock sharp instance to satisfy TypeScript
interface MockSharpInstance {
  metadata: jest.Mock;
  jpeg: jest.Mock;
  png: jest.Mock;
  webp: jest.Mock;
  tiff: jest.Mock;
  toBuffer: jest.Mock;
}

// Mock the sharp library
jest.mock("sharp", () => {
  // Create a mock buffer function that returns a new Buffer on each call
  const mockBuffer = jest.fn(() => Buffer.from("CLEANED_IMAGE"));

  // Mock the sharp chainable methods
  const mockSharpInstance: MockSharpInstance = {
    metadata: jest.fn().mockResolvedValue({ format: "jpeg" }),
    jpeg: jest.fn().mockReturnThis(),
    png: jest.fn().mockReturnThis(),
    webp: jest.fn().mockReturnThis(),
    tiff: jest.fn().mockReturnThis(),
    toBuffer: mockBuffer,
  };

  // Mock the main sharp function to return the mock instance
  const sharpMock = jest.fn(() => mockSharpInstance);
  // Attach the instance to the mock function for easy access in tests
  (sharpMock as any).mockInstance = mockSharpInstance;
  return sharpMock;
});

// Helper to build mock req with FormData
function createRequest(body: FormData) {
  return new Request("http://localhost/api/remove-metadata", {
    method: "POST",
    body,
  });
}

// Helper to create a mock File object
function mockFile(name: string, type: string) {
  const file = new File([Buffer.from("DUMMY_DATA")], name, { type });
  // Ensure arrayBuffer method returns a proper ArrayBuffer slice for Buffer.from()
  file.arrayBuffer = async () => new TextEncoder().encode("DUMMY_DATA").buffer;
  return file;
}

const mockedSharp = sharp as any;

describe("POST /api/remove-metadata", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("returns 400 when no file is provided", async () => {
    const form = new FormData();
    const req = createRequest(form);

    const res = await POST(req);
    const json = await res.json();

    expect(res.status).toBe(400);
    expect(json.error).toBe("No file provided");
  });

  it("returns 400 for unsupported image types", async () => {
    // Mock metadata to return an unsupported format
    mockedSharp.mockInstance.metadata.mockResolvedValueOnce({ format: "gif" });

    const form = new FormData();
    form.append("file", mockFile("test.gif", "image/gif"));

    const req = createRequest(form);
    const res = await POST(req);
    const json = await res.json();

    expect(res.status).toBe(400);
    expect(json.error).toBe("Unsupported image type");
  });

  it("successfully strips metadata and returns binary response for JPEG", async () => {
    const fileName = "original.jpg";
    const fileType = "image/jpeg";
    const cleanedBuffer = Buffer.from("CLEANED_IMAGE"); // Expected buffer from mock

    // 1. Setup mocks
    mockedSharp.mockInstance.metadata.mockResolvedValueOnce({ format: "jpeg" });
    mockedSharp.mockInstance.toBuffer.mockResolvedValueOnce(cleanedBuffer);

    // 2. Execute request
    const form = new FormData();
    form.append("file", mockFile(fileName, fileType));
    const req = createRequest(form);
    const res = await POST(req);

    // 3. Assertions
    expect(res.status).toBe(200);
    expect(res.headers.get("Content-Type")).toBe(fileType);
    expect(res.headers.get("Content-Disposition")).toBe(
      `attachment; filename="cleaned-${fileName}"`
    );

    // Check that sharp was called correctly for JPEG
    expect(mockedSharp.mockInstance.jpeg).toHaveBeenCalledWith({
      quality: 100,
    });

    // Check that the returned body matches the cleaned buffer
    const resultBuffer = Buffer.from(await res.arrayBuffer());
    expect(resultBuffer.toString()).toBe("CLEANED_IMAGE");
  });

  it("successfully strips metadata and returns binary response for PNG", async () => {
    const fileName = "test.png";
    const fileType = "image/png";
    const cleanedBuffer = Buffer.from("CLEANED_IMAGE_PNG");

    mockedSharp.mockInstance.metadata.mockResolvedValueOnce({ format: "png" });
    mockedSharp.mockInstance.toBuffer.mockResolvedValueOnce(cleanedBuffer);

    const form = new FormData();
    form.append("file", mockFile(fileName, fileType));
    const req = createRequest(form);
    const res = await POST(req);

    expect(res.status).toBe(200);
    expect(res.headers.get("Content-Type")).toBe(fileType);
    expect(mockedSharp.mockInstance.png).toHaveBeenCalled();
  });

  it("returns 500 if sharp throws an error during processing", async () => {
    mockedSharp.mockInstance.metadata.mockRejectedValue(
      new Error("Sharp processing failure")
    );

    const form = new FormData();
    form.append("file", mockFile("test.jpg", "image/jpeg"));

    const req = createRequest(form);
    const res = await POST(req);
    const json = await res.json();

    expect(res.status).toBe(500);
    expect(json.error).toBe("Failed to remove metadata");
  });
});
