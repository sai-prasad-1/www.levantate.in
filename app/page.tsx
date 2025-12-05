import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import ScrollText from "./components/sections/ScrollText";
import WhyUs from "./components/sections/WhyUs";
import WhatDo from "./components/sections/WhatDo";
import { SectionDivider } from "./components/ui";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ScrollText />
        <WhyUs />
        <SectionDivider />
        <WhatDo />
      </main>
      <Footer />
    </>
  );
}
