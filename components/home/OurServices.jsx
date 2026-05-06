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
    <section className="bg-[#0b0b3c] py-12 md:py-16 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Title */}
        <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-serif mb-10 md:mb-16">
          OUR SERVICES
        </h2>

        {/* TOP ROW (3 cards) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-10 mb-5 md:mb-12">
          {servicesData.slice(0, 3).map((service, index) => (
            <div
              key={index}
              className="border border-red-500 rounded-xl px-6 md:px-10 py-5 text-center min-h-[110px] flex items-center justify-center hover:bg-red-500/10 transition duration-300"
            >
              <h3 className="text-md md:text-2xl font-serif leading-snug">
                {service}
              </h3>
            </div>
          ))}
        </div>

        {/* BOTTOM ROW (centered 2 cards) */}
        <div className="flex flex-col sm:flex-row justify-center gap-5 md:gap-10">
          {servicesData.slice(3).map((service, index) => (
            <div
              key={index}
              className="border border-red-500 rounded-xl px-6 md:px-10 py-5 text-center w-full sm:w-[350px] min-h-[110px] flex items-center justify-center hover:bg-red-500/10 transition duration-300"
            >
              <h3 className="text-lg sm:text-xl md:text-2xl font-serif leading-snug">
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