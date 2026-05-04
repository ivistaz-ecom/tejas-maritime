"use client";

import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative h-[75svh] md:h-screen w-full">

      {/* Responsive Image */}
      <div className="absolute inset-0">
        <picture>
          <source
            media="(max-width: 768px)"
            srcSet="/home/home_mob_banner.webp"
          />
          <Image
            src="/home/home_banner_v2.webp"
            alt="Maritime shipping vessel"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </picture>
      </div>

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
        
        {/* TOP */}
        <div className="text-white max-w-2xl">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-serif font-semibold leading-tight">
            Maritime Expertise,
            <br />
            Delivered Without Compromise.
          </h1>
        </div>

        {/* BOTTOM */}
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