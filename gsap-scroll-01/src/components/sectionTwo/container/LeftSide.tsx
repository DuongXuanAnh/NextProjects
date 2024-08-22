"use client";
import React, { useRef } from "react";
import Image from "next/image";
import GoldHand from "../../../assets/img/gold2.png";
import { useGSAP } from "@gsap/react";
import { animateHand } from "@/animation/Animation";

const LeftSide = () => {
  const handRef = useRef(null);

  useGSAP(() => {
    if (handRef.current) {
      animateHand(handRef.current);
    }
  });

  return (
    <div className="w-ful h-full" ref={handRef}>
      <Image src={GoldHand} alt="gold hand" className="animate-float" />
    </div>
  );
};

export default LeftSide;
