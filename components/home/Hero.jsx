// components/home/Hero.jsx

import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative h-screen w-full">
      
      {/* Background Image */}
      <Image
        src="/home/home_banner.webp"
        alt="Maritime shipping vessel at sea"
        fill
        priority
        className="object-cover"
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto h-full flex items-center pt-40 px-6">
        <div className="text-white max-w-2xl">
          
          <h1 className="text-2xl md:text-5xl font-serif font-semibold leading-tight">
            Maritime Expertise,
            <br />
            Delivered Without Compromise.
          </h1>

          <p className="mt-6 text-lg text-gray-200">
            For over fifteen years, Tejas Maritime has served the industry's most demanding clients — from agile fiber speedboats to Ultra Large Crude Carriers.
          </p>

        </div>
      </div>
    </section>
  );
};

export default Hero;