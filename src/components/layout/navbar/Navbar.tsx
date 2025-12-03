"use client";
import Link from "next/link";
import Button from "../../ui/Button";
import NavLink from "./NavLink";
import { useNavClick } from "@/app/hooks/useNavClick";
import Logo from "@/components/shared/Logo";
import Menu from "../menu/Menu";

export default function Navbar() {
  const handleNavClick = useNavClick();

  return (
    <nav className="w-full flex justify-between py-sm px-md border-b bg-background  border-b-outline">
      <div className="flex sm:hidden">
        <Menu />
      </div>
      <div className="flex items-center gap-x-lg">
        <Logo />
        <ul className="md:flex hidden items-center gap-x-md">
          <NavLink label="About" href="/about" />
          <NavLink label="Sample Photos" href="/sample-photos" />
          <NavLink onClick={handleNavClick} label="FAQ" href="/about#faq" />
        </ul>
      </div>
      <Link href={"/"} className="hidden md:flex">
        <Button className="flex-1">Open Tool</Button>
      </Link>
    </nav>
  );
}
