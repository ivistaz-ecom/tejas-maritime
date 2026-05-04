"use client";

const PhilosophySection = () => {
  return (
    <section
      id="philosophy"
      className="bg-[#120B3F] text-white py-16"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center md:text-center">

        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-serif font-semibold leading-tight">
          Our Philosophy <br />
          Precision. Accountability. Trust.
        </h2>

        <p className="text-gray-300 max-w-2xl mx-auto mt-4 mb-10 text-sm sm:text-base">
          Our values are not statements—they are operating principles that guide every decision.
        </p>

        {/* Grid */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-10 text-left">

          {/* Vertical Divider (desktop only) */}
          <div className="hidden md:block absolute left-1/2 top-0 h-full w-px bg-white/20"></div>

          {/* LEFT COLUMN */}
          <div className="space-y-6 md:pr-10">
            <div className="flex gap-3">
              <span className="mt-2 h-2 w-2 bg-white rounded-full shrink-0"></span>
              <div>
                <p className="font-semibold">Integrity</p>
                <p className="text-gray-300 mt-1">
                  We operate with transparency, honesty, and respect for the responsibility we carry.
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <span className="mt-2 h-2 w-2 bg-white rounded-full shrink-0"></span>
              <div>
                <p className="font-semibold">Reliability</p>
                <p className="text-gray-300 mt-1">
                  We deliver consistently, ensuring our clients can depend on us without hesitation.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="space-y-6 md:pl-10">
            <div className="flex gap-3">
              <span className="mt-2 h-2 w-2 bg-white rounded-full shrink-0"></span>
              <div>
                <p className="font-semibold">Accountability</p>
                <p className="text-gray-300 mt-1">
                  We take ownership—of outcomes, timelines, and the trust placed in us.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;