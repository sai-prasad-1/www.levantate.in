import Hero from "./components/sections/Hero";
import ScrollText from "./components/sections/ScrollText";
import WhyUs from "./components/sections/WhyUs";
import WhatDo from "./components/sections/WhatDo";
import { SectionDivider } from "./components/ui";
import OurWork from "./components/sections/OurWork";

export default function Home() {
  return (
    <main>
      <Hero />
      <ScrollText />
      <WhyUs />
      <SectionDivider />
      <WhatDo />
      <SectionDivider />
      <OurWork />
    </main>
  );
}
