import { cn } from "@/lib/utils";

interface SingleCardProps {
  cardType: "silver" | "black" | "white" | "gold"; // Card types
}

const SingleCard: React.FC<SingleCardProps> = ({ cardType }) => {
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
        "rounded-lg w-[230px] h-[300px] shadow-lg transform-gpu transition-transform duration-500 hover:rotate-y-6 hover:scale-105 hover:shadow-2xl",
        colorMap[cardType] // Apply the corresponding color classes
      )}
    />
  );
};

export default SingleCard;
