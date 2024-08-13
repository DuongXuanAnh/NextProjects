"use client";
import React from "react";
import { FiSend } from "react-icons/fi";
import { motion } from "framer-motion";

const ContactForm = () => {
  return (
    <div className="w-full p-4 lg:w-3/4" id="contact">
      <h2 className="my-8 text-center text-4xl font-semibold tracking-tighter">
        Let's connect
      </h2>
      <motion.form
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.7 }}
      >
        <div className="mb-4 lg:flex lg:space-x-4">
          <div className="w-full lg:w-1/2">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              className="mb-4 w-full appearance-none rounded-lg border border-stone-50/30 bg-transparent px-3 py-2 text-sm focus:border-stone-400 focus:outline-none"
            />
          </div>

          <div className="w-full lg:w-1/2">
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              className="mb-4 w-full appearance-none rounded-lg border border-stone-50/30 bg-transparent px-3 py-2 text-sm focus:border-stone-400 focus:outline-none"
            />
          </div>
        </div>

        <div className="mb-4">
          <textarea
            id="message"
            name="message"
            placeholder="Message"
            rows={6}
            className="mb-8 w-full appearance-none rounded-lg border border-stone-50/30 bg-transparent px-3 py-2 text-sm focus:border-stone-400 focus:outline-none"
          />
        </div>
        <button className="flex w-full items-center justify-center gap-2 rounded-md bg-white p-2 text-black">
          Send
          <FiSend />
        </button>
      </motion.form>
    </div>
  );
};

export default ContactForm;
