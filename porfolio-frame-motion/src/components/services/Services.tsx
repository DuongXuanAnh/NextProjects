"use client";
import React from "react";
import { motion } from "framer-motion";

import Text from "./containers/Text";
import Title from "./containers/Title";
import List from "./containers/List";

const Services = () => {
  return (
    <motion.div className="flex h-full flex-col justify-between bg-gradient-to-b from-[#0c0c1d] to-[#111132]">
      <Text />
      <Title />
      <List />
    </motion.div>
  );
};

export default Services;
