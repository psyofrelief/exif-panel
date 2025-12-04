import Image from "next/image";
// Import the necessary hook for navigation
import { useRouter } from "next/navigation";
import { useAnalyserContext } from "@/contexts/analyserContext";
import { cn } from "@/lib/utils";

export default function SampleImage({
  url,
  idx,
  gallery = false,
}: {
  url: string;
  idx: number;
  gallery?: boolean;
}) {
  const { setImageUrl, setFile, setError } = useAnalyserContext();
  const router = useRouter();

  return (
    <Image
      width={256}
      height={256}
      src={url}
      priority
      loading="eager"
      alt={`Sample Photo ${idx}`}
      className={cn(
        // Re-added aspect-square to force the container to be square, and added object-cover
        // to ensure the image fills the entire area (cropping if necessary) and is centered.
        "aspect-square object-cover rounded-xs hover:border-2 border-outline hover:opacity-75 cursor-pointer transition-all",
        gallery && "w-full"
      )}
      onClick={() => {
        setImageUrl(url);
        setFile(null);
        setError("");
        router.push("/");
      }}
    />
  );
}
