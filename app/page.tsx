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
      <section id="why">
        <WhyUs />
      </section>
      <SectionDivider />
      <section id="what">
        <WhatDo />
      </section>
        <SectionDivider />
      <section id="work">
        <OurWork />
      </section>
      <section id="contact">
        {/* Contact section - add your contact form/info here */}
      </section>
      </main>
  );
}
