"use client";

import { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about-us", label: "About Us" },
  { href: "/contact-us", label: "Contact Us" },
];

const Header = () => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const toggleMenu = useCallback(() => {
    setIsMobileMenuOpen((prev) => !prev);
  }, []);

  return (
    <header className="absolute top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">

        {/* Header Row */}
        <div className="relative flex items-center justify-between md:justify-center min-h-[80px]">

          {/* Logo */}
          <Link
            href="/"
            className="md:absolute md:left-0 flex items-center"
            aria-label="Tejas Maritime Home"
          >
            <Image
              src="/tejas-logo.svg"
              alt="Tejas Maritime logo"
              width={90}
              height={80}
              priority
              className="h-14 sm:h-16 lg:h-20 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-4 lg:gap-4">

            {navLinks.map((link) => {
              const isActive = pathname === link.href;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`
                    wave-link
                    relative
                    overflow-hidden
                    rounded-full

                    w-[120px]
                    h-[40px]

                    flex items-center justify-center

                    text-sm lg:text-base
                    font-medium
                    text-white
                    whitespace-nowrap

                    transition-all duration-300

                    ${
                      isActive
                        ? "wave-active bg-[#100B34]"
                        : "hover:bg-white/10"
                    }
                  `}
                >
                  {link.label}
                </Link>
              );
            })}

          </nav>

          {/* Mobile Toggle Button */}
          <button
            type="button"
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
            aria-expanded={isMobileMenuOpen}
            className="
              md:hidden
              flex items-center justify-center
              rounded-lg
              bg-white
              p-2
              shadow-md
            "
          >
            <svg
              className="h-6 w-6 text-[#120B3F]"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`
            md:hidden
            overflow-hidden
            transition-all
            duration-300
            ${
              isMobileMenuOpen
                ? "max-h-96 opacity-100 mt-4"
                : "max-h-0 opacity-0"
            }
          `}
        >
          <nav className="bg-white rounded-2xl shadow-xl p-4">
            <div className="flex flex-col gap-2">

              {navLinks.map((link) => {
                const isActive = pathname === link.href;

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`
                      rounded-xl
                      px-4
                      py-3
                      text-base
                      font-medium
                      transition-all
                      duration-200

                      ${
                        isActive
                          ? "bg-[#120B3F] text-white"
                          : "text-[#120B3F] hover:bg-gray-100"
                      }
                    `}
                  >
                    {link.label}
                  </Link>
                );
              })}

            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;