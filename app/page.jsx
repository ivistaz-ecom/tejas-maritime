// app/page.jsx

import Hero from "@/components/home/Hero";
import TeamSection from "@/components/home/TeamSection";
import Service from "@/components/home/Service";
import StatsSection from "@/components/home/StatsSection";
import OurApproach from "@/components/home/OurApproach";
import OurServices from "@/components/home/OurServices";
import OurClients from "@/components/home/OurClients";
export const metadata = {
  title: "Tejas Maritime | Maritime Services",
  description:
    "Tejas Maritime provides expert maritime services including shipping, logistics, and offshore solutions.",
};

const HomePage = () => {
  return (
    <>
      <Hero />
      <Service />
      <TeamSection />
      <StatsSection />
      <OurApproach />
      <OurServices />
      <OurClients />
    </>
  );
};

export default HomePage;