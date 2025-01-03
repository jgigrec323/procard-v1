"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MainNav = () => {
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
    <nav className="py-2 px-7 md:flex  gap-10 rounded-full hidden">
      {routes.map((route) => (
        <Link
          key={route.path}
          href={route.path}
          className={cn("", route.active ? "text-black" : "text-neutral-400")}
        >
          {route.label}
        </Link>
      ))}
    </nav>
  );
};

export default MainNav;
