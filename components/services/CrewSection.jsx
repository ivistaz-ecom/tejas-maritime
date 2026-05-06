"use client";

import { FiCheck } from "react-icons/fi";

const sections = [
  {
    type: "dark",
    title: "Crew Management",
    description:
      "Sourcing and deploying seafarers of the highest calibre — matched precisely to vessel type, trading patterns, and operational requirements.",
    points: [
      "Rigorous recruitment, screening & certification",
      "Deployment logistics & crew coordination",
      "Full MLC 2006 & STCW compliance",
      "Backed by decades of combined maritime expertise",
    ],
  },
  {
    type: "light",
    title: "Ship Design & Construction",
    description:
      "Collaborative technical engagement with owners and shipyards to deliver efficient, compliant vessels from drawing board to delivery.",
    points: [
      "Design evaluation & construction supervision",
      "Regulatory alignment from concept to keel",
      "Operationally focused, practically executed",
    ],
  },
  {
    type: "dark",
    title: "Naval Architecture",
    description:
      "Precision technical documentation and stability engineering, delivered with exactitude and aligned to the highest classification standards.",
    points: [
      "Vessel modification drawings",
      "Stability calculations & booklets",
      "Class & flag-state compliance documentation",
    ],
  },
];

const CrewSection = () => {
  return (
    <section className="bg-[#e9e4d8] py-0 space-y-16">

      {sections.map((data, index) => {
        const isDark = data.type === "dark";

        return (
          <div
            key={index}
            className={
              isDark
                ? "md:mx-10 mx-4 px-6 py-14 bg-gradient-to-b from-[#180E5B] to-[#100B35] text-white"
                : "max-w-7xl mx-auto px-4 sm:px-6"
            }
          >
            <div className={isDark ? "max-w-7xl mx-auto md:px-6" : ""}>

              <div className="grid md:grid-cols-2 gap-10 md:gap-10 items-start">

                {/* LEFT */}
                <div>
                  <h2
                    className={`text-2xl sm:text-3xl md:text-4xl font-serif mb-4 ${
                      isDark ? "text-white" : "text-[#1c1c5a]"
                    }`}
                  >
                    {data.title}
                  </h2>

                  <p
                    className={`text-sm sm:text-base leading-relaxed max-w-md ${
                      isDark ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    {data.description}
                  </p>
                </div>

                {/* RIGHT */}
                <div className="space-y-6">
                  {data.points.map((item, i) => (
                    <div
                      key={i}
                      className={`flex items-start gap-3 px-4 py-4 sm:px-6 ${
                        isDark
                          ? i % 2 === 1
                            ? "bg-white/10 backdrop-blur-sm "
                            : ""
                          : i % 2 === 0
                            ? "bg-[#E2DCD5]"
                            : ""
                      }`}
                    >
                      <FiCheck
                        className={`mt-1 shrink-0 ${
                          isDark ? "text-white" : "text-[#1F0EB3]"
                        }`}
                      />

                      <p
                        className={`text-sm sm:text-base ${
                          isDark ? "text-gray-200" : "text-[#1c1c5a]"
                        }`}
                      >
                        {item}
                      </p>
                    </div>
                  ))}
                </div>

              </div>
            </div>
          </div>
        );
      })}

    </section>
  );
};

export default CrewSection;