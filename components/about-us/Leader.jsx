"use client";

import Image from "next/image";

const LeadershipSection = () => {
  return (
    <section id="leadership" className="bg-[#e9e4d8] py-16">

      <div className="max-w-7xl mx-auto px-4 md:px-6">

        <div className="grid md:grid-cols-2 gap-10 md:gap-10 items-center">

          {/* LEFT IMAGE */}
          <div className="flex justify-center md:justify-start">
            <div className="relative w-[320px] sm:w-[380px] md:w-[480px] h-[380px] md:h-[460px] overflow-hidden rounded-md">

              <Image
                src="/about-us/sharad-kumar-soni.webp"
                alt="Sharad Kumar Soni"
                fill
                sizes="(max-width: 768px) 320px, (max-width: 1024px) 380px, 480px"
                className="object-cover object-top"
                priority
              />

            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="flex items-center">

            <div className="max-w-xl">

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-[#1c1c5a] mb-6">
                Leadership
              </h2>

              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-black leading-snug mb-3">
                Sharad Kumar Soni <br />
                <span className="font-medium">
                  Managing Director | Chief Engineer
                </span>
              </h3>

              <div className="space-y-4 text-gray-700 text-sm sm:text-base leading-relaxed">

                <p>
                  With over 14 years of sailing experience across global fleets,
                  including bulk carriers, VLCCs, container vessels, and offshore
                  operations. Sharad brings a rare quality to maritime consulting:
                  authority that was earned at sea, not only in an office.
                </p>

                <p>
                  His career spans distinguished organisations including Scindia
                  Steam Navigation and leading international operators.
                  Transitioning ashore, he served as Technical Superintendent,
                  overseeing vessel performance, regulatory compliance, and full
                  lifecycle management before founding Tejas Maritime.
                </p>

                <p className="font-medium text-black">
                  His focus at Tejas Maritime:
                </p>

                <ul className="list-disc pl-5 space-y-2">
                  <li>Elevating regulatory compliance across every vessel class</li>
                  <li>Strengthening seafarer capability and operational discipline</li>
                  <li>Building long-term client relationships grounded in technical trust</li>
                </ul>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default LeadershipSection;