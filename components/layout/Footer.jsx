"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { FiMapPin, FiMail, FiPhone, FiArrowUp } from "react-icons/fi";

const SCROLL_TOP_THRESHOLD = 80;

const Footer = () => {
  const year = new Date().getFullYear();
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShowScrollTop(window.scrollY > SCROLL_TOP_THRESHOLD);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-[#e9e4d8] text-[#1c1c5a] relative border-t border-red-500">

      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 py-14 grid md:grid-cols-3 md:gap-10 gap-4 text-center md:text-left">

        {/* LEFT */}
        <div className="flex flex-col items-center md:items-start">
          <Link href="/">
            <Image
              src="/home/footer-logo.svg" // update your logo path
              alt="Tejas Maritime"
              width={120}
              height={120}
              className="mb-4 mx-auto md:mx-0 w-20 h-20 md:w-24 md:h-24"
            />
         </Link>
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
          <h3 className="text-xl font-serif md:mb-4 mb-2 font-semibold">Useful Links</h3>

          <ul className="space-y-1">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/about-us">About Us</Link></li>
            <li><Link href="/contact-us">Contact Us</Link></li>
          </ul>
        </div>

        {/* RIGHT */}
        <div>
          <h3 className="text-xl font-serif md:mb-4 mb-2 font-semibold">Contact Us</h3>

          <ul className="space-y-3 text-sm">

            <li>
              <a
                href="https://www.google.com/maps/place/TEJAS+MARITIME+PVT.+LTD+(Formerly+known+as+Mac+Ship+Design+%26+Construction+Pvt.Ltd)/@19.0150708,73.0385057,17z/data=!3m1!4b1!4m6!3m5!1s0x3be7c15e35c8833f:0xcf140c99d7ca0e97!8m2!3d19.0150708!4d73.0385057!16s%2Fg%2F1pp2vbkym?entry=tts&g_ep=EgoyMDI2MDQxNS4wIPu8ASoASAFQAw%3D%3D&skid=7c8f08c9-954f-4053-a1ab-8f3c5f8a29ed"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start justify-center md:justify-start gap-2 hover:opacity-80 transition"
              >
                <FiMapPin className="mt-0.5 h-5 w-5 shrink-0" />
                <span className="max-w-xs md:max-w-none">
                  Office No. 19, Ideal Trade Center Sector 11,
                  Plot No. 64, CBD Belapur Navi Mumbai – 400614, India
                </span>
              </a>
            </li>

            <li>
              <a
                href="mailto:info@tejasmaritime.com"
                className="flex items-center justify-center md:justify-start gap-2 hover:opacity-80 transition"
              >
                <FiMail className="h-5 w-5 shrink-0" />
                <span>info@tejasmaritime.com</span>
              </a>
            </li>

            <li>
              <a
                href="tel:+912227561423"
                className="flex items-center justify-center md:justify-start gap-2 hover:opacity-80 transition"
              >
                <FiPhone className="h-5 w-5 shrink-0" />
                <span>022-27561423</span>
              </a>
            </li>

          </ul>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="bg-[#0b0b3c]"> 
      <div className=" text-white text-[12px] py-4 max-w-7xl mx-auto px-6">
        Copyright © {year} Tejas Maritime. All Rights Reserved
      </div>
      </div>

      {/* Scroll To Top — hidden until user scrolls past threshold */}
      {showScrollTop && (
        <button
          type="button"
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 red-gradient text-white w-11 h-11 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition z-50"
          aria-label="Scroll to top"
        >
          <FiArrowUp className="text-white text-lg" />
        </button>
      )}

    </footer>
  );
};

export default Footer;