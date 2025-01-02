import { Product } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;

const getAllProducts = async (): Promise<Product[]> => {
  const response = await fetch(URL);
  const products = await response.json();
  return products;
};

export default getAllProducts;
