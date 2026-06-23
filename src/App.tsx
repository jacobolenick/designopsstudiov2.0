import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { ClientLogos } from "./components/ClientLogos";
import { HowWeWork } from "./components/HowWeWork";
import { WorkCarousel } from "./components/WorkCarousel";
import { WhatWeOffer } from "./components/WhatWeOffer";
import { Pricing } from "./components/Pricing";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <ClientLogos />
        <HowWeWork />
        <WorkCarousel />
        <WhatWeOffer />
        <Pricing />
      </main>
      <Footer />
    </>
  );
}
