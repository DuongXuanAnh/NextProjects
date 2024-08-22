"use client";
import React, { useRef } from "react";
import Image from "next/image";
import Star from "@/assets/img/star.png";
import {
  animateStar,
  animateTitles,
  animateParagraph,
} from "@/animation/Animation";
import { useGSAP } from "@gsap/react";

const Top = () => {
  const starRef = useRef(null);
  const titleRef = useRef(null);
  const paragraphRef = useRef(null);
  useGSAP(() => {
    if (starRef.current) {
      animateStar(starRef.current);
    }

    if (titleRef.current) {
      animateTitles(titleRef.current);
    }

    if (paragraphRef.current) {
      animateParagraph(paragraphRef.current);
    }
  });
  return (
    <div className="flex justify-between border-b-2 py-20 font-bold">
      <div className="flex w-1/2 items-center gap-16">
        <div ref={titleRef}>
          <h1 className="text-4xl font-bold capitalize">stay up-to date</h1>
          <h2 className="text-xl font-bold text-gray-500">
            With everything precious metals
          </h2>
        </div>
        <div>
          <Image src={Star} alt="star" height={35} width={35} ref={starRef} />
        </div>
      </div>
      <div className="w-1/2">
        <p className="ml-auto w-[320px] text-xl" ref={paragraphRef}>
          Replenish <span className="text-blue-600">your portfolio </span>
          with gold and silver
          <span className="text-blue-600"> to diversity </span>
          your investment portfolio.
        </p>
      </div>
    </div>
  );
};

export default Top;
