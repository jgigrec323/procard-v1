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
import Logo from "@/components/logo";

interface MobileNavigationProps {
  username: string;
}

const MobileNavigation: React.FC<MobileNavigationProps> = ({ username }) => {
  const pathname = usePathname();

  const routes = [
    {
      label: "À propos",
      path: `/${username}`,
      active: pathname === `/${username}`,
    },
    {
      label: "Portfolio",
      path: `/${username}/portfolio`,
      active: pathname === `/${username}/portfolio`,
    },
    {
      label: "Contact",
      path: `/${username}/contact`,
      active: pathname === `/${username}/contact`,
    },
    {
      label: "Resume",
      path: `/${username}/resume`,
      active: pathname === `/${username}/resume`,
    },
    {
      label: "Services",
      path: `/${username}/services`,
      active: pathname === `/${username}/services`,
    },
    {
      label: "Products",
      path: `/${username}/products`,
      active: pathname === `/${username}/products`,
    },
    {
      label: "Testimonials",
      path: `/${username}/testimonials`,
      active: pathname === `/${username}/testimonials`,
    },
    {
      label: "Blog",
      path: `/${username}/blog`,
      active: pathname === `/${username}/blog`,
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
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNavigation;
