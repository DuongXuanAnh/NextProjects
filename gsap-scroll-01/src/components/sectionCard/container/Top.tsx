"use client";
import React, { useRef } from "react";
import {
  animateTitles,
  animateParagraph,
  animateLine,
} from "@/animation/Animation";
import { useGSAP } from "@gsap/react";
const Top = () => {
  const titleRef = useRef(null);
  const paragraphRef = useRef(null);
  const lineRef = useRef(null);

  useGSAP(() => {
    if (titleRef.current) {
      animateTitles(titleRef.current);
    }

    if (paragraphRef.current) {
      animateParagraph(paragraphRef.current);
    }

    if (lineRef.current) {
      animateLine(lineRef.current);
    }
  });
  return (
    <div className="flex items-center justify-between">
      <div ref={titleRef}>
        <h1 className="text-4xl font-bold">3 direction</h1>
        <h2 className="text-xl font-bold text-gray-500">Choose your gold</h2>
      </div>

      <div className="w-[33%] text-justify">
        <p ref={paragraphRef} className="pb-6">
          The fineness of gold depends on the amount of ligature - additional
          metals. For example, yellow gold 585* is a metal with the addition of
          28% silver and 113.5% copper.
        </p>

        <hr ref={lineRef} className="border-1" />
      </div>
    </div>
  );
};

export default Top;
