import { useAnalyserContext } from "@/contexts/analyserContext";

export function useExtractMetadata() {
  const { file, setMetadata } = useAnalyserContext();

  return async () => {
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);

    const res = await fetch("/api/extract-metadata", {
      method: "POST",
      body: formData,
    });

    if (!res.ok) {
      console.error("Failed to extract metadata");
      throw new Error("Failed to extract metadata");
    }

    const data = await res.json();

    setMetadata((prev) => ({
      ...prev,
      exif: data.exif ?? null,
      rawExif: data.rawExif ?? null,
      xmp: data.xmp ?? null,
      iptc: data.iptc ?? null,
    }));

    console.log("Extracted metadata:", data.rawExif);
  };
}
