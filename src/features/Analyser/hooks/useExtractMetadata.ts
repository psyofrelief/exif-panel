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

    if (!res.ok) return;

    const data = await res.json();

    setMetadata((prev) => ({
      ...prev,
      exif: data.exif,
      rawExif: data.rawExif,
      xmp: data.xmp,
      iptc: data.iptc,
    }));

    console.log("Extracted metadata:", data.rawExif);
  };
}
