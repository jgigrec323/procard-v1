import { Product } from "@/types";
import React from "react";
import SingleCard from "./single-card";

interface ProductCatalogProps {
  products: Product[];
}

const ProductCatalog: React.FC<ProductCatalogProps> = ({ products }) => {
  return (
    <div className="">
      {products.map((product) => (
        <SingleCard key={product.id} />
      ))}
    </div>
  );
};

export default ProductCatalog;
