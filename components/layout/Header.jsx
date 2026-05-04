// components/layout/Header.jsx
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Button from "../ui/Button";

const Header = () => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/about-us", label: "About Us" },
    { href: "/contact-us", label: "Contact Us" },
  ];
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header className="absolute top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="inline-flex items-center">
          <Image
            src="/tejas-logo.svg"
            alt="Tejas Maritime logo"
            width={70}
            height={64}
            className="h-14 sm:h-20 w-auto"
            priority
          />
        </Link>

        {/* Nav */}
        <nav className="hidden md:flex items-center gap-3 text-white">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                className={
                  isActive
                    ? "bg-white text-black px-5 py-2 rounded-full font-medium transition-colors"
                    : "text-white px-5 py-2 rounded-full hover:bg-white hover:text-black font-medium transition-colors"
                }
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <button
          type="button"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          className="md:hidden inline-flex items-center justify-center rounded-md border border-white/30 bg-black/25 p-2 text-white"
          aria-label="Toggle navigation menu"
          aria-expanded={isMobileMenuOpen}
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

        {/* CTA */}
        <Button
          href="/contact-us"
          label="Request Consultation"
          className="hidden md:inline-flex red-gradient-btn text-white px-6 py-3 rounded-full text-sm uppercase"
        />
      </div>

      {isMobileMenuOpen && (
        <nav className="mt-3 md:hidden rounded-xl border border-white/20 bg-black/65 backdrop-blur-sm p-3">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={
                    isActive
                      ? "bg-white text-black px-4 py-2 rounded-lg font-medium"
                      : "text-white px-4 py-2 rounded-lg hover:bg-white hover:text-black font-medium transition-colors"
                  }
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        </nav>
      )}

      </div>
    </header>
  );
};

export default Header;