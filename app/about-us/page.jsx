import React from "react";
import HeroBanner from "@/components/about-us/HeroBanner";
import StickyNav from "@/components/about-us/StickyNav";
import AboutSection from "@/components/about-us/AboutSection";
import Leader from "@/components/about-us/Leader";
import StrengthSection from "@/components/about-us/StrengthSection";
import Philosophy from "@/components/about-us/Philosophy";

/* ================= SEO ================= */

export const metadata = {
  title: "About Us",
  description:
    "Learn about Tejas Maritime, our leadership, expertise, and commitment to delivering precision maritime solutions worldwide.",
  alternates: {
    canonical: "https://www.tejasmaritime.com/about-us",
  },
  openGraph: {
    title: "About Tejas Maritime",
    description:
      "Discover our journey, leadership, and the strength behind our maritime expertise.",
    url: "https://www.tejasmaritime.com/about-us",
    images: [
      {
        url: "/about/about-banner.jpg", // 👈 use JPG if possible
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