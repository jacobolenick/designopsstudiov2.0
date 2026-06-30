import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { ClientLogos } from "./components/ClientLogos";
import { HowWeWork } from "./components/HowWeWork";
import { WorkCarousel } from "./components/WorkCarousel";
import { WhatWeOffer } from "./components/WhatWeOffer";
import { Pricing } from "./components/Pricing";
import { AboutFounder } from "./components/AboutFounder";
import { Footer } from "./components/Footer";
import { SectionDivider } from "./components/SectionDivider";

export default function App() {
  return (
    <>
      <Nav />
      <main className="relative isolate bg-surface">
        <div className="relative z-[1]">
          <Hero />
          <SectionDivider label="Clients" />
          <ClientLogos />
          <SectionDivider label="Work" />
          <WorkCarousel />
          <SectionDivider label="Approach" />
          <HowWeWork />
          <SectionDivider label="Services" />
          <WhatWeOffer />
          <SectionDivider label="Pricing" />
          <Pricing />
          <SectionDivider label="About" />
          <AboutFounder />
        </div>
      </main>
      <Footer />
    </>
  );
}
