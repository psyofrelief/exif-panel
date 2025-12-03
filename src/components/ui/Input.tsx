interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  type?: string;
  placeholder?: string;
}

export default function Input({ type = "text", placeholder, ...props }: Props) {
  return (
    <input
      type={type}
      className="bg-background outline-none border border-outline ring-primary focus:ring rounded-xs px-sm py-xs w-full placeholder:text-foreground-secondary"
      placeholder={placeholder}
      {...props}
    />
  );
}
