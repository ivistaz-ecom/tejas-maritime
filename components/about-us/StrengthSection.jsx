"use client";

import Image from "next/image";

const StrengthSection = () => {
  return (
    <section id="strength" className="bg-[#e9e4d8] md:py-16 py-10">

      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        <h2 className="block md:hidden text-2xl sm:text-3xl md:text-4xl font-serif text-[#1c1c5a] mb-6 leading-snug">
          The Strength Behind Every Delivery
       </h2>

        <div className="grid md:grid-cols-2 gap-10 md:gap-10 items-center">

          {/* LEFT CONTENT */}
          <div className="order-2 md:order-1">

            <h2 className="hidden md:block text-2xl sm:text-3xl md:text-4xl font-serif text-[#1c1c5a] mb-6 leading-snug">
              The Strength Behind Every Delivery
            </h2>

            <div className="space-y-4 text-gray-700 text-sm sm:text-base leading-relaxed">

              <p>
                We emphasize on high-quality surveys, accurate reporting, and strict
                compliance with industry regulations. At Tejas Maritime, capability
                is not claimed—it is demonstrated. Our multidisciplinary team includes:
              </p>

              <ul className="list-disc pl-5 space-y-2">
                <li>Naval Architects</li>
                <li>Marine Engineers</li>
                <li>Electrical Engineers</li>
                <li>Mechanical Engineers</li>
                <li>AutoCAD Drafting Specialists</li>
                <li>Senior Marine Professionals</li>
              </ul>

              <p>
                Together, they bring accuracy to surveys, accurate reporting, and strict
                compliance with industry regulations ensuring every project meets the
                highest industry standards.
              </p>

            </div>

          </div>

          {/* RIGHT IMAGE */}
          
            <div className=" order-1 md:order-2 relative w-full max-w-[520px]">

              <Image
                src="/about-us/delivery.webp" // update path
                alt="Seafarers fixing on vessel"
                width={520}
                height={520}
                className="object-contain"
              />

            </div>


        </div>

      </div>

    </section>
  );
};

export default StrengthSection;