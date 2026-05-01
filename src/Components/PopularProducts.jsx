import products from "@/data/products.json";
import ProductCard from "./ProductCard";


const PopularProducts = () => {

  // Only 3 products
  const popularProducts = products.slice(0, 3);

  return (
    <section className="max-w-7xl mx-auto px-4 py-16">

      {/* Section Heading */}
      <div className="text-center mb-10">

        <h2 className="text-3xl md:text-4xl font-bold">
          Popular Products 
        </h2>

        <p className="text-gray-500 mt-3">
          Trending summer essentials for hot weather
        </p>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

        {popularProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}

      </div>
    </section>
  );
};

export default PopularProducts;