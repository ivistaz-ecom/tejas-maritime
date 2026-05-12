import HeroBanner from "@/components/services/HeroBanner";
import TabSection from "@/components/services/TabSection";
import CrewSection from "@/components/services/CrewSection";
import NewBuilding from "@/components/services/NewBuilding";

/* ================= SEO ================= */
export const metadata = {
  title:
    "Ship Technical Management, Marine Surveys & Naval Architecture Services",

  description:
    "Explore Tejas Maritime’s services including ship technical management, crew management, marine survey services, naval architecture consultancy, and ship design & construction solutions.",

  alternates: {
    canonical: "https://www.tejasmaritime.com/services",
  },

  openGraph: {
    type: "website", // ✅ Add this
    title:
      "Ship Technical Management, Marine Surveys & Naval Architecture Services",

    description:
      "Explore Tejas Maritime’s services including ship technical management, crew management, marine survey services, naval architecture consultancy, and ship design & construction solutions.",

    url: "https://www.tejasmaritime.com/services",

    siteName: "Tejas Maritime", // ✅ optional but recommended

    images: [
      {
        url: "https://www.tejasmaritime.com/og-images/services_og.png", // ✅ absolute URL
        width: 1200,
        height: 630,
        alt: "Tejas Maritime Services",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Ship Technical Management, Marine Surveys & Naval Architecture Services",

    description:
      "Technical management, survey, and maritime consulting services.",

    images: [
      "https://www.tejasmaritime.com/services/services-banner.jpg",
    ], // ✅ absolute URL
  },
};

/* ================= PAGE ================= */
const ServicesPage = () => {
  return (
    <main>
      <HeroBanner />
      <TabSection />
      <CrewSection />
      <NewBuilding />
    </main>
  );
};

export default ServicesPage;