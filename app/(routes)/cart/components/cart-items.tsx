import { X } from "lucide-react";

import Currency from "@/components/ui/currency";
import useCart from "@/hooks/use-cart";
import { Product } from "@/types";
import IconButton from "@/components/ui/icon-button";

interface CartItemProps {
  data: Product;
}

const CartItem: React.FC<CartItemProps> = ({ data }) => {
  const cart = useCart();

  const onRemove = () => {
    cart.removeItem(data.id);
  };

  return (
    <li className="flex py-6 border-b">
      <div
        className=" h-16 w-12 rounded-sm"
        style={{ background: data.color.value }}
      ></div>

      <div className="relative ml-4 flex flex-1 flex-col justify-between sm:ml-6">
        <div className="absolute z-10 right-0 top-0">
          <IconButton onClick={onRemove} icon={<X size={15} />} />
        </div>
        <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
          <div className="flex justify-between">
            <p className=" text-lg font-semibold text-black">{data.name}</p>
          </div>

          <div className="mt-1 flex text-sm">
            <p className="text-gray-500">{data.color.name}</p>
          </div>
          <Currency value={data.price} />
        </div>
      </div>
    </li>
  );
};

export default CartItem;
