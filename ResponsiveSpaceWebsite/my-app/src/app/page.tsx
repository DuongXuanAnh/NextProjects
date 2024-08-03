import React from "react";
import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";

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
    </div>
  );
}
