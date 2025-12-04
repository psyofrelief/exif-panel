import Panel from "@/components/shared/Panel";
import { useAnalyserContext } from "@/contexts/analyserContext";
import UploadForm from "../forms/uploadForm";
import { useEffect } from "react";
import { useExtractMetadata } from "../hooks/useExtractMetadata";
import { samples } from "../constants/samples";
import SampleImage from "../components/SampleImage";
import UploadImage from "../components/UploadImage";
import SimpleDivider from "@/components/ui/SimpleDivider";

export default function ImagePanel() {
  const {
    setFile,
    file,
    setImageUrl,
    imageUrl,
    error,
    setError,
    blobUrl,
    setExtractionLoading,
  } = useAnalyserContext();

  const extract = useExtractMetadata();

  const handleExtract = async () => {
    setExtractionLoading(true);
    try {
      await extract();
    } catch (err) {
      setFile(null);
      setImageUrl("");
      setError("Failed to extract metadata");
      console.error("Error:", err);
    }

    setExtractionLoading(false);
  };

  useEffect(() => {
    if (file && blobUrl && !error) {
      const allowed = ["image/jpeg", "image/png", "image/tiff", "image/webp"];
      if (!allowed.includes(file.type)) {
        setError("Unsupported file type");
        return;
      }
      handleExtract();
    }

    if (imageUrl && !error) {
      handleExtract();
    }
  }, [file, imageUrl]);

  return (
    <Panel className="border-r items-center">
      <UploadImage />
      <UploadForm />
      <SimpleDivider label="OR" />
      <div className="flex flex-col gap-y-sm items-center mt-auto">
        <p>Use a sample photo</p>
        <div className="grid xl:grid-cols-4 xl:grid-rows-1 md:grid-cols-4 md:grid-rows-1 lg:grid-cols-2 grid-rows-2 grid-cols-2 gap-sm">
          {samples.slice(0, 4).map((val, idx) => (
            <SampleImage url={val} idx={idx} key={idx} />
          ))}
        </div>
      </div>
    </Panel>
  );
}
