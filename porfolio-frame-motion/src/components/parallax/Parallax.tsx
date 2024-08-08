"use client";
import React from "react";
import Image from "next/image";
import mountains from "../../assets/mountains.png";
import planets from "../../assets/planets.png";
import stars from "../../assets/stars.png";

const Parallax = ({ type }: { type: string }) => {
  const background =
    type === "services"
      ? "bg-gradient-to-b from-[#0c0c1d] to-[#111132]"
      : "bg-gradient-to-b from-[#0c0c1d] to-[#505064]";

  return (
    <div
      className={`${background} relative flex h-full w-full items-center justify-center`}
    >
      <h1 className="text-[100px] font-bold">
        {type === "services" ? "What We Do?" : "What We Did?"}
      </h1>
      <div className="absolute h-full w-full bg-cover bg-bottom">
        <Image src={mountains} alt="Mountains" layout="fill" />
      </div>
      <div className="absolute h-full w-full bg-cover bg-bottom">
        <Image src={planets} alt="planets" layout="fill" />
      </div>
      <div className="absolute h-full w-full bg-cover bg-bottom">
        <Image src={stars} alt="stars" layout="fill" />
      </div>
    </div>
  );
};

export default Parallax;
