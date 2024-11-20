"use client";

import Logo from "./logo";
import MainNav from "./main-nav";
import MobileNavigation from "./mobile-navigation";
import ShoppingCardIcon from "./shopping-card-icon";

const Navbar = () => {
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
