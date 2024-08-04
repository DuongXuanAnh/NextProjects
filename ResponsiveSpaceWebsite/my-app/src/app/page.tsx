import React from "react";
import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import HeroCard from "@/components/HeroCard/HeroCard";
import Rapidscat from "@/components/Rapidscat/Rapidscat";
import Rapidscat2 from "@/components/Rapidscat/Rapidscat2";

export default function Home() {
  return (
    <div>
      <div className="h-[700px] relative">
        <video
          src="/assets/earth-bg.mp4"
          autoPlay
          loop
          muted
          className="fixed right-0 top-0 h-[700px] w-full object-cover z-[-1]"
        />
        <Navbar />
        <Hero />
      </div>

      {/* { Services Card Section } */}
      <HeroCard />
      <Rapidscat />
      <Rapidscat2 />
    </div>
  );
}
