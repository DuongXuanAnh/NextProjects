"use client";
import React, { useRef } from "react";
import Image from "next/image";
import Star from "../../../assets/img/star.png";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import {
  animateStar,
  animateTitles,
  animateParagraph,
  animateButton,
} from "@/animation/Animation";

const LeftSide = () => {
  const starRef = useRef(null);

  const titleRef = useRef(null);

  const paragraphRef = useRef(null);

  const buttonRef = useRef(null);

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

    if (buttonRef.current) {
      animateButton(buttonRef.current);
    }
  });

  return (
    <div className="mt-[-120px] flex w-full flex-col justify-center">
      <div className="flex w-[60%] flex-col items-start">
        <div>
          <h1 className="flex flex-col text-4xl font-bold" ref={titleRef}>
            <span className="flex items-center gap-2">
              <span>Get Gold &</span>
              <Image
                src={Star}
                alt="star"
                width={30}
                height={30}
                ref={starRef}
              />
            </span>
            <span>Silver Deliverd</span>
            <span> To Your Door</span>
          </h1>
        </div>
        <div className="py-10">
          <p ref={paragraphRef}>
            Gold and silver have intrinsic value and adds diversification to
            your portfolio. We help investors narrow thier decision down to
            either buying dold or silver bullion bars or coins
          </p>
        </div>

        <button
          ref={buttonRef}
          className="flex items-center gap-2 rounded-md bg-gradient-to-r from-blue-950 to-blue-500 p-3 px-8 text-sm font-semibold transition-all duration-1000 ease-in-out hover:from-blue-950 hover:to-blue-800"
        >
          KNOW MORE
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default LeftSide;
