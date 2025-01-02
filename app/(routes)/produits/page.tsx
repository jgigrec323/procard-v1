import getAllProducts from "@/actions/get-all-products";
import ProductCatalog from "@/components/product-catalog";
import Billboard from "@/components/ui/billboard";

const Produits = async () => {
  const products = await getAllProducts();
  return (
    <div className="py-5 px-10">
      <Billboard title="Nos Produits"></Billboard>
      <ProductCatalog products={products}></ProductCatalog>
    </div>
  );
};

export default Produits;
