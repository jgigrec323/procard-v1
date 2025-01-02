import { cn } from "@/lib/utils";
import { PlusCircle } from "lucide-react";

interface SingleCardProps {
  cardType: "silver" | "black" | "white" | "gold";
  onAddToCart?: () => void;
}

const SingleCard: React.FC<SingleCardProps> = ({ cardType, onAddToCart }) => {
  const colorMap = {
    silver: "bg-gray-300 text-black",
    black: "bg-black text-white",
    white: "bg-white text-black",
    gold: "bg-yellow-400 text-black",
  };

  return (
    <div
      className={cn(
        "relative rounded-lg w-[230px] h-[300px] shadow-lg transform-gpu transition-transform duration-500 hover:rotate-y-6 hover:scale-105 hover:shadow-2xl",
        colorMap[cardType]
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
