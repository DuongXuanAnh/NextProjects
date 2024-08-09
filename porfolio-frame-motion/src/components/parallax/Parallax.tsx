"use client";
import React, { useRef } from "react";
import Image from "next/image";
import mountains from "../../assets/mountains.png";
import planets from "../../assets/planets.png";
import stars from "../../assets/stars.png";
import sun from "../../assets/sun.png";
import { motion, useScroll, useTransform } from "framer-motion";

const Parallax = ({ type }: { type: string }) => {
  const background =
    type === "services"
      ? "bg-gradient-to-b from-[#0c0c1d] to-[#111132]"
      : "bg-gradient-to-b from-[#0c0c1d] to-[#505064]";

  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div
      className={`${background} relative flex h-full w-full items-center justify-center overflow-hidden`}
      ref={ref}
    >
      <motion.h1 className="text-[70px] font-bold" style={{ y: yText }}>
        {type === "services" ? "What We Do?" : "What We Did?"}
      </motion.h1>
      <motion.div className="absolute z-[3] h-full w-full bg-cover bg-bottom">
        <Image src={mountains} alt="Mountains" layout="fill" />
      </motion.div>
      <motion.div
        className="absolute z-[2] h-full w-full bg-cover bg-bottom"
        style={{ y: yBg }}
      >
        {type === "services" ? (
          <Image src={planets} alt="planets" layout="fill" />
        ) : (
          <Image src={sun} alt="stars" layout="fill" />
        )}
      </motion.div>
      <motion.div
        className="absolute z-[1] h-full w-full bg-cover bg-bottom"
        style={{ x: yBg }}
      >
        <Image src={stars} alt="stars" layout="fill" />
      </motion.div>
    </div>
  );
};

export default Parallax;
