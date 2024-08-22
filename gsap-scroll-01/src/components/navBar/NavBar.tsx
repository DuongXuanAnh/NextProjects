import React from "react";
import Logo from "./logo/Logo";
import MenuItems from "./menuItems/MenuItems";

const NavBar = () => {
  return (
    <div className="flex items-center justify-between p-8 px-20">
      <Logo />
      <MenuItems />
    </div>
  );
};

export default NavBar;
