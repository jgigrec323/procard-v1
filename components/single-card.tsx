"use client";
import useCart from "@/hooks/use-cart";
import { cn } from "@/lib/utils";
import { Product } from "@/types";
import { PlusCircle } from "lucide-react";
import { MouseEventHandler } from "react";

interface SingleCardProps {
  data: Product;
}

const SingleCard: React.FC<SingleCardProps> = ({ data }) => {
  const cart = useCart();
  const colorMap: { [key: string]: string } = {
    silver: "bg-gray-300 text-black",
    black: "bg-black text-white",
    white: "bg-white text-black",
    gold: "bg-yellow-400 text-black",
  };
  const onAddToCart: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();
    cart.addItem(data);
  };

  return (
    <div
      className={cn(
        "relative rounded-lg w-[230px] h-[300px] shadow-lg transform-gpu transition-transform duration-500 hover:rotate-y-6 hover:scale-105 hover:shadow-2xl",
        colorMap[data.color.name.toLowerCase()]
      )}
    >
      <button
        onClick={onAddToCart}
        className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300"
      >
        <PlusCircle className="text-3xl " />
      </button>
    </div>
  );
};

export default SingleCard;
