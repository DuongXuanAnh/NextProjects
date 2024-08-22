import React from "react";
import LeftSide from "./container/LeftSide";
import RightSide from "./container/RightSide";

const SectionOne = () => {
  return (
    <div className="container flex h-screen w-full overflow-hidden">
      <LeftSide />
      <RightSide />
    </div>
  );
};

export default SectionOne;
