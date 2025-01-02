import getAllProducts from "@/actions/get-all-products";
import SingleCard from "@/components/single-card";
import { formatter } from "@/lib/utils";

const CardList = async () => {
  const products = await getAllProducts();

  return (
    <section className="py-16 flex flex-col items-center px-4">
      <h2 className="text-center text-4xl font-bold mb-16">Nos Cartes</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
        {products.map((product, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center max-w-[250px]"
          >
            {/* SingleCard */}
            <SingleCard data={product} />

            {/* Description */}
            <div className="mt-4">
              <h3 className="text-lg font-bold">{product.name}</h3>
              <p className="text-sm text-gray-600">{product.description}</p>
              <p className="font-bold">
                {formatter.format(Number(product.price))}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CardList;
