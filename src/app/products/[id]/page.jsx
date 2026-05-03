"use client";

import Image from "next/image";
import { useParams } from "next/navigation";

import { Card, Button } from "@heroui/react";

import {
  FaStar,
  FaBoxOpen,
  FaTag,
} from "react-icons/fa";

import ProtectedRoute from "@/Components/ProtectedRoute";

import products from "@/data/products.json";

export default function ProductDetailsPage() {
  const params = useParams();

  const product = products.find(
    (item) => item.id === Number(params.id)
  );

  if (!product) {
    return (
      <div className="text-center mt-20">
        <h1 className="text-3xl font-bold">
          Product Not Found
        </h1>
      </div>
    );
  }

  return (
    <ProtectedRoute>
      <div className="max-w-6xl mx-auto px-4 py-10">
        <Card className="shadow-xl border p-6">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

            {/* Product Image */}
            <div className="relative w-full h-[400px] rounded-2xl overflow-hidden border bg-gray-50">
              <Image
                    src={product.image}
                    alt={product.name}
                       fill
                     sizes="(max-width: 768px) 50vw, 24vw"
                   />
            </div>

            {/* Product Info */}
            <div className="space-y-5">

              <div className="flex gap-3 flex-wrap">
                <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm">
                  {product.category}
                </span>

                <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm">
                  In Stock: {product.stock}
                </span>
              </div>

              <h1 className="text-4xl font-bold">
                {product.name}
              </h1>

              <p className="text-lg text-gray-500">
                Brand:
                <span className="font-semibold ml-2">
                  {product.brand}
                </span>
              </p>

              <div className="flex items-center gap-2 text-yellow-500">
                <FaStar />
                <span className="font-semibold">
                  {product.rating}
                </span>
              </div>

              <h2 className="text-3xl font-bold text-primary">
                ${product.price}
              </h2>

              <p className="text-gray-600 leading-7">
                {product.description}
              </p>

              {/* Extra Info */}
              <div className="grid grid-cols-2 gap-4 pt-4">

                <div className="border rounded-xl p-4 flex items-center gap-3">
                  <FaBoxOpen className="text-xl text-primary" />

                  <div>
                    <p className="text-sm text-gray-500">
                      Stock
                    </p>

                    <h3 className="font-bold">
                      {product.stock} Available
                    </h3>
                  </div>
                </div>

                <div className="border rounded-xl p-4 flex items-center gap-3">
                  <FaTag className="text-xl text-primary" />

                  <div>
                    <p className="text-sm text-gray-500">
                      Category
                    </p>

                    <h3 className="font-bold">
                      {product.category}
                    </h3>
                  </div>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex gap-4 pt-5">
                <Button color="primary">
                  Buy Now
                </Button>

                <Button variant="bordered">
                  Add to Cart
                </Button>
              </div>

            </div>
          </div>
        </Card>
      </div>
    </ProtectedRoute>
  );
}