"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

interface NavigationBarProps {
  username: string;
}

const NavigationBar: React.FC<NavigationBarProps> = ({ username }) => {
  const pathname = usePathname();

  const routes = [
    {
      label: "À propos",
      path: `/${username}/`,
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
  ];

  return (
    <NavigationMenu>
      <NavigationMenuList>
        {routes.map((route) => (
          <NavigationMenuItem key={route.path}>
            <Link href={route.path} legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                {route.label}
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default NavigationBar;
