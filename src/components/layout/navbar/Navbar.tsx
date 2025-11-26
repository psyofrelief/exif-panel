import Link from "next/link";
import Button from "../../ui/Button";
import NavLink from "./NavLink";

export default function Navbar() {
  return (
    <nav className="w-full flex justify-between p-sm border-b ">
      <ul className="flex items-center gap-x-sm">
        <NavLink label="About ExifPanel" href="/about" />
        <NavLink label="FAQ" href="/faq" />
      </ul>
      <Link href={"/"} className="flex">
        <Button className="flex-1">Open Tool</Button>
      </Link>
    </nav>
  );
}
