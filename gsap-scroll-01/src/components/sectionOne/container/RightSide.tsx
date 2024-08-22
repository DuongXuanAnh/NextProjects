"use client";
import React, { useRef } from "react";
import Image from "next/image";
import GoldPyramid from "../../../assets/img/gold.png";
import { useGSAP } from "@gsap/react";
import { animatePyramid } from "@/animation/Animation";
const RightSide = () => {
  const pyramidRef = useRef(null);

  useGSAP(() => {
    if (pyramidRef.current) {
      animatePyramid(pyramidRef.current);
    }
  });

  return (
    <div className="w-ful mt-[-120px] h-full" ref={pyramidRef}>
      <Image
        src={GoldPyramid}
        alt="gold pyramid"
        className="animate-float drop-shadow-custom"
      />
    </div>
  );
};

export default RightSide;
