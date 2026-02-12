import { useAnalyserContext } from "@/contexts/analyserContext";
import { Spinner } from "./Spinner";

export default function LoadingPanel() {
  const { metadata, file, error, imageUrl, extractionLoading } =
    useAnalyserContext();
  return (
    <div className="inset-0 bg-background/50 transition-all flex justify-center items-center size-full absolute">
    {extractionLoading &&

    <Spinner/>
    }
    </div>
  );
}
