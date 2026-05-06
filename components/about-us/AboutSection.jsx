import Image from "next/image";

const AboutSection = () => {
  return (
    <section id="history" className="bg-[#e9e4d8] py-16">

      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        <div className="grid md:grid-cols-2 gap-10 items-center">

          {/* LEFT */}
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-[#1c1c5a] mb-6">
              About Us
            </h2>

            <div className="space-y-4 text-gray-700 text-sm sm:text-base leading-relaxed">
              <p>
                Tejas Maritime Pvt. Ltd. is built on a singular principle—
                deliver uncompromising quality to a global shipping industry
                that demands precision.
              </p>

              <p>
                Since our inception in 2009, we have grown into a trusted
                partner for marine design, consultancy, and statutory
                compliance—serving IACS-class vessels with a level of detail
                and discipline that defines our work.
              </p>

              <p>
                Our team of Naval Architects, Master Mariners, and Marine
                Engineers brings together deep technical expertise and real-world
                operational insight—ensuring every solution is both practical and
                performance-driven.
              </p>

              <p>
                From high-speed crafts to Ultra Large Crude Carriers (ULCCs),
                our experience spans the full spectrum of modern shipping.
              </p>
            </div>
          </div>




          {/* RIGHT IMAGE */}
          <div className="w-full flex justify-center">
  <Image
    src="/about-us/about-us.webp"
    alt="Ship"
    width={500}   // adjust based on your design
    height={700}  // keeps original ratio
    className="w-full h-auto object-contain"
  />
</div>

        </div>

      </div>
    </section>
  );
};

export default AboutSection;




