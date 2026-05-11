import React from "react";
import HeroBanner from "@/components/about-us/HeroBanner";
import StickyNav from "@/components/about-us/StickyNav";
import AboutSection from "@/components/about-us/AboutSection";
import Leader from "@/components/about-us/Leader";
import StrengthSection from "@/components/about-us/StrengthSection";
import Philosophy from "@/components/about-us/Philosophy";

/* ================= SEO ================= */

export const metadata = {
  title: "About Tejas Maritime | Maritime Consulting & Technical Experts",
  description:
    "Established in 2009, Tejas Maritime delivers maritime consulting, naval architecture services, marine engineering, ship surveys, and technical management for commercial vessels globally.",
  alternates: {
    canonical: "https://www.tejasmaritime.com/about-us",
  },
  openGraph: {
    title: "About Tejas Maritime | Maritime Consulting & Technical Experts",
    description:
      "Established in 2009, Tejas Maritime delivers maritime consulting, naval architecture services, marine engineering, ship surveys, and technical management for commercial vessels globally.",
    url: "https://www.tejasmaritime.com/about-us",
    images: [
      {
        url: "/og-images/about_og.png", // 👈 use PNG if possible
        width: 1200,
        height: 630,
        alt: "Tejas Maritime About",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/about/about-banner.jpg"],
  },
};

/* ================= PAGE ================= */
const AboutUsPage = () => {
  return (
    <div>
      <HeroBanner />
      <StickyNav />
      <AboutSection />
      <Leader />
      <StrengthSection />
      <Philosophy />
    </div>
  );
};

export default AboutUsPage;