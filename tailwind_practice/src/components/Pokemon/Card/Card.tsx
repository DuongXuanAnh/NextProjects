"use client";
import React, { useState } from "react";
import Back from "./Back";
import Front from "./Front";
import { motion } from "framer-motion";

const Card = ({ card }: { card: CardType }) => {
  const [showFrontSide, setShowFrontSide] = useState<boolean>(true);

  const CardSideChange = () => {
    setShowFrontSide(!showFrontSide);
  };

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
                rotateY: 180,
              }
            : {}
        }
        transition={{ duration: 1 }}
        onClick={() => {
          CardSideChange();
          handleClick();
        }}
        className="mx-auto mb-2 h-[400px] w-[60%] rounded-md bg-slate-600 md:h-[300px] md:w-full"
      >
        {showFrontSide ? <Front card={card} /> : <Back />}
      </motion.div>
    </div>
  );
};

export default Card;
