"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Button from "../ui/Button";

const clients = [
  "/home/logos/Tidewater.webp",
  "/home/logos/TAG-Offshore.webp",
  "/home/logos/ONGC.webp",
  "/home/logos/maldar.webp",
  "/home/logos/greatoff-grp.webp",
  "/home/logos/essar.webp",
  "/home/logos/Anglo-eastern.webp",
  "/home/logos/Ambuja-Cement.webp",
  "/home/logos/Adani.webp",
];

const ClientsSection = () => {
  const visibleLogos = 5;
  const loopedClients = [
    ...clients.slice(-visibleLogos),
    ...clients,
    ...clients.slice(0, visibleLogos),
  ];
  const sectionRef = useRef(null);
  const [index, setIndex] = useState(visibleLogos);
  const [isAnimating, setIsAnimating] = useState(true);
  const [shouldAutoSlide, setShouldAutoSlide] = useState(false);

  // Start auto slide only when section enters viewport
  useEffect(() => {
    const sectionElement = sectionRef.current;

    if (!sectionElement) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setShouldAutoSlide(entry.isIntersecting);
      },
      { threshold: 0.35 }
    );

    observer.observe(sectionElement);

    return () => observer.disconnect();
  }, []);

  // Auto slide one-by-one while visible
  useEffect(() => {
    if (!shouldAutoSlide) {
      return;
    }

    const interval = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, 2500);

    return () => clearInterval(interval);
  }, [shouldAutoSlide]);

  const handleTransitionEnd = () => {
    if (index >= clients.length + visibleLogos) {
      setIsAnimating(false);
      setIndex(visibleLogos);
    }
  };

  useEffect(() => {
    if (isAnimating) {
      return;
    }

    const frame = requestAnimationFrame(() => {
      setIsAnimating(true);
    });

    return () => cancelAnimationFrame(frame);
  }, [isAnimating]);

  return (
    <section ref={sectionRef} className="bg-[#e9e4d8] py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* Title */}
        <h2 className="text-center text-3xl md:text-4xl font-serif text-[#1c1c5a] mb-16">
          OUR CLIENTS
        </h2>

        {/* Slider */}
        <div className="overflow-hidden">
          <div
            className={`flex ${isAnimating ? "transition-transform duration-700 ease-in-out" : ""}`}
            onTransitionEnd={handleTransitionEnd}
            style={{
              transform: `translateX(-${(index * 100) / visibleLogos}%)`,
            }}
          >
            {loopedClients.map((src, i) => (
              <div key={`${src}-${i}`} className="min-w-[20%] flex justify-center px-2">
                <Image
                  src={src}
                  alt="client logo"
                  width={150}
                  height={90}
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="max-w-6xl mx-auto mt-20 bg-gradient-to-r from-[#0b0b3c] to-[#1a145f] text-white rounded-3xl p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8">

          <div className="max-w-xl">
            <h3 className="text-2xl md:text-[35px] font-serif mb-4">
              Your next project deserves the right partnership from the start.
            </h3>

            <p className="text-gray-300">
              Whether you are optimising an existing fleet, planning a new build, or navigating a complex compliance challenge — we are ready to engage.
            </p>
          </div>

          <Button
            href="/contact"
            label="SPEAK TO OUR EXPERTS"
            className="red-gradient-btn px-6 py-3 rounded-full text-white font-medium"
          />

        </div>

      </div>
    </section>
  );
};

export default ClientsSection;