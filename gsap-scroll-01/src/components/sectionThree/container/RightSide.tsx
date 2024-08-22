"use client";
import React, { useRef } from "react";
import Image from "next/image";
import GoldPlanet from "../../../assets/img/gold3.png";
import { useGSAP } from "@gsap/react";
import { animateRotation } from "@/animation/Animation";
const RightSide = () => {
  const rotateRef = useRef(null);

  useGSAP(() => {
    if (rotateRef.current) {
      animateRotation(rotateRef.current);
    }
  });
  return (
    <div className="w-ful ml-auto h-full" ref={rotateRef}>
      <Image
        src={GoldPlanet}
        alt="gold planet"
        width={450}
        height={450}
        className="animate-float"
      />
    </div>
  );
};

export default RightSide;
