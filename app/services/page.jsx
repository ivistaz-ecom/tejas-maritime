import HeroBanner from "@/components/services/HeroBanner";
import TabSection from "@/components/services/TabSection";
import CrewSection from "@/components/services/CrewSection";
import NewBuilding from "@/components/services/NewBuilding";

/* ================= SEO ================= */
export const metadata = {
  title: "Ship Technical Management, Marine Surveys & Naval Architecture Services",
  description:
    "Explore Tejas Maritime’s services including ship technical management, crew management, marine survey services, naval architecture consultancy, and ship design & construction solutions.",

  alternates: {
    canonical: "https://www.tejasmaritime.com/services",
  },

  openGraph: {
    title: "Ship Technical Management, Marine Surveys & Naval Architecture Services",
    description:
      "Explore Tejas Maritime’s services including ship technical management, crew management, marine survey services, naval architecture consultancy, and ship design & construction solutions.",
    url: "https://www.tejasmaritime.com/services",
    images: [
      {
        url: "/og-images/services_og.png", // 👉 use JPG
        width: 1200,
        height: 630,
        alt: "Tejas Maritime Services",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Explore Tejas Maritime’s services including ship technical management, crew management, marine survey services, naval architecture consultancy, and ship design & construction solutions.",
    description:
      "Technical management, survey, and maritime consulting services.",
    images: ["/services/services-banner.jpg"],
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