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
    <section className="relative w-full h-[70vh] overflow-hidden">
      {/* Background Image */}
      <div
        className={`absolute inset-0 transition-opacity duration-500 ${
          fade ? "opacity-100" : "opacity-0"
        }`}
      >
        <Image
          src={slide.image}
          alt="hero"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center text-center px-6 space-y-4">
        
        {/* Icon -*/}
        <div className={`text-5xl ${slide.accentColor} animate-pulse drop-shadow-lg transition-colors duration-500`}>
          {slide.icon}
        </div>

        {/* Title */}
        <h1 className={`text-3xl md:text-5xl font-bold ${slide.titleColor} drop-shadow-lg transition-colors duration-500`}>
          {slide.title}
        </h1>

        {/* Description */}
        <p className="text-sm md:text-lg text-gray-200 max-w-xl">
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
      <div className="absolute bottom-5 flex gap-2 left-1/2 -translate-x-1/2">
        {slides.map((_, i) => (
          <div
            key={i}
            className={`w-3 h-3 rounded-full transition-all duration-500 ${
              i === index ? "bg-white scale-125" : "bg-white/40"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;