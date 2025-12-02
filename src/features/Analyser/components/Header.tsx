import DownloadIcon from "@/components/icons/DownloadIcon";
import Button from "@/components/ui/Button";
import Heading from "@/components/ui/Heading";

export default function Header({
  heading,
  buttonLabel,
  onClickAction,
}: {
  heading: string;
  buttonLabel: string;
  onClickAction: () => void;
}) {
  return (
    <header className="flex gap-x-sm justify-between items-center">
      <Heading>{heading}</Heading>
      <Button variant="secondary" onClick={onClickAction}>
        {buttonLabel}
        <DownloadIcon />
      </Button>
    </header>
  );
}
