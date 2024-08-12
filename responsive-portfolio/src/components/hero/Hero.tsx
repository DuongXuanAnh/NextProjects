import React from "react";
import { HERO } from "../../constants";

const Hero = () => {
  return (
    <section className="flex min-h-screen flex-wrap items-center">
      <div className="w-full md:w-1/2">
        <h2 className="my-8 p-2 text-4xl font-bold md:text-5xl lg:text-[7rem]">
          {HERO.name}
        </h2>
      </div>
    </section>
  );
};

export default Hero;
