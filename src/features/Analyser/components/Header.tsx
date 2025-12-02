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
    <header className="flex flex-col 2xl:flex-row gap-sm justify-between 2xl:items-center">
      <Heading>{heading}</Heading>
      <Button
        className="w-full 2xl:w-fit"
        variant="secondary"
        onClick={onClickAction}
      >
        {buttonLabel}
        <DownloadIcon />
      </Button>
    </header>
  );
}
