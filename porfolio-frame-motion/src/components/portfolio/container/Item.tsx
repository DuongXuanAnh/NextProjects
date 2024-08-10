import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const Item = ({ item }: { item: Item }) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    // offset: ["end end", "end start"],
  });

  // const y = useTransform(scrollYProgress, [0, 1], ["0%", "-300%"]);
  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section className="h-screen snap-center">
      <div className="flex h-full w-full items-center justify-center overflow-hidden">
        <div className="mx-auto flex h-full max-w-[1366px] items-center justify-center gap-12">
          <div className="h-[60%] w-[100%]" ref={ref}>
            <Image
              src={item.img}
              alt={item.title}
              width={500}
              height={300}
              className="h-full w-full rounded-sm object-cover"
            />
          </div>
          <motion.div className="flex flex-col gap-7" style={{ y: y }}>
            <h2 className="text-7xl font-bold">{item.title}</h2>
            <p className="text-[20px] text-gray-600">{item.desc}</p>
            <button className="w-48 cursor-pointer rounded-xl border-none bg-orange-500 p-3">
              See Demo
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Item;
