"use client";
import React, { useRef } from "react";
import Image from "next/image";
import Star from "@/assets/img/star.png";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { animateStar } from "@/animation/Animation";

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Logo = () => {
  const logoRef = useRef(null);
  const starRef = useRef(null);

  useGSAP(() => {
    gsap.from(logoRef.current, {
      opacity: 0,
      delay: 1,
      x: 20,
    });

    if (starRef.current) {
      animateStar(starRef.current);
    }
  });

  return (
    <div className="flex items-center gap-1">
      <Image src={Star} alt="star" height={15} width={15} ref={starRef} />
      <div ref={logoRef} className="text-lg font-bold">
        Frost Inv.
      </div>
    </div>
  );
};

export default Logo;
