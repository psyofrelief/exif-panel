"use client";

import { usePathname, useRouter } from "next/navigation";
import { useHandleScroll } from "./useScroll";

export function useNavClick() {
  const pathname = usePathname();
  const router = useRouter();
  const scrollToSection = useHandleScroll();

  return (event: React.MouseEvent<HTMLElement>) => {
    if (pathname === "/about") {
      event.preventDefault();
      scrollToSection("faq");
    } else {
      router.push("/about#faq");
    }
  };
}
