"use client";
import React, { useRef } from "react";
import {
  animateStar,
  animateTitles,
  animateParagraph,
  animateLine,
} from "@/animation/Animation";
import { useGSAP } from "@gsap/react";

const LeftSide = () => {
  const titleRef = useRef(null);

  const paragraphRefs = useRef<HTMLParagraphElement[]>([]);

  const lineRefs = useRef<HTMLHRElement[]>([]);

  useGSAP(() => {
    if (titleRef.current) {
      animateTitles(titleRef.current);
    }

    paragraphRefs.current.forEach((paragraphRef) => {
      if (paragraphRef) {
        animateParagraph(paragraphRef);
      }
    });

    lineRefs.current.forEach((lineRef) => {
      if (lineRef) {
        animateLine(lineRef);
      }
    });
  });

  return (
    <div className="items-center">
      <div>
        <div ref={titleRef}>
          <h1 className="flex flex-col text-4xl font-bold capitalize">
            <span>Timing og gold &</span>
            <span>silver prices</span>
          </h1>
          <h2 className="text-xl font-bold">An unstoppable duo</h2>
        </div>

        <div className="pb-10 pt-5 text-blue-700">
          <p
            className="text-xl font-bold"
            ref={(el) => {
              if (el) paragraphRefs.current[0] = el;
            }}
          >
            Gold
          </p>
          <p
            className="w-[60%] font-semibold"
            ref={(el) => {
              if (el) paragraphRefs.current[1] = el;
            }}
          >
            Gold is seen as a hedge against inflation and a store of value
            through thick and through thin.
          </p>
        </div>

        <hr
          ref={(el) => {
            if (el) lineRefs.current[0] = el;
          }}
          className="border-t-2 border-blue-700"
        />

        <div className="pb-10 pt-5">
          <p
            className="text-xl font-bold"
            ref={(el) => {
              if (el) paragraphRefs.current[2] = el;
            }}
          >
            Silver
          </p>
          <p
            className="w-[60%] font-semibold"
            ref={(el) => {
              if (el) paragraphRefs.current[3] = el;
            }}
          >
            Silver prices are much more `volatile` than those of gold in the
            short term.
          </p>
        </div>

        <hr
          ref={(el) => {
            if (el) lineRefs.current[1] = el;
          }}
          className="border-t-2"
        />
      </div>
    </div>
  );
};

export default LeftSide;
