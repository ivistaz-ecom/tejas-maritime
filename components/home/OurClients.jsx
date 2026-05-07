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
  const [visibleLogos, setVisibleLogos] = useState(5);
  const loopedClients = [
    ...clients.slice(-visibleLogos),
    ...clients,
    ...clients.slice(0, visibleLogos),
  ];
  const sectionRef = useRef(null);
  const [index, setIndex] = useState(visibleLogos);
  const [isAnimating, setIsAnimating] = useState(true);
  const [shouldAutoSlide, setShouldAutoSlide] = useState(false);

  useEffect(() => {
    const updateVisibleLogos = () => {
      const isMobile = window.innerWidth < 768;
      setVisibleLogos(isMobile ? 2 : 5);
    };

    updateVisibleLogos();
    window.addEventListener("resize", updateVisibleLogos);

    return () => window.removeEventListener("resize", updateVisibleLogos);
  }, []);

  useEffect(() => {
    setIndex(visibleLogos);
  }, [visibleLogos]);

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
    <section ref={sectionRef} className="bg-[#e9e4d8] py-12 md:py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Title */}
        <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-serif text-[#1c1c5a] mb-10 md:mb-16">
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
              <div key={`${src}-${i}`} className="flex justify-center px-2" style={{ minWidth: `${100 / visibleLogos}%` }}>
                <Image
                  src={src}
                  alt="client logo"
                  width={150}
                  height={90}
                  className="object-contain h-[85px] w-auto"
                />
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="max-w-6xl mx-auto mt-12 md:mt-20 bg-linear-to-r from-[#0b0b3c] to-[#1a145f] text-white rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-14 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">

          <div className="max-w-xl">
            <h3 className="text-xl sm:text-2xl md:text-[35px] font-serif mb-3 md:mb-4">
              Your next project deserves the right partnership from the start.
            </h3>

            <p className="text-gray-300">
              Whether you are optimising an existing fleet, planning a new build, or navigating a complex compliance challenge — we are ready to engage.
            </p>
          </div>

          <div className="w-full sm:w-auto flex justify-center md:justify-end shrink-0">
            <Button
              href="/contact-us"
              label="SPEAK TO OUR EXPERTS"
              className="red-gradient-btn shine-btn px-5 sm:px-6 py-3 rounded-full text-white text-xs sm:text-sm font-medium text-center w-full sm:w-auto"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default ClientsSection;