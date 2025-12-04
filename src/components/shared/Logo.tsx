import Link from "next/link";

export default function Logo() {
  return (
    <Link href={"/"} aria-label="App" className="gap-xs flex group">
      {/* Group Hover ensures these turn white when the parent Link is hovered */}
      <div className="aspect-square h-10 rounded-xs bg-primary group-hover:bg-primary transition-colors" />
      <div className="aspect-square h-10 rounded-xs bg-primary/50 group-hover:bg-primary transition-colors" />
      <div className="aspect-square h-10 rounded-xs bg-primary/25 group-hover:bg-primary transition-colors" />
    </Link>
  );
}
