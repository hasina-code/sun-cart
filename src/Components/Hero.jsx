"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaTags, FaFire, FaShoppingBag } from "react-icons/fa";

const slides = [
  {
    title: "Summer Sale 50% OFF",
    desc: "Grab your favorite summer essentials at half price!",
    image: "https://i.ibb.co/35NmCDW4/summer-3.jpg",
    icon: <FaTags />,
   
    accentColor: "text-yellow-200", 
    titleColor: "text-white",    
    btnStyle: "bg-yellow-200 text-black hover:bg-yellow-100",
  },
  {
    title: "Hot Deals Available Now",
    desc: "Limited time offers on trending summer products!",
    image: "https://i.ibb.co/pB4CNzt0/Urban-Wear.jpg",
    icon: <FaFire />,
    accentColor: "text-orange-400",
    titleColor: "text-orange-200",
    btnStyle: "bg-orange-400 text-white hover:bg-orange-600",
  },
  {
    title: "Refresh Your Summer Style",
    desc: "New arrivals with exciting discounts!",
    image: "https://i.ibb.co/DDnckRYn/Skin-Care.jpg",
    icon: <FaShoppingBag />,
    accentColor: "text-cyan-200",
    titleColor: "text-cyan-50",
    btnStyle: "bg-cyan-200 text-black hover:bg-cyan-500",
  },
];

const Hero = () => {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % slides.length);
        setFade(true);
      }, 300);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  const slide = slides[index];

  return (
    <section className="bg-gray-100 py-6 md:py-10 max-w-7xl mx-auto px-2 sm:px-4 lg:px-6">
        
        <div className="relative w-full h-[450px] md:h-[600px] overflow-hidden rounded-xl  bg-black">
          
          {/* Background Image */}
          <div
            className={`absolute inset-0 transition-all duration-700 ease-in-out ${
              fade ? "opacity-100 scale-100" : "opacity-0 scale-105"
            }`}
          >
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1280px"
            />
            
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
          </div>
          <div className="relative h-full flex flex-col items-center justify-center px-8 md:px-16 space-y-4 md:space-y-6">
            
            <div className={`text-3xl md:text-5xl ${slide.accentColor} animate-pulse drop-shadow-lg`}>
              {slide.icon}
            </div>

            <h1 className={`text-3xl md:text-5xl font-black max-w-2xl leading-tight ${slide.titleColor} drop-shadow-md`}>
              {slide.title}
            </h1>

            <p className="text-sm md:text-xl text-gray-200 max-w-lg font-medium leading-relaxed">
              {slide.desc}
            </p>

           {/* Button */}
        <Link
          href="/products"
          className={`${slide.btnStyle} px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg`}
        >
          Shop Now
        </Link>
          </div>

          {/* Dots */}
          <div className="absolute bottom-6 right-8 flex gap-2">
            {slides.map((_, i) => (
              <div
                key={i}
                className={`transition-all duration-500 rounded-full ${
                  i === index ? "w-8 h-2 bg-white" : "w-2 h-2 bg-white/40"
                }`}
              />
            ))}
          </div>
        </div>
    </section>
  );
};

export default Hero;