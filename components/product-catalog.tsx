"use client";
import React from "react";
import SingleCard from "./single-card";
import { Product } from "@/types";
import { formatter } from "@/lib/utils";

interface ProductCatalogProps {
  products: Product[];
}

const ProductCatalog: React.FC<ProductCatalogProps> = ({ products }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
      {products.map((product) => (
        <div key={product.id} className="flex flex-col items-center">
          <SingleCard data={product} />
          {/* Product Details */}
          <div className="text-center mt-4">
            <h3 className="text-lg font-bold">{product.name}</h3>
            <p className="text-sm text-gray-600">
              {product.description || "No description available"}
            </p>
            <p className="font-bold">
              {formatter.format(Number(product.price))}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCatalog;
