"use client";
import React from "react";
import Image from "next/image";
import heroImg from "../../assets/hero.png";
import scrollImg from "../../assets/scroll.png";

const Hero = () => {
  return (
    <div className="relative h-[calc(100vh-96px)] overflow-hidden bg-gradient-to-b from-[#0c0c1d] to-[#111132]">
      <div className="mx-auto h-full w-[1366px]">
        <div className="flex h-full w-[50%] flex-col justify-center gap-10">
          <h2 className="text-[30px] font-bold uppercase tracking-[10px] text-violet-800">
            David Duong
          </h2>
          <h1 className="text-[88px]">Web developer and UI designer</h1>
          <div>
            <button className="color-white mr-5 cursor-pointer rounded-xl border-[1px] border-white bg-transparent p-5 font-medium">
              See the Latest Works
            </button>
            <button className="color-white cursor-pointer rounded-xl border-[1px] border-white bg-transparent p-5 font-medium">
              Contact Me
            </button>
          </div>
          <Image src={scrollImg} alt="Scroll" />
        </div>
      </div>
      <div className="absolute bottom-[-120px] w-[50%] whitespace-nowrap text-[50vh] font-bold text-[#ffffff09]">
        Writer Content Creator Influencer
      </div>
      <div className="absolute right-0 top-0 h-full">
        <Image src={heroImg} alt="Hero" />
      </div>
    </div>
  );
};

export default Hero;
