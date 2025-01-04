"use client";

import { usePathname } from "next/navigation";
import Logo from "./logo";
import MainNav from "./main-nav";
import MobileNavigation from "./mobile-navigation";
import ShoppingCardIcon from "./shopping-card-icon";

const Navbar = () => {
  const pathname = usePathname();
  const routes = ["/", "/produits", "/a-propos", "/contact"];

  // Check if the current pathname matches any of the route paths
  const isPathInRoutes = routes.some((route) => route === pathname);

  // If the current pathname is not in the list of routes, hide the MainNav
  if (!isPathInRoutes) {
    return null;
  }

  return (
    <div className="px-10 py-6 flex justify-between items-center">
      <Logo />
      <MainNav />
      <ShoppingCardIcon />
      <MobileNavigation></MobileNavigation>
    </div>
  );
};

export default Navbar;
