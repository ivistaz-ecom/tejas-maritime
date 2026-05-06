import React from "react";
import HeroBanner from "@/components/contact-us/HeroBanner";
import ContactSection from "@/components/contact-us/ContactSection";
import Map from "@/components/contact-us/Map"

/* ================= SEO ================= */
export const metadata = {
  title: "Contact Us",
  description:
    "Contact Tejas Maritime for marine consulting, technical management, and survey services.",
  alternates: {
    canonical: "https://www.tejasmaritime.com/contact-us",
  },
  openGraph: {
    title: "Contact Tejas Maritime",
    description:
      "Reach out to our experts for maritime consulting services.",
    url: "https://www.tejasmaritime.com/contact-us",
    images: [
      {
        url: "/contact/contact-banner.jpg", // 👈 use JPG if possible
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