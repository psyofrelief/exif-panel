import Panel from "@/components/shared/Panel";
import Input from "@/components/ui/Input";
import { useAnalyserContext } from "@/contexts/analyserContext";
import Image from "next/image";
import UploadForm from "../forms/uploadForm";
import { useEffect } from "react";
import { useExtractMetadata } from "../hooks/useExtractMetadata";
import { samples } from "../constants/samples";
import SampleImage from "../components/SampleImage";

export default function ImagePanel() {
  const { setFile, file, setImageUrl, imageUrl, error, setError, blobUrl } =
    useAnalyserContext();

  const extract = useExtractMetadata();

  const handleExtract = async () => {
    try {
      await extract();
    } catch (err) {
      setFile(null);
      setImageUrl("");
      setError("Failed to extract metadata");
      console.error("Error:", err);
    }
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

  //TODO: render supported image formats
  return (
    <Panel className="border-r gap-lg size-full bg-blue-200 col-span-3  items-center">
      <Input
        type="file"
        onChange={(e) => {
          setFile(e.target.files?.[0] ?? null);
          setImageUrl("");
        }}
      />
      {file && blobUrl && !error && (
        <Image alt="image" height={256} width={256} src={blobUrl} />
      )}

      {imageUrl && !error && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={imageUrl}
          alt="preview"
          className="h-64 w-64 object-cover"
          onError={() => setError("Couldn't load image")}
        />
      )}
      <UploadForm />

      {error && <div className="text-red-600 text-sm mt-md">{error}</div>}
      <div className="grid grid-cols-4 gap-sm">
        {samples.slice(0, 4).map((val, idx) => (
          <SampleImage url={val} idx={idx} key={idx} />
        ))}
      </div>
    </Panel>
  );
}
