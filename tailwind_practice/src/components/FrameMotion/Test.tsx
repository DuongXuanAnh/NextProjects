"use client";
import React, { useState } from "react";
import { scroll, motion } from "framer-motion";

const Test = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };
  return (
    <div>
      <motion.div
        animate={
          isClicked
            ? {
                rotateY: 160,
              }
            : {}
        }
        transition={{ duration: 1 }}
        className="h-32 w-32 bg-black"
        onClick={handleClick}
      ></motion.div>
    </div>
  );
};

export default Test;
