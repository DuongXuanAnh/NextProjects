"use client";
import React from "react";
import Text from "./container/Text";
import Form from "./container/Form";
import { motion } from "framer-motion";
import PhoneSVG from "./container/PhoneSVG";

const variants = {
  initial: { opacity: 0, y: 500 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, staggerChildren: 0.1 },
  },
};

const Contact = () => {
  return (
    <motion.div
      className="mx-auto flex h-full max-w-[1366px] items-center gap-14"
      variants={variants}
      initial="initial"
      animate="animate"
    >
      <Text variants={variants} />
      <div className="relative flex-1">
        <PhoneSVG />
        <Form variants={variants} />
      </div>
    </motion.div>
  );
};

export default Contact;
