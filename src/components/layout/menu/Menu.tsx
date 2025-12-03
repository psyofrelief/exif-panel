import {
  Drawer,
  DrawerContent,
  DrawerFooter,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/Drawer";
import Link from "next/link";
import Button from "@/components/ui/Button";

import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import MenuNavLink from "./MenuNavLink";
import { useState } from "react";
import { useNavClick } from "@/app/hooks/useNavClick";

export default function Menu() {
  const handleNavClick = useNavClick();

  const [drawerOpen, setDrawerOpen] = useState(false);
  const closeDrawer = () => {
    setDrawerOpen(false);
  };
  return (
    <Drawer open={drawerOpen} onOpenChange={setDrawerOpen} direction="left">
      <VisuallyHidden>
        <DrawerTitle>Menu</DrawerTitle>
      </VisuallyHidden>
      <DrawerTrigger className="cursor-pointer hover:underline bg-popover px-sm rounded text-sm outline outline-outline font-mono uppercase transition-colors">
        Menu
      </DrawerTrigger>
      <DrawerContent>
        <MenuNavLink onClick={closeDrawer} label="About" href="/about" />
        <MenuNavLink
          onClick={closeDrawer}
          label="Sample Photos"
          href="/sample-photos"
        />
        <MenuNavLink
          onClick={(e) => {
            e.preventDefault();
            closeDrawer();
            setTimeout(() => {
              handleNavClick(e);
            }, 500);
          }}
          label="FAQ"
          href="/about/#faq"
        />
        <DrawerFooter>
          <Link href={"/"} className="flex">
            <Button className="flex-1">Open Tool</Button>
          </Link>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
