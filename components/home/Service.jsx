import Link from "next/link";

const Service = () => {
  return (
    <section className="bg-sand-light px-4 sm:px-6 py-10 md:py-14">
      <div className="max-w-7xl mx-auto">

        {/* Content */}
        <div className="max-w-5xl mx-auto">
          <p className="text-center text-sm sm:text-base leading-7 text-[#1A1A1A]">
            Tejas Maritime brings together a distinguished team of Naval
            Architects, Master Mariners, and Marine Engineers delivering
            expertise. We ensure seamless statutory compliance for IACS-class
            vessels executed with precision, insight, and uncompromising
            standards.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-8">

          <Link
            href="/contact-us"
            className="
              red-gradient-btn
              shine-btn
              rounded-full
              px-6 py-3
              text-xs sm:text-sm
              font-medium
              uppercase
              tracking-wide
              text-white
              transition-transform
              duration-300
              hover:scale-[1.02]
            "
          >
            Begin a Partnership
          </Link>

          <Link
            href="/services"
            className="
              red-gradient-btn
              shine-btn
              rounded-full
              px-6 py-3
              text-xs sm:text-sm
              font-medium
              uppercase
              tracking-wide
              text-white
              transition-transform
              duration-300
              hover:scale-[1.02]
            "
          >
            Explore Our Services
          </Link>

        </div>
      </div>
    </section>
  );
};

export default Service;