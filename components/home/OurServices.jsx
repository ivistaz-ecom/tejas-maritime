"use client";

const servicesData = [
  <>Technical <br /> Management</>,
  <>Crew <br /> Management</>,
  <>Ship Design  &  <br />Construction</>,
  <>Survey  & <br /> Project Services</>,
  <>Naval <br /> Architecture</>,
];

const ServicesSection = () => {
  return (
    <section className="bg-[#0b0b3c] py-16 text-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Title */}
        <h2 className="text-center text-3xl md:text-4xl font-serif mb-16">
          OUR SERVICES
        </h2>

        {/* TOP ROW (3 cards) */}
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          {servicesData.slice(0, 3).map((service, index) => (
            <div
              key={index}
              className="border border-red-500 rounded-xl px-10 py-5 text-center flex items-center justify-center hover:bg-red-500/10 transition duration-300"
            >
              <h3 className="text-xl md:text-2xl font-serif leading-snug">
                {service}
              </h3>
            </div>
          ))}
        </div>

        {/* BOTTOM ROW (centered 2 cards) */}
        <div className="flex justify-center gap-10">
          {servicesData.slice(3).map((service, index) => (
            <div
              key={index}
              className="border border-red-500 rounded-xl px-10 py-5 text-center w-full max-w-[350px] flex items-center justify-center hover:bg-red-500/10 transition duration-300"
            >
              <h3 className="text-xl md:text-2xl font-serif leading-snug">
                {service}
              </h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;