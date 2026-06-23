import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
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
        <HowWeWork />
        <WorkCarousel />
        <WhatWeOffer />
        <Pricing />
      </main>
      <Footer />
    </>
  );
}
