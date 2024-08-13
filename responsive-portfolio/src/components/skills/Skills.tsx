"use client";
import React from "react";
import { SKILLS } from "../../constants";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, staggerChildren: 0.5 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

const Skills = () => {
  return (
    <div className="container mx-auto" id="skills">
      <motion.h2
        className="mb-12 mt-20 text-center text-4xl font-semibold"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Skills
      </motion.h2>
      <motion.div
        className="mx-2 flex flex-col rounded-3xl border border-stone-50/30 px-4 py-2 lg:px-20"
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
        viewport={{ once: true }}
      >
        {SKILLS.map((skill, index) => (
          <motion.div
            variants={itemVariants}
            key={index}
            className={`flex items-center justify-between py-6 ${index !== SKILLS.length - 1 ? "border-stone-50/30" : ""}`}
          >
            <div className="flex items-center">
              {skill.icon}
              <h3 className="px-6 text-lg lg:text-2xl">{skill.name}</h3>
            </div>
            <div className="text-md font-semibold lg:text-xl">
              <span>{skill.experience}</span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Skills;
