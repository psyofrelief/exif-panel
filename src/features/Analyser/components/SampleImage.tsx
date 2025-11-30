import Image from "next/image";
import { useAnalyserContext } from "@/contexts/analyserContext";

export default function SampleImage({
  url,
  idx,
}: {
  url: string;
  idx: number;
}) {
  const { setImageUrl, setFile, setError } = useAnalyserContext();

  return (
    <Image
      width={256}
      height={256}
      src={url}
      alt={`Sample Photo ${idx}`}
      className="aspect-square"
      onClick={() => {
        setImageUrl(url);
        setFile(null);
        setError("");
      }}
    />
  );
}
