"use client";
import React from "react";
import Image from "next/image";
import fbLogo from "../../assets/facebook.png";
import igLogo from "../../assets/instagram.png";
import youtubeLogo from "../../assets/youtube.png";
import dribbleLogo from "../../assets/dribble.png";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div>
      {/* {Sidebar} */}
      <div className="mx-auto flex h-24 max-w-[1366px] items-center justify-between">
        <motion.span
          className="font-bold"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          David Duong
        </motion.span>
        <div className="flex items-center gap-5">
          <a href="#">
            <Image src={fbLogo} alt="facebook logo" className="h-5 w-5" />
          </a>
          <a href="#">
            <Image src={igLogo} alt="instagram logo" className="h-5 w-5" />
          </a>
          <a href="#">
            <Image src={youtubeLogo} alt="youtube logo" className="h-5 w-5" />
          </a>
          <a href="#">
            <Image src={dribbleLogo} alt="dribble logo" className="h-5 w-5" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
