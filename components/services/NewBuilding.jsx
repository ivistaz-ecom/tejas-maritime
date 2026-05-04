"use client";

import Image from "next/image";
import Link from "next/link";

const CtaBanner = () => {
  return (
    <section className="bg-[#e9e4d8] py-10">
      <div className="px-4 md:px-10">

        <div className="relative overflow-hidden shadow-lg">

          {/* Background Image */}
          <Image
            src="/services/new-build.webp" // replace with your image
            alt="CTA Banner"
            width={1400}
            height={400}
            className="w-full h-[260px] md:h-[300px] object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50" />

          {/* Content */}
          <div className="absolute inset-0 flex flex-col md:flex-row items-center md:justify-between justify-center max-w-7xl mx-auto px-6">

            {/* LEFT TEXT */}
            <h2 className="text-white font-serif text-lg sm:text-2xl md:text-4xl leading-snug max-w-xl text-center md:text-left">
              Planning a New Build or <br className="hidden md:block" />
              Modification?
            </h2>

            {/* BUTTON */}
            <Link
              href="/contact"
              className="mt-6 md:mt-0 bg-white text-[#1c1c5a] px-6 py-3 rounded-full text-sm md:text-base font-medium "
            >
              SPEAK TO OUR EXPERTS
            </Link>

          </div>

        </div>

      </div>
    </section>
  );
};

export default CtaBanner;