import { useAnalyserContext } from "@/contexts/analyserContext";
import { urlToFile } from "../utils/urlToFile";

export function useRemoveMetadata() {
  const { file, imageUrl } = useAnalyserContext();

  return async () => {
    let inputFile = file;

    if (!inputFile && imageUrl) {
      inputFile = await urlToFile(imageUrl);
    }

    if (!inputFile) {
      throw new Error("No file available to strip metadata");
    }

    const form = new FormData();
    form.append("file", inputFile);

    const res = await fetch("/api/remove-metadata", {
      method: "POST",
      body: form,
    });

    if (!res.ok) {
      const msg = await res.json();
      throw new Error(msg.error || "Failed to strip metadata");
    }

    const cleanedBlob = await res.blob();
    const downloadUrl = URL.createObjectURL(cleanedBlob);

    const a = document.createElement("a");
    a.href = downloadUrl;
    a.download = `cleaned-${inputFile.name}`;
    a.click();
    URL.revokeObjectURL(downloadUrl);
  };
}
