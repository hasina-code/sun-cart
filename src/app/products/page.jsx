
import ProductCard from "@/Components/ProductCard";
import products from "@/data/products.json";

const ProductsPage = async ({ searchParams }) => {
  const { category } = searchParams || {};


  const allProducts = products;

  const filteredProducts = category
    ? allProducts.filter(
        (p) =>
          p.category.toLowerCase() === category.toLowerCase()
      )
    : allProducts;

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">

      {/* Title */}
      <h1 className="text-3xl font-bold mb-6">
        All Summer Products 
      </h1>

      {/* Category buttons (optional UI section) */}
      <div className="flex gap-3 mb-8 flex-wrap">
        <a href="/products" className="px-4 py-2 border rounded-full">
          All
        </a>

        <a href="/products?category=Accessories" className="px-4 py-2 border rounded-full">
          Accessories
        </a>

        <a href="/products?category=Skincare" className="px-4 py-2 border rounded-full">
          Skincare
        </a>

        <a href="/products?category=Clothing" className="px-4 py-2 border rounded-full">
          Clothing
        </a>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}

      </div>
    </div>
  );
};

export default ProductsPage;