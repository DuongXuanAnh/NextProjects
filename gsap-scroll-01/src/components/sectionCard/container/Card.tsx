"use client";
import { StaticImageData } from "next/image";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { animateCard, animateRotation } from "@/animation/Animation";
import { useGSAP } from "@gsap/react";
type CardProps = {
  image: StaticImageData;
  title: string;
  description: string;
  backgroundColor: string;
};

const Card = ({ image, title, description, backgroundColor }: CardProps) => {
  const rotateRef = useRef(null);

  useGSAP(() => {
    if (rotateRef.current) {
      animateRotation(rotateRef.current);
    }
  });

  useEffect(() => {
    animateCard(".card");
  }, []);
  return (
    <div
      className={`${backgroundColor} card relative h-[450px] transform cursor-pointer rounded-sm transition duration-1000 hover:from-blue-950 hover:to-blue-800`}
    >
      <div className="animate-float">
        <Image
          src={image}
          alt={title}
          ref={rotateRef}
          className="absolute left-0 right-0 mx-auto h-[400px] w-auto"
        />
      </div>
      <div className="absolute bottom-0 p-5">
        <h2 className="text-xl font-bold">{title}</h2>
        <p className="uppercase">{description}</p>
      </div>
    </div>
  );
};

export default Card;
