"use client";

import { useState } from "react";
import Image from "next/image";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

const teamData = [
  {
    image: "/home/naval-architects.webp",
    title: "Naval Architects",
    desc: "Design, stability analysis, and structural integrity from keel to superstructure.",
  },
  {
    image: "/home/marine-engineers.webp",
    title: "Marine Engineers",
    desc: "Mechanical and electrical systems, propulsion, and engineering compliance.",
  },
  {
    image: "/home/technical-managers.webp",
    title: "Technical Managers",
    desc: "Operational authority and flag state expertise from professionals with sea experience.",
  },
  {
    image: "/home/senior-marine-professionals.webp",
    title: "Senior Marine Professionals",
    desc: "Decades of hands-on vessel experience, lending judgment and authority where technical knowledge alone is not enough.",
  },
];

const TeamSection = () => {
  const [index, setIndex] = useState(0);

  const visibleCards = 3;

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
    <section className="blue-gradient text-white py-16">
      
      {/* Top Content */}
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-center font-semibold mb-16 text-3xl">
          OUR TEAM
        </h2>

        <div className="grid md:grid-cols-2 gap-0 mb-16 items-center max-w-5xl">
            <h3 className="text-4xl font-serif leading-snug">
              Built on Expertise <br />
              Driven by Detail.
            </h3>

            <p className="text-gray-300 text-lg">
              Excellence in maritime consulting is not a matter of scale — it is a matter of calibre.
              Our multidisciplinary team brings together the full technical spectrum required.
            </p>
          </div>
      </div>

      {/* Carousel */}
      <div className="max-w-[1400px] mx-auto px-6 relative">

        {/* LEFT ARROW */}
        <button
          onClick={prevSlide}
          disabled={index === 0}
          className="absolute -left-6 top-1/2 -translate-y-1/2 z-10 
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
          className="absolute -right-6 top-1/2 -translate-y-1/2 z-10 
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
                className="w-full md:w-1/3 flex-shrink-0 px-3"
              >
                <div className="relative h-[350px] w-full mb-4 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition duration-500 hover:scale-110"
                  />
                </div>

                <h4 className="text-lg font-semibold">{item.title}</h4>
                <p className="text-gray-400 text-sm mt-2 pe-2">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default TeamSection;