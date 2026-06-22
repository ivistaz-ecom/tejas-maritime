// app/page.jsx

import Hero from "@/components/home/Hero";
import TeamSection from "@/components/home/TeamSection";
import Service from "@/components/home/Service";
import StatsSection from "@/components/home/StatsSection";
import OurApproach from "@/components/home/OurApproach";
import OurServices from "@/components/home/OurServices";
import OurClients from "@/components/home/OurClients";
export const metadata = {
  title: "Tejas Maritime | Maritime Technical Management & Crew Management Services",
  description:
    "Tejas Maritime provides maritime technical management, ship crew management, naval architecture services, marine surveys, and ship design & construction solutions for commercial vessels worldwide.",
};

const HomePage = () => {
  return (
    <>
      {/* Hoisted to <head> by React — avoids manual <head> in layout */}
      <link
        rel="preload"
        as="image"
        href="/home/home_mobile_banner.webp"
        media="(max-width: 767px)"
        fetchPriority="high"
      />
      <link
        rel="preload"
        as="image"
        href="/home/home_banner_v2.webp"
        media="(min-width: 768px)"
        fetchPriority="high"
      />
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