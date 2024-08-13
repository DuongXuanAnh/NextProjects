"use client";
import React from "react";
import { EXPERIENCES } from "@/constants";
import { motion } from "framer-motion";

const WorkExperience = () => {
  return (
    <section className="pt-20" id="work">
      <motion.h2
        className="text-center text-4xl font-semibold tracking-tighter"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Work Experience
      </motion.h2>
      <motion.div
        className="space-y-8 p-10"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        {EXPERIENCES.map((experience, index) => (
          <motion.div
            key={index}
            className="rounded-xl border border-stone-50/30 bg-white/10 p-4"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: index * 0.2 }}
          >
            <h3 className="text-2xl font-bold">{experience.title}</h3>
            <p className="my-1 text-xl">{experience.company}</p>
            <p className="text-sm text-stone-300">{experience.duration}</p>
            <p className="mt-2 text-base">{experience.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default WorkExperience;
