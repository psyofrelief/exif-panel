import Panel from "@/components/shared/Panel";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import { useAnalyserContext } from "@/contexts/analyserContext";
import Error from "next/error";
import Image from "next/image";
import UploadForm from "./forms/uploadForm";

export default function ImagePanel() {
  const { setFile, file, imageUrl, error, setError, blobUrl } =
    useAnalyserContext();

  return (
    <Panel className="border-r gap-lg size-full bg-blue-200 col-span-3 justify-center items-center">
      <Input
        type="file"
        onChange={(e) => setFile(e.target.files?.[0] ?? null)}
      />
      {file && blobUrl && (
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

      {error && <Error statusCode={400} title={error} />}
    </Panel>
  );
}
