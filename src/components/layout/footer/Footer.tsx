import NavLink from "../navbar/NavLink";

export default function Footer() {
  return (
    <footer className="w-full border-t border-t-outline px-md py-lg flex sm:flex-row flex-col-reverse gap-y-sm justify-between items-center">
      <p>ExifPanel Copyright 2025 © All rights reserved</p>
      <ul className="flex items-center justify-between gap-x-md sm:w-fit w-[284px]">
        <NavLink label="About" href="/about" />
        <NavLink label="Sample Photos" href="/sample-photos" />
        <NavLink label="FAQ" href="/faq" />
      </ul>
    </footer>
  );
}
