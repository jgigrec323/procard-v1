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

  // Define all possible routes
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

  // Determine which tabs to show dynamically based on the user's preference
  const enabledRoutes = routes.filter((route) => {
    // For now, all routes are enabled. Replace this condition with dynamic logic
    // like user preferences from props or an API.
    return true;
  });

  return (
    <NavigationMenu>
      <NavigationMenuList>
        {enabledRoutes.map((route) => (
          <NavigationMenuItem key={route.path}>
            <Link href={route.path} legacyBehavior passHref>
              <NavigationMenuLink
                className={`${navigationMenuTriggerStyle()} ${
                  route.active ? "font-bold text-black" : "text-gray-600"
                }`}
              >
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
