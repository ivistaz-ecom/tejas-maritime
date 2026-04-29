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
    if (!shouldStart) {
      return;
    }

    let start = 0;
    const duration = 1500; // animation time
    const increment = target / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [target, shouldStart]);

  return <span>{count}+</span>;
};

const StatsSection = () => {
  const sectionRef = useRef(null);
  const [shouldStartCount, setShouldStartCount] = useState(false);

  useEffect(() => {
    const sectionElement = sectionRef.current;

    if (!sectionElement) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldStartCount(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(sectionElement);

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="bg-red-gradient text-white py-16">
      <div className="max-w-7xl mx-auto px-6 text-center">

        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-serif mb-12">
          WHY TEJAS MARITIME?
        </h2>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">

          {statsData.map((item, index) => (
            <div key={index}>
              
              {/* Count */}
              <h3 className="text-4xl md:text-5xl font-serif font-semibold">
                <Counter target={item.value} shouldStart={shouldStartCount} />
              </h3>

              {/* Label */}
              <p className="mt-3 text-sm md:text-base text-gray-100">
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