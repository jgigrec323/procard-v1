"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function Footer() {
  const y = new Date().getFullYear();
  const pathname = usePathname();
  const routes = ["/", "/produits", "/a-propos", "/contact"];

  // Check if the current pathname matches any of the route paths
  const isPathInRoutes = routes.some((route) => route === pathname);

  // If the current pathname is not in the list of routes, hide the MainNav
  if (!isPathInRoutes) {
    return null;
  }

  return (
    <>
      <div className="flex flex-col items-center gap-5 my-20 md:flex-row md:my-32 justify-center md:gap-24 text-xl">
        <Link href={"/contact"}>Contact</Link>
        <Link href={"/comptes-sociaux"}>Comptes Sociaux</Link>
        <Link href={"/a-propos"}>A propos</Link>
      </div>
      <p className="flex justify-center text-gray-500 opacity-75 text-sm mb-8">
        © {y} ProCard
      </p>
    </>
  );
}
