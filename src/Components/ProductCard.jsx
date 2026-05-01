import { Card, Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { FaStar } from "react-icons/fa";

const ProductCard = ({ product }) => {
  if (!product) return null;

  return (
    <Card
      className="
        border rounded-2xl overflow-hidden shadow-sm
        bg-white p-3
        animate__animated animate__fadeInUp
        hover:shadow-xl transition-all duration-300
      "
    >
      {/* Image Section */}
      <div className="relative w-full aspect-square overflow-hidden rounded-xl group">
        <Image
          src={product.image}
          fill
          alt={product.name}
          loading="lazy"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="
            object-cover
            group-hover:scale-110
            transition duration-500 
            animate__animated animate__pulse animate__infinite animate__slow
          "
        />

        {/* Category Badge */}
        <div className="
          absolute top-3 right-3
          bg-black text-white text-xs
          px-3 py-1 rounded-full
          opacity-90 group-hover:opacity-100
          transition
        ">
          {product.category}
        </div>
      </div>

      {/* Info */}
      <div className="mt-4 space-y-2 animate__animated animate__fadeInUp animate__delay-1s">
        <h2 className="text-lg font-semibold line-clamp-1">
          {product.name}
        </h2>
      </div>

      {/* Rating + Price */}
      <div className="
        flex items-center justify-between mt-4
        animate__animated animate__fadeInUp animate__delay-1s
      ">
        <div className="flex items-center gap-2 text-orange-500">
          <FaStar />
          <p className="font-medium">{product.rating}</p>
        </div>
        <p className="text-lg font-bold">
          ${product.price}
        </p>
      </div>

      {/*  Button with Animation Section */}
      <Link href={`/products/${product.id}`} className="block mt-5">
        <Button
          variant="outline"
          className="w-ful font-semibold  transition-all duration-300 animate__animated  animate__pulse 
            animate__infinite animate__slow hover:animate__none hover:bg-black  hover:text-white
             hover:scale-[1.05] hover:shadow-lg active:scale-95">
           View Details
        </Button>
      </Link>
    </Card>
  );
};

export default ProductCard;