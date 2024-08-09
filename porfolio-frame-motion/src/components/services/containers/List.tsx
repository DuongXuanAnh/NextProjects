import React from "react";
import { motion } from "framer-motion";

const List = () => {
  return (
    <div className="mx-auto flex max-w-[1366px]">
      <motion.div
        className="flex flex-col justify-between border-[1px] border-solid border-gray-400 p-12"
        whileHover={{
          background: "rgba(211, 211, 211, 1)",
          color: "black",
          transition: { duration: 0.5 },
        }}
      >
        <h2 className="text-2xl font-bold">Branding</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
          libero enim nisi aliquam consectetur expedita magni eius ex corrupti
          animi! Ad nam pariatur assumenda quae mollitia libero repellat
          explicabo maiores?
        </p>
        <button className="cursor-pointer border-none bg-orange-500 p-2">
          Go
        </button>
      </motion.div>
      <motion.div
        className="flex flex-col justify-between border-[1px] border-solid border-gray-400 p-12"
        whileHover={{
          background: "rgba(211, 211, 211, 1)",
          color: "black",
          transition: { duration: 0.5 },
        }}
      >
        <h2 className="text-2xl font-bold">Branding</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
          libero enim nisi aliquam consectetur expedita magni eius ex corrupti
          animi! Ad nam pariatur assumenda quae mollitia libero repellat
          explicabo maiores?
        </p>
        <button className="cursor-pointer border-none bg-orange-500 p-2">
          Go
        </button>
      </motion.div>
      <motion.div
        className="flex flex-col justify-between border-[1px] border-solid border-gray-400 p-12"
        whileHover={{
          background: "rgba(211, 211, 211, 1)",
          color: "black",
          transition: { duration: 0.5 },
        }}
      >
        <h2 className="text-2xl font-bold">Branding</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
          libero enim nisi aliquam consectetur expedita magni eius ex corrupti
          animi! Ad nam pariatur assumenda quae mollitia libero repellat
          explicabo maiores?
        </p>
        <button className="cursor-pointer border-none bg-orange-500 p-2">
          Go
        </button>
      </motion.div>
      <motion.div
        className="flex flex-col justify-between border-[1px] border-solid border-gray-400 p-12"
        whileHover={{
          background: "rgba(211, 211, 211, 1)",
          color: "black",
          transition: { duration: 0.5 },
        }}
      >
        <h2 className="text-2xl font-bold">Branding</h2>
        <p className="mb-5 mt-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
          libero enim nisi aliquam consectetur expedita magni eius ex corrupti
          animi! Ad nam pariatur assumenda quae mollitia libero repellat
          explicabo maiores?
        </p>
        <button className="cursor-pointer border-none bg-orange-500 p-2">
          Go
        </button>
      </motion.div>
    </div>
  );
};

export default List;
