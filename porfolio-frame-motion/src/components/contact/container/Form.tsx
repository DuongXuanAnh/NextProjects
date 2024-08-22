import React from "react";
import { animate, motion } from "framer-motion";

const Form = ({ variants }: { variants: any }) => {
  return (
    <motion.form
      className="z-50 flex flex-col gap-5"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 3, duration: 1 }}
    >
      <input
        type="text"
        required
        placeholder="Name"
        name="name"
        className="rounded-md border-2 border-gray-500 bg-inherit p-2 pl-4"
      />
      <input
        type="email"
        required
        placeholder="Email"
        name="email"
        className="rounded-md border-2 border-gray-500 bg-inherit p-2 pl-4"
      />
      <textarea
        rows={8}
        placeholder="Message"
        name="message"
        className="rounded-md border-2 border-gray-500 bg-inherit p-2 pl-4"
      />
      <button className="rounded-sm bg-orange-400 p-3 font-semibold text-black">
        Submit
      </button>
    </motion.form>
  );
};

export default Form;
