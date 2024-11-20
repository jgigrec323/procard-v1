"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { RiShoppingBag2Fill } from "react-icons/ri";

const ShoppingCardIcon = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, [isMounted]);

  if (!isMounted) return null;
  return (
    <Link href="cart" className="md:block hidden">
      <RiShoppingBag2Fill size={22} color="black"></RiShoppingBag2Fill>
    </Link>
  );
};

export default ShoppingCardIcon;
