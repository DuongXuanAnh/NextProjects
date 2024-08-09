"use client";
import React, { use, useRef } from "react";
import { motion, useInView } from "framer-motion";

import Text from "./containers/Text";
import Title from "./containers/Title";
import List from "./containers/List";

const variants = {
  initial: { x: -500, y: 100, opacity: 0 },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: { duration: 1, staggerChildren: 0.1 },
  },
};

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="flex h-full flex-col justify-between bg-gradient-to-b from-[#0c0c1d] to-[#111132]"
      variants={variants}
      initial="initial"
      // whileInView="animate"
      ref={ref}
      animate={isInView ? "animate" : "initial"}
    >
      <Text />
      <Title />
      <List />
    </motion.div>
  );
};

export default Services;
