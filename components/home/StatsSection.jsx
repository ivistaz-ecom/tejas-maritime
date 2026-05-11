"use client";

import { useEffect, useRef, useState } from "react";

const statsData = [
  { value: 25, label: "Maritime Companies Served" },
  { value: 50, label: "New Client Partnerships" },
  { value: 100, label: "Projects Delivered with Precision" },
  { value: 100, label: "Satisfied Clients Worldwide" },
];

const Counter = ({ target, shouldStart }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!shouldStart) return;

    let current = 0;

    const duration = 1200;
    const stepTime = 30;
    const steps = duration / stepTime;
    const increment = target / steps;

    const timer = setInterval(() => {
      current += increment;

      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [target, shouldStart]);

  return <span>{count}+</span>;
};

const StatsSection = () => {
  const sectionRef = useRef(null);
  const [startCounter, setStartCounter] = useState(false);

  useEffect(() => {
    const currentSection = sectionRef.current;

    if (!currentSection) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCounter(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.25,
      }
    );

    observer.observe(currentSection);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-red-gradient text-white py-12 md:py-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">

        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif mb-8 md:mb-12">
          WHY TEJAS MARITIME?
        </h2>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10">

          {statsData.map((item, index) => (
            <div key={index}>

              {/* Number */}
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-serif font-semibold">
                <Counter
                  target={item.value}
                  shouldStart={startCounter}
                />
              </h3>

              {/* Label */}
              <p className="mt-3 text-sm md:text-base text-gray-100 leading-6">
                {item.label}
              </p>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default StatsSection;