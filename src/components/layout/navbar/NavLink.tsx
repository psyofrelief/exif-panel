import Link from "next/link";

interface Props {
  label: string;
  href: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
}

export default function NavLink({ label, href, onClick }: Props) {
  return (
    <li className="flex">
      <Link
        className="flex-1 uppercase font-mono whitespace-nowrap"
        href={href}
        onClick={onClick}
      >
        {label}
      </Link>
    </li>
  );
}
