"use client";
import Link from "next/link";
import Button from "../../ui/Button";
import NavLink from "./NavLink";
import { useNavClick } from "@/app/hooks/useNavClick";

export default function Navbar() {
  const handleNavClick = useNavClick();

  return (
    <nav className="w-full flex justify-between p-sm border-b bg-background  border-b-outline">
      <div className="flex items-center gap-x-lg">
        <div className="gap-xs flex">
          <div className="aspect-square h-10 rounded-xs bg-foreground" />
          <div className="aspect-square h-10 rounded-xs bg-foreground/50" />
          <div className="aspect-square h-10 rounded-xs bg-foreground/25" />
        </div>
        <ul className="flex items-center gap-x-md">
          <NavLink label="About" href="/about" />
          <NavLink label="Sample Photos" href="/sample-photos" />
          <NavLink onClick={handleNavClick} label="FAQ" href="/about#faq" />
        </ul>
      </div>
      <Link href={"/"} className="flex">
        <Button className="flex-1">Open Tool</Button>
      </Link>
    </nav>
  );
}
