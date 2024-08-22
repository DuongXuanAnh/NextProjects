import React from "react";
import LeftSide from "./container/LeftSide";
import RightSide from "./container/RightSide";

const SectionTwo = () => {
  return (
    <div className="container grid grid-cols-2 items-center overflow-hidden">
      <LeftSide />
      <RightSide />
    </div>
  );
};

export default SectionTwo;
