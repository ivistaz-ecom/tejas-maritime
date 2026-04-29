// components/layout/Header.jsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Button from "../ui/Button";

const Header = () => {
  const pathname = usePathname();
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact Us" },
  ];

  return (
    <header className="absolute top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="inline-flex items-center">
          <Image
            src="/tejas-logo.svg"
            alt="Tejas Maritime logo"
            width={70}
            height={64}
            className="h-20 w-auto"
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

        {/* CTA */}
        <Button
          href="/contact"
          label="Request Consultation"
          className="red-gradient-btn text-white px-6 py-3 rounded-full text-sm uppercase"
        />
      </div>
    </header>
  );
};

export default Header;