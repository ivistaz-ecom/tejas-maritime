"use client";

import { useState, useRef, useEffect } from "react";
import { FiCheck } from "react-icons/fi";

const tabsData = [
  {
    title: "CORE SERVICES",
    heading: "Technical Management",
    description:
      "Comprehensive technical stewardship across the full vessel lifecycle — ensuring operational safety, fiscal discipline, and unwavering regulatory conformity.",
    points: [
      "Planned maintenance & dry-docking oversight",
      "Technical supervision & budget governance",
      "IMO & IACS compliance management",
      "Performance monitoring & onboard inspections",
      "Applicable across tankers, bulkers & container fleets",
    ],
  },
  {
    title: "SURVEY & PROJECT SERVICES",
    heading: "Project-Based Execution",
    description:
      "Structured delivery of critical maritime projects — from initial concept through to completion, with total accountability at every stage.",
    points: [
      "Vessel takeovers & condition inspections",
      "Retrofits, modifications & re-flagging",
      "Dry-docking project support",
    ],
  },
  {
    title: "SPECIALISED CAPABILITIES",
    heading: "Advanced Inspection & Testing",
    description:
      "Ultrasonic Thickness Measurement (UTM), Non-Destructive Testing (NDT), and IACS-aligned methodologies throughout.",
    points: [],
  },
];

const TabSection = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [indicatorStyle, setIndicatorStyle] = useState({
    width: 0,
    left: 0,
  });

  const tabsRef = useRef([]);

  useEffect(() => {
    const currentTab = tabsRef.current[activeTab];

    if (currentTab) {
      setIndicatorStyle({
        width: currentTab.offsetWidth,
        left: currentTab.offsetLeft,
      });
    }
  }, [activeTab]);

  return (
    <section className="bg-[#e9e4d8] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* ===== TABS ===== */}
        <div className="flex justify-center mb-12">
  <div className="w-full overflow-x-auto">
    
    <div className="relative flex w-max mx-auto gap-6 md:gap-10 pb-4">

      {tabsData.map((tab, index) => (
        <button
          key={index}
          ref={(el) => (tabsRef.current[index] = el)}
          onClick={() => setActiveTab(index)}
          className={`pb-2 px-2 whitespace-nowrap text-xs sm:text-sm md:text-base font-medium tracking-wide transition
            ${
              activeTab === index
                ? "text-[#A30133]"
                : "text-[#1c1c5a]"
            }
          `}
        >
          {tab.title}
        </button>
      ))}

      {/* Base line */}
      <span className="absolute left-0 bottom-0 w-full h-[2px] bg-blue"></span>

      {/* Active underline */}
      <span
        className="absolute bottom-0 h-[2px] bg-[#A30133] transition-all duration-300 ease-in-out"
        style={{
          width: tabsRef.current[activeTab]?.offsetWidth || 0,
          left: tabsRef.current[activeTab]?.offsetLeft || 0,
        }}
      />

    </div>
  </div>
</div>

        {/* ===== CONTENT ===== */}
        <div className="grid md:grid-cols-2 gap-10 items-start">

          {/* LEFT */}
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-[#1c1c5a] mb-6 leading-snug">
              {tabsData[activeTab].heading}
            </h2>

            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              {tabsData[activeTab].description}
            </p>
          </div>

          {/* RIGHT */}
          <div className="space-y-4">
            {tabsData[activeTab].points.map((point, i) => (
              <div
                key={i}
                className={`flex items-start gap-3 p-4 sm:p-5 ${
                  i % 2 === 0 ? "bg-[#E2DCD5]" : ""
                }`}
              >
                <FiCheck className="text-[#1F0EB3] mt-1 h-5 w-5 shrink-0" />

                <p className="text-sm sm:text-base text-[#1c1c5a]">
                  {point}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default TabSection;