import Link from "next/link";
import { RiShoppingBag2Fill } from "react-icons/ri";

const ShoppingCardIcon = () => {
  return (
    <Link href="cart" className="md:block hidden">
      <RiShoppingBag2Fill size={22} color="black"></RiShoppingBag2Fill>
    </Link>
  );
};

export default ShoppingCardIcon;
