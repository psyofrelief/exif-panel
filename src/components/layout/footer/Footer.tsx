import NavLink from "../navbar/NavLink";

export default function Footer() {
  return (
    <footer className="w-full border-t border-t-outline px-md py-lg flex justify-between items-center">
      <p>ExifPanel Copyright 2025 © All rights reserved</p>
      <ul className="flex items-center gap-x-md">
        <NavLink label="About" href="/about" />
        <NavLink label="Sample Photos" href="/sample-photos" />
        <NavLink label="FAQ" href="/faq" />
      </ul>
    </footer>
  );
}
