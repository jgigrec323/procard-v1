import { Minus, Plus, X } from "lucide-react";

import Currency from "@/components/ui/currency";
import useCart from "@/hooks/use-cart";
import IconButton from "@/components/ui/icon-button";
import { CartItem as CartItemType } from "@/hooks/use-cart"; // Import the correct type for cart items

interface CartItemProps {
  data: CartItemType; // Use the CartItem type from the store
}

const CartItem: React.FC<CartItemProps> = ({ data }) => {
  const cart = useCart();

  const onRemove = () => {
    cart.removeItem(data.id);
  };

  const onIncrement = () => {
    cart.addItem(data);
  };

  const onDecrement = () => {
    cart.decrementItem(data.id);
  };

  return (
    <li className="flex py-6 border-b">
      {/* Product Color Box */}
      <div
        className="h-16 w-12 rounded-sm"
        style={{ background: data.color.value }}
      ></div>

      {/* Product Details */}
      <div className="relative ml-4 flex flex-1 flex-col justify-between sm:ml-6">
        {/* Remove Button */}
        <div className="absolute z-10 right-0 top-0">
          <IconButton onClick={onRemove} icon={<X size={15} />} />
        </div>

        {/* Product Info */}
        <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
          <div className="flex justify-between">
            <p className="text-lg font-semibold text-black">{data.name}</p>
          </div>

          <div className="mt-1 flex text-sm">
            <p className="text-gray-500">{data.color.name}</p>
          </div>

          {/* Display Quantity */}
          <div className="mt-1 flex text-sm items-center">
            <IconButton onClick={onDecrement} icon={<Minus size={11} />} />
            <p className="mx-2 text-black font-semibold">{data.cartQuantity}</p>
            <IconButton onClick={onIncrement} icon={<Plus size={11} />} />
          </div>

          {/* Display Price */}
          <Currency value={data.price} />
        </div>
      </div>
    </li>
  );
};

export default CartItem;
