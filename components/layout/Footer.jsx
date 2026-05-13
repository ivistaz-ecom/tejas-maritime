import Image from "next/image";
import Link from "next/link";
import ScrollToTopButton from "./ScrollToTopButton";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#e9e4d8] text-[#1c1c5a] relative border-t border-red-500">

      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 py-14 grid md:grid-cols-3 md:gap-10 gap-4 text-center md:text-left">

        {/* LEFT */}
        <div className="flex flex-col items-center md:items-start">

          <Link href="/">
            <Image
              src="/home/footer-logo.svg"
              alt="Tejas Maritime"
              width={120}
              height={120}
              loading="lazy"
              className="mb-4 mx-auto md:mx-0 w-20 h-20 md:w-24 md:h-24"
            />
          </Link>

          <span className="italic mb-4 text-[14px]">
            (Formerly as Macship Design & Construction Pvt. Ltd.)
          </span>

          <span className="text-[14px] leading-relaxed">
            RPSL-MUM-230 / DOE-JUNE 2027
            <br />
            Empanelled with Maharashtra Maritime Board (MMB)
          </span>

        </div>

        {/* CENTER */}
        <div>

          <h3 className="text-xl font-serif md:mb-4 mb-2 font-semibold">
            Useful Links
          </h3>

          <ul className="space-y-1">

            <li><Link href="/">Home</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/about-us">About Us</Link></li>
            <li><Link href="/contact-us">Contact Us</Link></li>

          </ul>

        </div>

        {/* RIGHT */}
        <div>

          <h3 className="text-xl font-serif md:mb-4 mb-2 font-semibold">
            Contact Us
          </h3>

          <ul className="space-y-3 text-sm">

            <li>
              <a
                href="https://www.google.com/maps/place/TEJAS+MARITIME+PVT.+LTD+(Formerly+known+as+Mac+Ship+Design+%26+Construction+Pvt.Ltd)"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  flex items-start justify-center md:justify-start
                  gap-2
                  md:hover:opacity-80
                  md:transition-opacity
                "
              >
                <span className="max-w-xs md:max-w-none">
                  Office No. 19, Ideal Trade Center Sector 11,
                  Plot No. 64, CBD Belapur Navi Mumbai – 400614, India
                </span>
              </a>
            </li>

            <li>
              <a
                href="mailto:info@tejasmaritime.com"
                className="
                  flex items-center justify-center md:justify-start
                  gap-2
                  md:hover:opacity-80
                  md:transition-opacity
                "
              >
                <span>info@tejasmaritime.com</span>
              </a>
            </li>

            <li>
              <a
                href="tel:+912227561423"
                className="
                  flex items-center justify-center md:justify-start
                  gap-2
                  md:hover:opacity-80
                  md:transition-opacity
                "
              >
                <span>022-27561423</span>
              </a>
            </li>

          </ul>

        </div>

      </div>

      {/* Bottom */}
      <div className="bg-[#0b0b3c]">

        <div className="text-white text-[12px] py-4 max-w-7xl mx-auto px-6">
          Copyright © {year} Tejas Maritime.
          All Rights Reserved
        </div>

      </div>

      <ScrollToTopButton />

    </footer>
  );
};

export default Footer;