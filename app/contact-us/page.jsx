import React from "react";
import HeroBanner from "@/components/contact-us/HeroBanner";
import ContactSection from "@/components/contact-us/ContactSection";
import Map from "@/components/contact-us/Map"

/* ================= SEO ================= */
export const metadata = {
  title: "Contact Tejas Maritime | Ship Management & Marine Survey Experts",
  description:
    "Contact Tejas Maritime for maritime technical management, crew management services, naval architecture consultancy, marine surveys, and ship design solutions worldwide.",
  alternates: {
    canonical: "https://www.tejasmaritime.com/contact-us",
  },
  openGraph: {
    title: "Contact Tejas Maritime | Ship Management & Marine Survey Experts",
    description:
      "Contact Tejas Maritime for maritime technical management, crew management services, naval architecture consultancy, marine surveys, and ship design solutions worldwide.",
    url: "https://www.tejasmaritime.com/contact-us",
    images: [
      {
        url: "/og-images/contact_og.png", // 👈 use JPG if possible
        width: 1200,
        height: 630,
        alt: "Tejas Maritime Contact",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/contact/contact-banner.jpg"],
  },
};

/* ================= PAGE ================= */
const ContactUsPage = () => {
  return (
    <div>
      <HeroBanner />
      <ContactSection />
      <Map />
    </div>
  );
};

export default ContactUsPage;