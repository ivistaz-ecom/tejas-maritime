"use client";

import Image from "next/image";
import Link from "next/link";
import { FiMapPin, FiMail, FiPhone, FiArrowUp } from "react-icons/fi";

const Footer = () => {
  const year = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-[#e9e4d8] text-[#1c1c5a] relative border-t border-red-500">

      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 py-14 grid md:grid-cols-3 gap-10">

        {/* LEFT */}
        <div>
          <Image
            src="/home/footer-logo.svg" // update your logo path
            alt="Tejas Maritime"
            width={120}
            height={120}
            className="mb-4"
          />

          <span className="italic mb-4 text-[14px]">
            (Formerly as Macship Design & Construction Pvt. Ltd.)
          </span>

          <span className="text-[14px] leading-relaxed">
            RPSL-MUM-230 / DOE-JUNE 2027 <br />
            Empanelled with Maharashtra Maritime Board (MMB)
          </span>
        </div>

        {/* CENTER */}
        <div>
          <h3 className="text-xl font-serif mb-4 font-semibold">Useful Links</h3>

          <ul className="space-y-2">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/contact">Contact Us</Link></li>
          </ul>
        </div>

        {/* RIGHT */}
        <div>
          <h3 className="text-xl font-serif mb-4 font-semibold">Contact Us</h3>

          <ul className="space-y-3 text-sm">

            <li className="flex items-start gap-2">
              <FiMapPin className="mt-1" />
              <span>
                Office No. 19, Ideal Trade Center Sector 11,
                Plot No. 64, CBD Belapur Navi Mumbai – 400614, India
              </span>
            </li>

            <li className="flex items-center gap-2">
              <FiMail />
              <span>info@tejasmaritime.com</span>
            </li>

            <li className="flex items-center gap-2">
              <FiPhone />
              <span>022-27561423</span>
            </li>

          </ul>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="bg-[#0b0b3c] text-white text-sm text-center py-4">
        Copyright © {year} Tejas Maritime. All Rights Reserved
      </div>

      {/* Scroll To Top */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 bg-black text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition"
      >
        <FiArrowUp />
      </button>

    </footer>
  );
};

export default Footer;