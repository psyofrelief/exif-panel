const SimpleDivider = ({ label }: { label: string }) => {
  return (
    <div className="flex items-center gap-x-sm w-full my-auto">
      <hr className="grow border-t border-outline" />

      {label && (
        <span className="text-sm font-medium text-foreground-secondary">
          {label}
        </span>
      )}

      <hr className="grow border-t border-outline" />
    </div>
  );
};

export default SimpleDivider;
