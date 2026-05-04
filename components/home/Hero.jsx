"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); // initial check
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="relative h-[75svh] md:h-screen w-full">

      {/* Conditional Image */}
      <Image
        src={
          isMobile
            ? "/home/home_mob_banner.webp"
            : "/home/home_banner.webp"
        }
        alt="Maritime shipping vessel"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay */}
      {/* <div className="absolute inset-0 bg-black/30 z-0" /> */}

      {/* Content */}
      <div className="
  relative z-10 
  max-w-7xl mx-auto 
  h-full 
  flex flex-col 
  justify-between md:justify-end 
  px-4 md:px-6 
  pt-28 md:pt-0 
  pb-18 md:pb-20
">
  
  {/* TOP (Heading) */}
  <div className="text-white max-w-2xl">
    <h1 className="text-2xl sm:text-3xl md:text-5xl font-serif font-semibold leading-tight">
      Maritime Expertise,
      <br />
      Delivered Without Compromise.
    </h1>
  </div>

  {/* BOTTOM (Paragraph) */}
  <div className="text-white max-w-2xl md:mt-6">
    <p className="text-sm sm:text-base md:text-lg text-gray-200">
      For over fifteen years, Tejas Maritime has served the industry's most demanding clients — from agile fiber speedboats to Ultra Large Crude Carriers.
    </p>
  </div>

</div>
    </section>
  );
};

export default Hero;