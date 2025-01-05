const ProductsPage = () => {
  const products = [
    {
      name: "Product 1",
      description: "This is the description for product 1.",
      price: "$100",
      image: "/images/img-profile.jpg",
      link: "https://example.com/product-1",
    },
    {
      name: "Product 2",
      description: "This is the description for product 2.",
      price: "$200",
      image: "/images/img-profile.jpg",
      link: "https://example.com/product-2",
    },
    {
      name: "Product 3",
      description: "This is the description for product 3.",
      price: "$300",
      image: "/images/img-profile.jpg",
      link: "https://example.com/product-3",
    },
    {
      name: "Product 4",
      description: "This is the description for product 4.",
      price: "$400",
      image: "/images/img-profile.jpg",
      link: "https://example.com/product-4",
    },
  ];

  return (
    <div className="space-y-8 py-8 px-4 sm:px-8 lg:px-16">
      <h1 className="text-3xl font-bold text-center">Our Products</h1>
      <p className="text-center text-gray-600">
        Browse through our selection of high-quality products.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product, index) => (
          <div
            key={index}
            className="rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            {/* Product Image */}
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover"
            />

            {/* Product Info */}
            <div className="p-4 space-y-2">
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <p className="text-sm text-gray-600">{product.description}</p>
              <p className="text-base font-bold text-gray-800">
                {product.price}
              </p>
              <a
                href={product.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline text-sm"
              >
                View Product
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
