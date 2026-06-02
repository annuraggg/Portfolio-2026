"use client";

import { motion } from "framer-motion";

export default function AnimatedTagList({
  items,
  initialOpacity = 0,
  offset = 20,
}: {
  items: string[];
  initialOpacity?: number;
  offset?: number;
}) {
  const variants = {
    initial: { opacity: initialOpacity, y: offset },
    animate: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.05 * index },
    }),
  };

  return (
    <div className="flex flex-wrap gap-2">
      {items.map((item, index) => (
        <motion.div
          key={item}
          className="md:text-base text-xs borderBlack rounded-xl px-5 py-3 bg-white/10 cursor-pointer transition-all duration-300"
          variants={variants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          custom={index}
        >
          {item}
        </motion.div>
      ))}
    </div>
  );
}
