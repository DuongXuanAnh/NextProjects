"use client";
import React from "react";
import Image from "next/image";
import heroImg from "../../assets/hero.png";
import scrollImg from "../../assets/scroll.png";
import { motion, stagger } from "framer-motion";

const textVariant = {
  initial: {
    x: -500,
    opacity: 0,
  },

  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1, // 0.1s delay between children
    },
  },
};

const Hero = () => {
  return (
    <div className="relative h-[calc(100vh-96px)] overflow-hidden bg-gradient-to-b from-[#0c0c1d] to-[#111132]">
      <div className="mx-auto h-full w-[1366px]">
        <motion.div
          className="flex h-full w-[50%] flex-col justify-center gap-10"
          variants={textVariant}
          initial="initial"
          animate="animate"
        >
          <motion.h2
            className="text-[30px] font-bold uppercase tracking-[10px] text-violet-800"
            variants={textVariant}
          >
            David Duong
          </motion.h2>
          <motion.h1 className="text-[88px]" variants={textVariant}>
            Web developer and UI designer
          </motion.h1>
          <motion.div variants={textVariant}>
            <motion.button
              className="color-white mr-5 cursor-pointer rounded-xl border-[1px] border-white bg-transparent p-5 font-medium"
              variants={textVariant}
            >
              See the Latest Works
            </motion.button>
            <motion.button
              className="color-white cursor-pointer rounded-xl border-[1px] border-white bg-transparent p-5 font-medium"
              variants={textVariant}
            >
              Contact Me
            </motion.button>
          </motion.div>
          <Image src={scrollImg} alt="Scroll" />
        </motion.div>
      </div>
      <div className="absolute bottom-[-120px] w-[50%] whitespace-nowrap text-[50vh] font-bold text-[#ffffff09]">
        Writer Content Creator Influencer
      </div>
      <div className="absolute right-0 top-0 h-full">
        <Image src={heroImg} alt="Hero" />
      </div>
    </div>
  );
};

export default Hero;
