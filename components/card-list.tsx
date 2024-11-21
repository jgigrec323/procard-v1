import SingleCard from "@/components/single-card";
import { formatter } from "@/lib/utils";

const CardList = () => {
  const cards = [
    {
      title: "Carte Black",
      description: "Une carte noire sophistiquée.",
      cardType: "black",
      price: "150000",
    },
    {
      title: "Carte White",
      description: "Une carte blanche classique.",
      cardType: "white",
      price: "190000",
    },
    {
      title: "Carte Silver",
      description: "Une carte élégante en argent.",
      cardType: "silver",
      price: "200000",
    },
    {
      title: "Carte Gold",
      description: "Une carte dorée luxueuse.",
      cardType: "gold",
      price: "250000",
    },
  ];

  return (
    <section className="py-16 flex flex-col items-center px-4">
      <h2 className="text-center text-4xl font-bold mb-16">Nos Cartes</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
        {cards.map((card, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center max-w-[250px]"
          >
            {/* SingleCard */}
            <SingleCard cardType={card.cardType} />

            {/* Description */}
            <div className="mt-4">
              <h3 className="text-lg font-bold">{card.title}</h3>
              <p className="text-sm text-gray-600">{card.description}</p>
              <p className="font-bold">
                {formatter.format(Number(card.price))}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CardList;
