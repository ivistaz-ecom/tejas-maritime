const Hero = () => {
  return (
    <section className="relative md:h-screen h-[85svh] w-full overflow-hidden">

      {/* Art-directed hero: browser loads only the matching source */}
      <picture className="absolute inset-0">
        <source
          media="(min-width: 768px)"
          srcSet="/home/home_banner_v2.webp"
        />
        <img
          src="/home/home_mobile_banner.webp"
          alt="Oil Tanker On Sea"
          width={780}
          height={908}
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover"
        />
      </picture>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20 z-[1]" />

      {/* Content */}
      <div
        className="
          relative z-10
          max-w-7xl mx-auto
          h-full
          flex flex-col
          justify-between md:justify-end
          px-4 md:px-6
          pt-36 md:pt-0
          pb-16 md:pb-20
        "
      >

        {/* Heading */}
        <div className="max-w-2xl text-white md:mb-6">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-serif font-semibold leading-tight">
            Maritime Expertise,
            <br />
            Delivered Without Compromise.
          </h1>
        </div>

        {/* Sub Heading */}
        <div className="max-w-2xl text-white">
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