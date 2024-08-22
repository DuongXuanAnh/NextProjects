"use client";
import React, { useEffect } from "react";
import { animateMenuItems } from "@/animation/Animation";

const MenuItems = () => {
  useEffect(() => {
    const menu_items = document.querySelector(".menu-items");
    animateMenuItems(menu_items);
  }, []);
  return (
    <ul className="menu-items flex items-center gap-8 font-semibold">
      <li className="transform transition duration-500 hover:scale-110 hover:underline">
        <a href="#">About</a>
      </li>
      <li className="transform transition duration-500 hover:scale-110 hover:underline">
        <a href="#">Services</a>
      </li>
      <li className="transform transition duration-500 hover:scale-110 hover:underline">
        <a href="#">News</a>
      </li>
      <li className="transform transition duration-500 hover:scale-110 hover:underline">
        <a href="#">Contact</a>
      </li>
    </ul>
  );
};

export default MenuItems;
