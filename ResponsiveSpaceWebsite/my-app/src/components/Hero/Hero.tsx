"use client";
import React, { useEffect, useState } from "react";

const Hero = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="bg-black/20 h-full text-white relative z-50">
      <div className="h-full flex justify-center items-center p-4">
        <div className="container grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-4 lg:pr-36">
            <h1 data-aos="fade-up" className="text-5xl font-bold uppercase">
              Orbite The Earth
            </h1>
            <p data-aos="fade-up" data-aos-delay="300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              perspiciatis placeat, quo nisi officiis amet! Beatae dicta
              distinctio sed sit earum? Dignissimos commodi ducimus eaque
              quibusdam iusto, exercitationem labore nisi?
            </p>
            <button
              data-aos="fade-up"
              data-aos-delay="500"
              className="primary-button"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
      {/* Surface section */}
      {isClient && (
        <img
          src="/assets/moon-surface-hd.png"
          alt="moon-surface"
          className="absolute right-0 bottom-0 w-full brightness-50 z-10"
        />
      )}
      {/* Bottom gradient section */}
      <div
        className="absolute bottom-0 z-30 
                w-full bg-gradient-to-b 
                from-transparent from-10% 
                to-black to-90% h-[20px] 
                sm:h-[50px] md:[60px]"
      ></div>
    </div>
  );
};

export default Hero;
