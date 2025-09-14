"use client";

import { cn } from "@/lib/utils";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";
import { Logo } from "./logo";
import { Sidebar } from "./ui/sidebar";
import { useMobile } from "@/hooks/use-mobile";

export function Header() {
  const isMobile = useMobile();

  return (
    <header
      className={cn(
        "flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6"
      )}
    >
      {isMobile && (
        <Sheet>
          <SheetTrigger className="min-w-10 flex h-10 items-center justify-center">
            <MenuIcon className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </SheetTrigger>
          <SheetContent side="left" className="flex flex-col">
            <Logo />
            <Sidebar className="mt-5" />
          </SheetContent>
        </Sheet>
      )}
      <div className="w-full flex-1">
        <div className="flex items-center justify-between">
          {!isMobile && <Logo />}
        </div>
      </div>
    </header>
  );
}
