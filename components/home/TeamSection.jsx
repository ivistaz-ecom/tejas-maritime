"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

const teamData = [
  {
    image: "/home/naval-architects.webp",
    title: "Naval Architects",
    desc: "Design, stability analysis, and structural integrity from keel to superstructure.",
    alt:"Architect holding design",
  },
  {
    image: "/home/marine-engineers.webp",
    title: "Marine Engineers",
    desc: "Mechanical and electrical systems, propulsion, and engineering compliance.",
    alt:"Seafarers at port",
  },
  {
    image: "/home/technical-managers.webp",
    title: "Technical Managers",
    desc: "Operational authority and flag state expertise from professionals with sea experience.",
    alt:"Seafarer checking engine",
  },
  {
    image: "/home/senior-marine-professionals.webp",
    title: "Senior Marine Professionals",
    desc: "Decades of hands-on vessel experience, lending judgment and authority where technical knowledge alone is not enough.",
    alt:"Seafarer talking on port",
  },
];

const TeamSection = () => {
  const [index, setIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);

  useEffect(() => {
    const updateVisibleCards = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setVisibleCards(1);
      } else if (width < 1024) {
        setVisibleCards(2);
      } else {
        setVisibleCards(3);
      }
    };

    updateVisibleCards();
    window.addEventListener("resize", updateVisibleCards);

    return () => window.removeEventListener("resize", updateVisibleCards);
  }, []);

  useEffect(() => {
    const maxIndex = Math.max(teamData.length - visibleCards, 0);
    if (index > maxIndex) {
      setIndex(maxIndex);
    }
  }, [index, visibleCards]);

  const nextSlide = () => {
    if (index < teamData.length - visibleCards) {
      setIndex((prev) => prev + 1);
    }
  };

  const prevSlide = () => {
    if (index > 0) {
      setIndex((prev) => prev - 1);
    }
  };

  return (
    <section className="blue-gradient text-white py-12 md:py-16">
      
      {/* Top Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-center font-semibold mb-6 md:mb-16 text-2xl sm:text-3xl">
          OUR TEAM
        </h2>

        <div className="grid md:grid-cols-2 gap-6 md:gap-10 mb-10 md:mb-16 items-center max-w-5xl">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif leading-snug text-center md:text-left">
              Built on Expertise <br />
              Driven by Detail.
            </h3>

            <p className="text-gray-300 text-base md:text-lg">
              Excellence in maritime consulting is not a matter of scale — it is a matter of calibre.
              Our multidisciplinary team brings together the full technical spectrum required.
            </p>
          </div>
      </div>

      {/* Carousel */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 relative">

        {/* LEFT ARROW */}
        <button
          onClick={prevSlide}
          disabled={index === 0}
          aria-label="Previous slide"
          className="absolute left-0 sm:-left-2 md:-left-6 top-1/2 -translate-y-1/2 z-10 
          red-gradient-btn w-12 h-12 rounded-full flex items-center justify-center 
          shadow-lg transition hover:scale-110 
          disabled:opacity-30 disabled:cursor-not-allowed"
        >
          <FiArrowLeft className="text-white text-xl" />
        </button>



        {/* RIGHT ARROW */}
        <button
          onClick={nextSlide}
          disabled={index >= teamData.length - visibleCards}
          aria-label="Next slide"
          className="absolute right-0 sm:-right-2 md:-right-6 top-1/2 -translate-y-1/2 z-10 
          red-gradient-btn w-12 h-12 rounded-full flex items-center justify-center 
          shadow-lg transition hover:scale-110 
          disabled:opacity-30 disabled:cursor-not-allowed"
        >
          <FiArrowRight className="text-white text-xl" />
        </button>

        {/* SLIDER */}
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${(100 / visibleCards) * index}%)`,
            }}
          >
            {teamData.map((item, i) => (
              <div
                key={i}
                className="shrink-0 px-2 sm:px-3"
                style={{ width: `${100 / visibleCards}%` }}
              >
                <div className="relative h-[280px] sm:h-[320px] md:h-[350px] w-full mb-4 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition duration-500 hover:scale-110"
                  />
                </div>

                <h4 className="text-base sm:text-lg font-semibold">{item.title}</h4>
                <p className="text-gray-400 text-sm mt-2 pe-1 sm:pe-2">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default TeamSection;