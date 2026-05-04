// app/services/page.jsx

import HeroBanner from "@/components/services/HeroBanner";
import TabSection from "@/components/services/TabSection";
import CrewSection from "@/components/services/CrewSection";
import NewBuilding from "@/components/services/NewBuilding";
export const metadata = {
  title: "Services | Tejas Maritime",
  description:
    "Explore Tejas Maritime services including technical management, survey & project services, and specialised maritime capabilities.",
};

const ServicesPage = () => {
  return (
    <main>

      {/* HERO */}
      <HeroBanner />
      {/* TABS + CONTENT */}
      <TabSection />
      <CrewSection />
      <NewBuilding />

    </main>
  );
};

export default ServicesPage;