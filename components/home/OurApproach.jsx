const approachData = [
  {
    title: "Technical Precision",
    desc: "Every finding is documented to the standard a flag state, class society, or owner demands — and then some.",
  },
  {
    title: "Cost Intelligence",
    desc: "Our recommendations are engineered for long-term efficiency — not just immediate resolution.",
  },
  {
    title: "Regulatory Confidence",
    desc: "Statutory compliance across IACS-class vessels, ensuring no surprises at port state control.",
  },
  {
    title: "Long-term reliability",
    desc: "Clients who engage us once tend to return. That continuity defines how we work.",
  },
];

const ApproachSection = () => {
  return (
    <section className="bg-[#e9e4d8] py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Title */}
        <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-serif text-blue mb-10 md:mb-16">
          Our Approach
        </h2>

        <div className="grid md:grid-cols-2 gap-10 md:gap-10">

          {/* LEFT CONTENT */}
          <div>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif text-blue mb-4 md:mb-6 leading-snug font-semibold">
              Where Quality Meets Reliability
            </h3>

            <p className="text-gray-700 mb-4 md:mb-6 leading-relaxed">
              The company is committed to delivering reliable and cost-effective marine services while maintaining the highest standards of quality. We deliver more than services—we deliver assurance.
            </p>

            <p className="text-gray-700 leading-relaxed">
              With a strong foundation in ship design, hull structure integrity, and marine engineering solutions, our approach is defined by:
            </p>
          </div>

          {/* RIGHT CONTENT (MAP LIST) */}
          <div className="space-y-6 md:space-y-8">

            {approachData.map((item, index) => (
              <div key={index} className="pb-5 md:pb-6 border-b border-red-500">

                <h3 className="text-xl sm:text-2xl font-serif text-blue mb-2 font-semibold">
                  {item.title}
                </h3>

                <p className="text-gray-700">
                  {item.desc}
                </p>

              </div>
            ))}

          </div>

        </div>
      </div>
    </section>
  );
};

export default ApproachSection;