export default function WarningPanel({
  label,
  content,
}: {
  label: string;
  content: string;
}) {
  return (
    <div className="bg-warning rounded-sm flex flex-col gap-y-xs text-warning-foreground p-md">
      <p className="font-bold">{label}</p>
      <p className="sm:text-sm text-xs">{content}</p>
    </div>
  );
}
