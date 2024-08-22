"use client";
import React, { useRef } from "react";
import Star from "@/assets/img/star.png";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import { animateStar, animateParagraph } from "@/animation/Animation";

const Bottom = () => {
  const starRef = useRef(null);
  const paragraphRefs = useRef<HTMLParagraphElement[]>([]);
  useGSAP(() => {
    if (starRef.current) {
      animateStar(starRef.current);
    }
    paragraphRefs.current.forEach((paragraphRef) => {
      if (paragraphRef) {
        animateParagraph(paragraphRef);
      }
    });
  });
  return (
    <div className="flex items-center justify-between">
      <div className="w-3/4">
        <div className="flex items-center gap-2 py-10">
          <Image src={Star} alt="star" height={15} width={15} ref={starRef} />
          <div className="font-bold">Frost Inv.</div>
        </div>
        <div>
          <p
            className="font-semibold"
            ref={(el) => {
              if (el) paragraphRefs.current[0] = el;
            }}
          >
            We are based in Los Angeles, USA. <br />
            our motto is -investing in knowledge <br />
            pays the best dividends.
          </p>
        </div>
      </div>

      <div className="mr-auto">
        <ul className="grid grid-cols-3 gap-y-5 capitalize">
          <li>
            <a href="#">resources</a>
          </li>
          <li>
            <a href="#">company</a>
          </li>
          <li>
            <a href="#">help</a>
          </li>
          <li>
            <a href="#">client</a>
          </li>
          <li>
            <a href="#">about</a>
          </li>
          <li>
            <a href="#">support</a>
          </li>
          <li>
            <a href="#">blog</a>
          </li>
          <li>
            <a href="#">services</a>
          </li>
          <li>
            <a href="#">jobs</a>
          </li>
          <li>
            <a href="#">docs</a>
          </li>
          <li>
            <a href="#">news</a>
          </li>
          <li>
            <a href="#">privacy policy</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Bottom;
