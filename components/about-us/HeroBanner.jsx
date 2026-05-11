"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const AboutHero = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="relative h-[70svh] md:h-[85vh] w-full">

      {/* Conditional Image */}
      <Image
        src={
          isMobile
            ? "/about-us/about-us-mob-banner.webp"
            : "/about-us/about-us-banner.webp"
        }
        alt="Vessel on sea"
        fill
        sizes="100vw"
        priority
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#000000]/30" />

          {/* Content */}
          <div className="relative z-10 max-w-7xl mx-auto h-full px-4 sm:px-6 pb-12 md:pb-10">

          <div className="h-full flex flex-col justify-between md:justify-end text-white max-w-2xl pt-24 md:pt-0">

            {/* Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-serif font-semibold leading-tight">
              Fifteen Years of Precision.
              <br />
              Built for the Demands of the Sea.
            </h1>

            {/* Subheading */}
            <p className="text-sm sm:text-base md:text-lg text-gray-200 md:mt-4 md:max-w-2xl max-w-md">
              For over fifteen years, Tejas Maritime has served the industry’s most demanding
              clients — from agile fiber speedboats to Ultra Large Crude Carriers.
            </p>

          </div>

      </div>

    </section>
  );
};

export default AboutHero;