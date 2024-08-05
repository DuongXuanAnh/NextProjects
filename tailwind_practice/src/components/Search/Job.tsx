import React, { ReactNode } from "react";

interface JobProps {
  title: string;
  icon: ReactNode;
  bgColor: string;
}

const Job = ({ title, icon, bgColor }: JobProps) => {
  return (
    <div
      className={`flex flex-col text-black bg-[${bgColor}] aspect-square items-center justify-center rounded-lg`}
    >
      {icon}
      <p>{title}</p>
    </div>
  );
};

export default Job;
