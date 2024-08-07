import Hero from "@/components/hero/Hero";
import Navbar from "@/components/navbar/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <section className="h-screen snap-center">
        <Navbar />
        <Hero />
      </section>
      <section className="h-screen snap-center">Section 2</section>
      <section className="h-screen snap-center">Section 3</section>
      <section className="h-screen snap-center">Section 4</section>
      <section className="h-screen snap-center">Section 5</section>
      <section className="h-screen snap-center">Section 6</section>
      <section className="h-screen snap-center">Section 7</section>
      <section className="h-screen snap-center">Section 8</section>
    </div>
  );
}
