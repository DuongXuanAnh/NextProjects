"use client";
import React, { useRef } from "react";
import Image from "next/image";
import Star from "../../../assets/img/star.png";
import { useGSAP } from "@gsap/react";
import {
  animateStar,
  animateTitles,
  animateParagraph,
  animateButton,
  animateLine,
} from "@/animation/Animation";

const RightSide = () => {
  const starRef = useRef(null);
  const titleRef = useRef(null);

  const paragraphRefs = useRef<HTMLParagraphElement[]>([]);
  const buttonRef = useRef(null);

  const lineRef = useRef(null);

  useGSAP(() => {
    if (starRef.current) {
      animateStar(starRef.current);
    }

    if (titleRef.current) {
      animateTitles(titleRef.current);
    }

    paragraphRefs.current.forEach((paragraphRef) => {
      if (paragraphRef) {
        animateParagraph(paragraphRef);
      }
    });

    if (buttonRef.current) {
      animateButton(buttonRef.current);
    }

    if (lineRef.current) {
      animateLine(lineRef.current);
    }
  });
  return (
    <div className="w-full">
      <div className="ml-auto w-[60%]">
        <div ref={titleRef}>
          <span className="flex items-center justify-between">
            <h1 className="flex flex-col text-4xl font-bold capitalize">
              <span>Investing for </span>
              <span>the long term</span>
            </h1>
            <div>
              <Image
                src={Star}
                alt="star"
                width={50}
                height={50}
                ref={starRef}
              />
            </div>
          </span>

          <h2 className="text-xl font-bold text-gray-500">
            Reasons for investing
          </h2>
        </div>
        <p
          className="my-12"
          ref={(el) => {
            if (el) paragraphRefs.current[0] = el;
          }}
        >
          People often choose gold bullion as an long term investment. Silver
          generally follows gold in terms of relative values, and in the past
          decade, gold hasdemonstrated a steady overall annual profit.
        </p>
        <hr ref={lineRef} />
        <p
          className="my-10"
          ref={(el) => {
            if (el) paragraphRefs.current[1] = el;
          }}
        >
          They can be traded in the short and medium term, gold & silver prices
          move in the markets.
        </p>
        <button
          ref={buttonRef}
          className="flex items-center gap-2 rounded-md bg-gradient-to-r from-blue-950 to-blue-500 p-3 px-8 text-sm font-semibold uppercase"
        >
          see directions
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

export default RightSide;
