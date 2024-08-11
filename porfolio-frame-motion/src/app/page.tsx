import Contact from "@/components/contact/Contact";
import Hero from "@/components/hero/Hero";
import Navbar from "@/components/navbar/Navbar";
import Parallax from "@/components/parallax/Parallax";
import Portfolio from "@/components/portfolio/Portfolio";
import Services from "@/components/services/Services";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <section className="h-screen snap-center">
        <Navbar />
        <Hero />
      </section>
      <section className="h-screen snap-center">
        <Parallax type="services" />
      </section>
      <section className="h-screen snap-center">
        <Services />
      </section>
      <section className="h-screen snap-center">
        <Parallax type="portfolio" />
      </section>
      <Portfolio />
      <section className="h-screen snap-center">
        <Contact />
      </section>
    </div>
  );
}
