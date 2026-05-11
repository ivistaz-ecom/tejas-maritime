const Hero = () => {
  return (
    <section className="relative h-[75svh] md:h-screen w-full overflow-hidden">

      {/* Responsive Banner */}
      <picture>

        {/* Mobile Banner */}
        <source
          media="(max-width: 767px)"
          srcSet="/home/home_mobile_banner.webp"
        />

        {/* Desktop Banner */}
        <img
          src="/home/home_banner_v2.webp"
          alt="Oil Tanker On Sea"
          fetchPriority="high"
          className="absolute inset-0 h-full w-full object-cover"
        />

      </picture>

      {/* Content */}
      <div
        className="
          relative z-10
          max-w-7xl mx-auto
          h-full
          flex flex-col
          justify-between md:justify-end
          px-4 md:px-6
          pt-28 md:pt-0
          pb-18 md:pb-20
        "
      >

        {/* Top */}
        <div className="max-w-2xl text-white">

          <h1 className="text-2xl sm:text-3xl md:text-5xl font-serif font-semibold leading-tight">
            Maritime Expertise,
            <br />
            Delivered Without Compromise.
          </h1>

        </div>

        {/* Bottom */}
        <div className="max-w-2xl md:mt-6 text-white">

          <p className="text-sm sm:text-base md:text-lg text-gray-200">
            For over fifteen years, Tejas Maritime has served the industry's
            most demanding clients — from agile fiber speedboats to Ultra Large
            Crude Carriers.
          </p>

        </div>

      </div>
    </section>
  );
};

export default Hero;