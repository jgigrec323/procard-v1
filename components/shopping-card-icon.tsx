"use client";

import Link from "next/link";
import { RiShoppingBag2Fill } from "react-icons/ri";
import useCart from "@/hooks/use-cart";

const ShoppingCardIcon = () => {
  const items = useCart((state) => state.items);

  // Calculate total quantity of items in the cart
  const totalQuantity = items.reduce(
    (total, item) => total + item.cartQuantity,
    0
  );

  return (
    <Link href="/cart" className="md:block hidden relative">
      {/* Badge for total quantity */}
      {totalQuantity > 0 && (
        <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
          {totalQuantity}
        </span>
      )}
      <RiShoppingBag2Fill size={22} color="black" />
    </Link>
  );
};

export default ShoppingCardIcon;
