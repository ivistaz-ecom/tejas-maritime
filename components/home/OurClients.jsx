"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Button from "../ui/Button";

const clients = [
  {
    src: "/home/logos/Tidewater.webp",
    alt: "Tidewater logo",
  },
  {
    src: "/home/logos/TAG-Offshore.webp",
    alt: "TAG Offshore logo",
  },
  {
    src: "/home/logos/ONGC.webp",
    alt: "ONGC logo",
  },
  {
    src: "/home/logos/maldar.webp",
    alt: "Maldar logo",
  },
  {
    src: "/home/logos/greatoff-grp.webp",
    alt: "Greatoff Group logo",
  },
  {
    src: "/home/logos/essar.webp",
    alt: "Essar logo",
  },
  {
    src: "/home/logos/Anglo-eastern.webp",
    alt: "Anglo-Eastern logo",
  },
  {
    src: "/home/logos/Ambuja-Cement.webp",
    alt: "Ambuja Cement logo",
  },
  {
    src: "/home/logos/Adani.webp",
    alt: "Adani logo",
  },
];

const duplicatedClients = [...clients, ...clients];

const ClientsSection = () => {
  const sectionRef = useRef(null);
  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    const currentSection = sectionRef.current;

    if (!currentSection) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartAnimation(true);
        } else {
          setStartAnimation(false);
        }
      },
      {
        threshold: 0.2,
      }
    );

    observer.observe(currentSection);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-[#e9e4d8] py-12 md:py-16 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Title */}
        <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-serif text-[#1c1c5a] mb-10 md:mb-16">
          OUR CLIENTS
        </h2>

        {/* Logo Marquee */}
        <div className="overflow-hidden group">

          <div
            className={`
              flex w-max
              ${
                startAnimation
                  ? "animate-marquee"
                  : ""
              }
              group-hover:[animation-play-state:paused]
            `}
          >

            {duplicatedClients.map((client, index) => (
              <div
                key={`${client.src}-${index}`}
                className="
                  flex items-center justify-center
                  shrink-0
                  w-[160px]
                  sm:w-[180px]
                  md:w-[220px]
                  px-4
                "
              >
                <Image
                  src={client.src}
                  alt={client.alt}
                  width={150}
                  height={90}
                  loading="lazy"
                  className="object-contain h-[70px] sm:h-[85px] w-auto"
                />
              </div>
            ))}

          </div>
        </div>

        {/* CTA */}
        <div
          className="
            max-w-6xl mx-auto
            mt-12 md:mt-20
            rounded-2xl md:rounded-3xl
            bg-linear-to-r
            from-[#0b0b3c]
            to-[#1a145f]
            p-6 sm:p-8 md:p-14
            flex flex-col md:flex-row
            items-center justify-between
            gap-6 md:gap-8
            text-white
          "
        >

          {/* Left */}
          <div className="max-w-xl">

            <h3 className="text-xl sm:text-2xl md:text-[35px] font-serif mb-3 md:mb-4 leading-snug">
              Your next project deserves the right partnership from the start.
            </h3>

            <p className="text-gray-300 leading-7">
              Whether you are optimising an existing fleet, planning a new
              build, or navigating a complex compliance challenge — we are
              ready to engage.
            </p>

          </div>

          {/* Right */}
          <div className="w-full sm:w-auto flex justify-center md:justify-end shrink-0">

            <Button
              href="/contact-us"
              label="SPEAK TO OUR EXPERTS"
              className="
                red-gradient-btn
                shine-btn
                px-5 sm:px-6
                text-center
                py-3
                rounded-full
                text-white
                text-xs sm:text-sm
                font-medium
                w-fit
              "
            />

          </div>

        </div>
      </div>
    </section>
  );
};

export default ClientsSection;