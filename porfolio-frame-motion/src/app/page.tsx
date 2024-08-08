import Hero from "@/components/hero/Hero";
import Navbar from "@/components/navbar/Navbar";
import Parallax from "@/components/parallax/Parallax";
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
      <section className="h-screen snap-center">Section 3</section>
      <section className="h-screen snap-center">
        <Parallax type="portfolio" />
      </section>
      <section className="h-screen snap-center">Section 5</section>
      <section className="h-screen snap-center">Section 6</section>
      <section className="h-screen snap-center">Section 7</section>
      <section className="h-screen snap-center">Section 8</section>
    </div>
  );
}
