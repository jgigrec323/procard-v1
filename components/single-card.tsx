import { cn } from "@/lib/utils";

interface SingleCardProps {
  cardType: "silver" | "black" | "white" | "gold"; // Card types
  onAddToCart?: () => void; // Callback for the Add to Cart button
}

const SingleCard: React.FC<SingleCardProps> = ({ cardType, onAddToCart }) => {
  // Map card types to colors
  const colorMap = {
    silver: "bg-gray-300 text-black", // Silver card
    black: "bg-black text-white", // Black card
    white: "bg-white text-black", // White card
    gold: "bg-yellow-400 text-black", // Gold card
  };

  return (
    <div
      className={cn(
        "relative rounded-lg w-[230px] h-[300px] shadow-lg transform-gpu transition-transform duration-500 hover:rotate-y-6 hover:scale-105 hover:shadow-2xl",
        colorMap[cardType] // Apply the corresponding color classes
      )}
    >
      {/* Add to Cart Button */}
      <button
        onClick={onAddToCart}
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white px-4 py-2 rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default SingleCard;
