// components/layout/Header.jsx
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
    <header className="absolute md:top-2 top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">

        {/* Main Header */}
        <div className="relative flex items-center justify-center min-h-[72px]">

          {/* Logo */}
          <Link
            href="/"
            className="absolute left-0 inline-flex items-center"
            aria-label="Tejas Maritime Home"
          >
            <Image
              src="/tejas-logo.svg"
              alt="Tejas Maritime logo"
              width={70}
              height={64}
              priority
              className="h-14 sm:h-20 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-3 text-white">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`
                    wave-link
                    w-[15vh]
                    relative
                    text-center
                    overflow-hidden
                    rounded-full
                    px-5 py-2
                    text-base
                    font-medium
                    text-white
                    transition-colors
                    duration-300
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

          {/* Mobile Toggle */}
          <button
            type="button"
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
            aria-expanded={isMobileMenuOpen}
            className="
              absolute right-0 md:hidden
              inline-flex items-center justify-center
              rounded-lg
              border border-white/20
              bg-black/20
              p-2
              text-white
              transition-colors
              duration-200
              hover:bg-black/30
            "
          >
            <svg
              className="h-5 w-5"
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
                ? "max-h-96 opacity-100 mt-5"
                : "max-h-0 opacity-0"
            }
          `}
        >
          <nav
            className="
              rounded-2xl
              border border-white/10
              bg-black/25
              p-3
            "
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={
                      isActive
                        ? "bg-[#120B3F] text-white px-4 py-3 rounded-lg text-base font-medium"
                        : "text-white px-4 py-3 rounded-lg text-base font-medium hover:bg-white/10 transition-colors duration-200"
                    }
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