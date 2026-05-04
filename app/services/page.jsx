import HeroBanner from "@/components/services/HeroBanner";
import TabSection from "@/components/services/TabSection";
import CrewSection from "@/components/services/CrewSection";
import NewBuilding from "@/components/services/NewBuilding";

/* ================= SEO ================= */
export const metadata = {
  title: "Services",
  description:
    "Explore Tejas Maritime services including technical management, crew management, ship design, survey & project services, and specialised maritime capabilities.",

  alternates: {
    canonical: "https://www.tejasmaritime.com/services",
  },

  openGraph: {
    title: "Maritime Services | Tejas Maritime",
    description:
      "Comprehensive maritime services including technical management, surveys, ship design, and specialised consulting.",
    url: "https://www.tejasmaritime.com/services",
    images: [
      {
        url: "/services/services-banner.jpg", // 👉 use JPG
        width: 1200,
        height: 630,
        alt: "Tejas Maritime Services",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Tejas Maritime Services",
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