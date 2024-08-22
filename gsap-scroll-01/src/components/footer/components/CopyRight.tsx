"use client";
import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { animateParagraph } from "@/animation/Animation";
const CopyRight = () => {
  const paragraphRefs = useRef<HTMLParagraphElement[]>([]);

  useGSAP(() => {
    paragraphRefs.current.forEach((paragraphRef) => {
      if (paragraphRef) {
        animateParagraph(paragraphRef);
      }
    });
  });
  return (
    <div className="flex items-center justify-between pb-8 font-bold">
      <p
        className="w-3/4"
        ref={(el) => {
          if (el) paragraphRefs.current[0] = el;
        }}
      >
        {" "}
        &copy; copyright 2022 . All rights reserved
      </p>
      <p
        className="mr-auto"
        ref={(el) => {
          if (el) paragraphRefs.current[1] = el;
        }}
      >
        Term and Conditions
      </p>
    </div>
  );
};

export default CopyRight;
