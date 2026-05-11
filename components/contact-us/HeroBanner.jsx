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
            ? "/contact/contact-mob-banner.webp"
            : "/contact/contact_banner.webp"
        }
        alt="Tanker moving on sea"
        fill
        sizes="100vw"
        priority
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#000000]/30" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto h-full px-4 sm:px-6 pt-16 md:pt-0">
  
         <div className="h-full flex flex-col md:justify-end justify-between text-white max-w-2xl py-10">

            {/* Heading Top */}
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-serif font-semibold leading-tight md:pb-10 ">
              Every Voyage Begins
              <br />
              with a Conversation.
            </h1>

            {/* Sub Heading Bottom */}
            <p className="text-sm sm:text-base md:text-lg text-gray-200 max-w-md">
              Whether you are seeking technical management for your fleet,
              planning a new build, or require an independent survey
              — our team is ready to engage with precision and purpose.
            </p>

          </div>

      </div>

    </section>
  );
};

export default ServicesHero;