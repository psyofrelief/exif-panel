import Panel from "@/components/shared/Panel";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import { useAnalyserContext } from "@/contexts/analyserContext";
import Error from "next/error";
import Image from "next/image";

export default function ImagePanel() {
  const { setFile, file, imageUrl, setImageUrl, error, setError, blobUrl } =
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
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const value = new FormData(e.currentTarget).get("imgUrl") as string;
          setImageUrl(value);
        }}
      >
        <Input name="imgUrl" placeholder="Enter URL..." />
        <Button type="submit">Get Image</Button>
      </form>

      {error && <Error statusCode={400} title={error} />}
    </Panel>
  );
}
