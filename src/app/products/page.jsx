import Link from "next/link";
import ProductCard from "@/Components/ProductCard";
import products from "@/data/products.json";

const ProductsPage = async ({ searchParams }) => {
  const params = await searchParams; // 👈 MUST unwrap first

  const category = params?.category;

  // All Products
  const allProducts = products;

  // Filter Products
  const filteredProducts = category
    ? allProducts.filter(
        (p) =>
          p.category.toLowerCase() === category.toLowerCase()
      )
    : allProducts;

  return (
    <section className="max-w-7xl mx-auto px-4 py-12">

      {/* Heading */}
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-5xl font-bold text-black">
          All Summer Products
        </h1>

        <p className="text-gray-500 mt-3">
          Explore trending summer essentials & hot deals
        </p>
      </div>

      {/* Category Buttons */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">

        <Link
          href="/products"
          className={`
            px-5 py-2 rounded-full border font-medium
            transition-all duration-300
            hover:bg-black hover:text-white
            ${
              !category
                ? "bg-black text-white"
                : "bg-white text-black"
            }
          `}
        >
          All
        </Link>

        <Link
          href="/products?category=Accessories"
          className={`
            px-5 py-2 rounded-full border font-medium
            transition-all duration-300
            hover:bg-black hover:text-white
            ${
              category === "Accessories"
                ? "bg-black text-white"
                : "bg-white text-black"
            }
          `}
        >
          Accessories
        </Link>

        <Link
          href="/products?category=Skincare"
          className={`
            px-5 py-2 rounded-full border font-medium
            transition-all duration-300
            hover:bg-black hover:text-white
            ${
              category === "Skincare"
                ? "bg-black text-white"
                : "bg-white text-black"
            }
          `}
        >
          Skincare
        </Link>

        <Link
          href="/products?category=Clothing"
          className={`
            px-5 py-2 rounded-full border font-medium
            transition-all duration-300
            hover:bg-black hover:text-white
            ${
              category === "Clothing"
                ? "bg-black text-white"
                : "bg-white text-black"
            }
          `}
        >
          Clothing
        </Link>
      </div>

      {/* Products Grid */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}

        </div>
      ) : (
        <div className="text-center py-20">
          <h2 className="text-2xl font-semibold text-red-500">
            No Products Found
          </h2>

          <p className="text-gray-500 mt-2">
            Try another category
          </p>
        </div>
      )}
    </section>
  );
};

export default ProductsPage;