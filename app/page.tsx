import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import ScrollText from "./components/sections/ScrollText";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ScrollText />
      </main>
      <Footer />
    </>
  );
}
