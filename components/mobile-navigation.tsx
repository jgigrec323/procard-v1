"use client";

import React from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { IoIosMenu } from "react-icons/io";
import Logo from "./logo";
import { RiShoppingBag2Fill } from "react-icons/ri";

const MobileNavigation: React.FC = () => {
  const pathname = usePathname();

  const routes = [
    {
      label: "Accueil",
      path: "/",
      active: pathname === "/",
    },
    {
      label: "Produits",
      path: "/produits",
      active: pathname === "/produits",
    },
    {
      label: "A propos",
      path: "/a-propos",
      active: pathname === "/a-propos",
    },
    {
      label: "Contact",
      path: "/contact",
      active: pathname === "/contact",
    },
  ];

  return (
    <Sheet>
      <SheetTrigger asChild>
        <IoIosMenu size={32} className="md:hidden text-black cursor-pointer" />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className="text-start mt-5">
            <Logo />
          </SheetTitle>
        </SheetHeader>
        <div className="space-y-6 mt-7">
          {/* Navigation Links */}
          <ul className="flex flex-col gap-4">
            {routes.map((route) => (
              <li key={route.path}>
                <Link
                  href={route.path}
                  className={cn(
                    "",
                    route.active ? "text-black font-bold" : "text-neutral-400"
                  )}
                >
                  {route.label}
                </Link>
              </li>
            ))}
          </ul>
          {/* Additional Links */}
          <div className="flex flex-col gap-4">
            <Link
              href="/cart"
              className="flex items-center gap-2 text-neutral-400 hover:text-black transition"
            >
              <RiShoppingBag2Fill size={22} color="black"></RiShoppingBag2Fill>
              <span>Panier</span>
            </Link>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNavigation;
