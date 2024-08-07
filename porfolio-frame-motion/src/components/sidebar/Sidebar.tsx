import React from "react";
import Links from "./links/Links";
import ToggleButton from "./toggleButton/ToggleButton";

const Sidebar = () => {
  return (
    <div>
      <div>
        <Links />
      </div>
      <ToggleButton />
    </div>
  );
};

export default Sidebar;
