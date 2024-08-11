import React from "react";
import { motion } from "framer-motion";

const Text = ({ variants }: { variants: any }) => {
  return (
    <motion.div className="flex flex-1 flex-col gap-10" variants={variants}>
      <motion.h1
        className="text-[96px] font-bold leading-[88px]"
        variants={variants}
      >
        Let’s work together
      </motion.h1>
      <motion.div variants={variants}>
        <h2 className="text-2xl font-bold">Mail</h2>
        <span className="font-semibold">hello@react.dev</span>
      </motion.div>
      <motion.div variants={variants}>
        <h2 className="text-2xl font-bold">Address</h2>
        <span className="font-semibold">Hello street New York</span>
      </motion.div>
      <motion.div variants={variants}>
        <h2 className="text-2xl font-bold">Phone</h2>
        <span className="font-semibold">+420 777 555 666</span>
      </motion.div>
    </motion.div>
  );
};

export default Text;
