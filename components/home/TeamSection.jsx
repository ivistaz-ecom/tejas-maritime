"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

const teamData = [
  {
    image: "/home/naval-architects.webp",
    title: "Naval Architects",
    desc: "Design, stability analysis, and structural integrity from keel to superstructure.",
    alt: "Architect holding design",
  },
  {
    image: "/home/marine-engineers.webp",
    title: "Marine Engineers",
    desc: "Mechanical and electrical systems, propulsion, and engineering compliance.",
    alt: "Seafarers at port",
  },
  {
    image: "/home/technical-managers.webp",
    title: "Technical Managers",
    desc: "Operational authority and flag state expertise from professionals with sea experience.",
    alt: "Seafarer checking engine",
  },
  {
    image: "/home/senior-marine-professionals.webp",
    title: "Senior Marine Professionals",
    desc: "Decades of hands-on vessel experience, lending judgment and authority where technical knowledge alone is not enough.",
    alt: "Seafarer talking on port",
  },
];

const TeamSection = () => {
  const [index, setIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setVisibleCards(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCards(2);
      } else {
        setVisibleCards(3);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const maxIndex = Math.max(teamData.length - visibleCards, 0);

  const nextSlide = () => {
    setIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const prevSlide = () => {
    setIndex((prev) => Math.max(prev - 1, 0));
  };

  return (
    <section className="blue-gradient text-white py-12 md:py-16">

      {/* Heading */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-center text-2xl sm:text-3xl font-semibold mb-6 md:mb-8">
          OUR TEAM
        </h2>

        <div className="mb-10">
          <h3 className="text-center text-2xl sm:text-3xl md:text-4xl font-serif leading-snug">
            Built on Expertise.
            <br className="sm:hidden" />
            Driven by Detail.
          </h3>
        </div>
      </div>

      {/* Carousel */}
      <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6">

        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          disabled={index === 0}
          aria-label="Previous slide"
          className="
            absolute left-2 md:-left-6
            top-1/2 -translate-y-1/2 z-10
            flex items-center justify-center
            w-11 h-11 rounded-full
            red-gradient-btn
            transition-transform duration-300
            hover:scale-105
            disabled:opacity-30 disabled:cursor-not-allowed
          "
        >
          <FiArrowLeft className="text-white text-lg" />
        </button>

        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          disabled={index >= maxIndex}
          aria-label="Next slide"
          className="
            absolute right-2 md:-right-6
            top-1/2 -translate-y-1/2 z-10
            flex items-center justify-center
            w-11 h-11 rounded-full
            red-gradient-btn
            transition-transform duration-300
            hover:scale-105
            disabled:opacity-30 disabled:cursor-not-allowed
          "
        >
          <FiArrowRight className="text-white text-lg" />
        </button>

        {/* Slider */}
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{
              transform: `translateX(-${(100 / visibleCards) * index}%)`,
            }}
          >
            {teamData.map((item, i) => (
              <div
                key={i}
                className="shrink-0 px-2 sm:px-3"
                style={{
                  width: `${100 / visibleCards}%`,
                }}
              >
                {/* Image */}
                <div className="relative h-[320px] sm:h-[320px] md:h-[350px] overflow-hidden mb-4">

                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    loading="lazy"
                    sizes="
                      (max-width: 768px) 100vw,
                      (max-width: 1024px) 50vw,
                      33vw
                    "
                    className="
                      object-cover
                      transition-transform
                      duration-500
                      md:hover:scale-105
                    "
                  />
                </div>

                {/* Content */}
                <h4 className="text-xl sm:text-lg font-semibold">
                  {item.title}
                </h4>

                <p className="text-sm text-gray-400 mt-2 leading-7">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default TeamSection;