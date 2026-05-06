"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const ServicesHero = () => {
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
            ? "/services/services-mob-banner.webp"
            : "/services/services-banner.webp"
        }
        alt="Services Banner"
        fill
        sizes="100vw"
        priority
        className="object-cover"
      />

      {/* Overlay */}
      {/* <div className="absolute inset-0 bg-[#0b0b3c]/50" /> */}

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto h-full flex items-end md:items-center px-4 sm:px-6 pb-12 md:pb-0">
        
        <div className="text-white max-w-2xl">

          <h1 className="text-3xl sm:text-4xl md:text-6xl font-serif font-semibold leading-tight">
            Precision at Sea.
            <br />
            Excellence in Every Detail.
          </h1>

          <p className="mt-4 md:mt-6 text-sm sm:text-base md:text-lg text-gray-200">
            From vessel operations to structural surveys and architectural design,
            our integrated services are built on technical rigour, regulatory command,
            and an uncompromising standard of excellence.
          </p>

        </div>

      </div>

    </section>
  );
};

export default ServicesHero;