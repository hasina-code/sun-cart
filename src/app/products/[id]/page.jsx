"use client";

import { useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import Image from "next/image";
import products from "@/data/products.json";
import { FaStar } from "react-icons/fa";

const ProductDetailsPage = () => {
  const router = useRouter();
  const params = useParams();

  const product = products.find(
    (item) => item.id === Number(params.id)
  );

  useEffect(() => {
    const user = localStorage.getItem("user");

    //  Not logged in → redirect to login
    if (!user) {
      localStorage.setItem(
        "redirectAfterLogin",
        `/products/${params.id}`
      );

      router.push("/login");
    }
  }, []);

  if (!product) {
    return (
      <p className="text-center mt-10 text-gray-500">
        Loading product...
      </p>
    );
  }

  return (
    <section className="max-w-5xl mx-auto px-4 py-16">

      {/* Product Image */}
      <div className="relative w-full h-96 mb-6">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover rounded-2xl"
        />
      </div>

      {/* Product Info */}
      <h1 className="text-3xl font-bold">
        {product.name}
      </h1>

      <p className="text-gray-600 mt-2">
        {product.description}
      </p>

      <div className="mt-4 space-y-2">

        <p>
          <b>Brand:</b> {product.brand}
        </p>

        <p>
          <b>Category:</b> {product.category}
        </p>

        <p>
          <b>Stock:</b> {product.stock}
        </p>

        <p className="text-green-600 font-bold text-xl">
          $ {product.price}
        </p>

       <div className="flex items-center gap-2 text-orange-500">
          <FaStar />
            <p className="font-medium">{product.rating}</p>
          </div>

      </div>

    </section>
  );
};

export default ProductDetailsPage;