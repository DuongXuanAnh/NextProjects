import React from "react";
import Top from "./container/Top";
import Bottom from "./container/Bottom";

const SectionCard = () => {
  return (
    <div className="container flex h-screen flex-col justify-center overflow-hidden">
      <Top />
      <Bottom />
    </div>
  );
};

export default SectionCard;
