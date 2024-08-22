import React from "react";
import Top from "./components/Top";
import Bottom from "./components/Bottom";
import CopyRight from "./components/CopyRight";

const Footer = () => {
  return (
    <div className="container flex h-screen flex-col justify-between overflow-hidden">
      <Top />
      <Bottom />
      <CopyRight />
    </div>
  );
};

export default Footer;
