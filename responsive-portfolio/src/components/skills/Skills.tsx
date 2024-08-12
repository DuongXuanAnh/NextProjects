import React from "react";
import { SKILLS } from "../../constants";

const Skills = () => {
  return (
    <div className="container mx-auto" id="skills">
      <h2 className="mb-12 mt-20 text-center text-4xl font-semibold">Skills</h2>
      <div className="mx-2 flex flex-col rounded-3xl border border-stone-50/30 px-4 py-2 lg:px-20">
        {SKILLS.map((skill, index) => {
          return (
            <div
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
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
