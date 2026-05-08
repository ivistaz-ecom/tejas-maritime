"use client";

const PhilosophySection = () => {
  return (
    <section
      id="philosophy"
      className="bg-[#120B3F] text-white py-16"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6">

        {/* Heading */}
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-serif font-semibold leading-tight">
            Our Philosophy <br />
            <span className="block mt-3">
              Precision. Accountability. Trust.
            </span>
          </h2>

          <p className="text-gray-300 max-w-3xl mx-auto mt-4 mb-12 text-sm sm:text-base">
            Our values are not statements—they are operating principles that guide every decision.
          </p>
        </div>

        {/* Bullet Points */}
        <div className="space-y-8 text-left">

          {/* Integrity */}
          <div className="flex gap-4">
            <span className="mt-2 h-2 w-2 bg-white rounded-full shrink-0"></span>

            <div>
              <p className="font-semibold text-lg">
                Integrity
              </p>

              <p className="text-gray-300 mt-1">
                We operate with transparency, honesty, and respect for the
                responsibility we carry.
              </p>
            </div>
          </div>

          {/* Reliability */}
          <div className="flex gap-4">
            <span className="mt-2 h-2 w-2 bg-white rounded-full shrink-0"></span>

            <div>
              <p className="font-semibold text-lg">
                Reliability
              </p>

              <p className="text-gray-300 mt-1">
                We deliver consistently, ensuring our clients can depend on us
                without hesitation.
              </p>
            </div>
          </div>

          {/* Accountability */}
          <div className="flex gap-4">
            <span className="mt-2 h-2 w-2 bg-white rounded-full shrink-0"></span>

            <div>
              <p className="font-semibold text-lg">
                Accountability
              </p>

              <p className="text-gray-300 mt-1">
                We take ownership—of outcomes, timelines, and the trust placed
                in us.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;