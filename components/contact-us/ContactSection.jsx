import Image from "next/image";
import { FiMapPin, FiPhone, FiMail } from "react-icons/fi";
import ContactForm from "./ContactForm";

const ContactSection = () => {
  return (
    <section className="bg-[#e9e4d8] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        <div className="grid md:grid-cols-2 gap-10">

          {/* LEFT */}
          <div className="bg-[#120B3F] text-white overflow-hidden">

            {/* Image */}
            <div className="relative w-full h-[220px] md:h-[350px]">
                <Image
                    src="/contact/contact-ship.webp"
                    alt="Container vessel coming to port"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                    priority
                />
                </div>

            {/* Content */}
            <div className="p-6 sm:p-8 space-y-6 text-sm sm:text-base text-gray-300">

              <p>
                Whether you are seeking technical management for your fleet,
                planning a new build, or require an independent survey — our
                team is ready to engage with precision and purpose.
              </p>

              <p>
                We work with shipowners, charterers, financiers, and yards
                across the globe. Whatever your requirement — routine or
                complex — we bring the same standard of rigour and care to
                every engagement.
              </p>

              <p className="italic">
                Our team typically responds within one business day.
              </p>

              {/* Contact Info */}
              <div className="border-t border-white/20 pt-6 space-y-4">

                <div className="flex items-start gap-3">
                  <FiMapPin className="w-5 h-5 mt-1 shrink-0" />
                  <a
                    href="https://www.google.com/maps/place/TEJAS+MARITIME+PVT.+LTD+(Formerly+known+as+Mac+Ship+Design+%26+Construction+Pvt.Ltd)/@19.0150708,73.0385057,17z/data=!3m1!4b1!4m6!3m5!1s0x3be7c15e35c8833f:0xcf140c99d7ca0e97!8m2!3d19.0150708!4d73.0385057!16s%2Fg%2F1pp2vbkym?entry=tts&g_ep=EgoyMDI2MDQxNS4wIPu8ASoASAFQAw%3D%3D&skid=7c8f08c9-954f-4053-a1ab-8f3c5f8a29ed"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                    aria-label="Open Tejas Maritime location in Google Maps"
                  >
                    <span className="font-semibold text-white">
                      Tejas Maritime Pvt. Ltd.
                    </span>
                    <br />
                    Office No. 19, Ideal Trade Center Sector 11, Plot No. 64,
                    CBD Belapur Navi Mumbai – 400614, India
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <FiPhone className="w-5 h-5 mt-1 shrink-0" />
                  <a
                    href="tel:02227561423"
                    className="hover:text-white transition-colors"
                  >
                    022-27561423
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <FiMail className="w-5 h-5 mt-1 shrink-0" />
                  <a
                    href="mailto:info@tejasmaritime.com"
                    className="hover:text-white transition-colors"
                  >
                    info@tejasmaritime.com
                  </a>
                </div>

              </div>

            </div>
          </div>

          {/* RIGHT (FORM COMPONENT) */}
          <ContactForm />

        </div>
      </div>
    </section>
  );
};

export default ContactSection;