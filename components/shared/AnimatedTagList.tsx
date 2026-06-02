"use client";

import { motion } from "framer-motion";
import type { AnimatedTagListProps } from "@/types/ui";

export default function AnimatedTagList({
  items,
  className,
  itemClassName,
  initialY = 20,
}: AnimatedTagListProps) {
  const fadeInAnimationVariants = {
    initial: { opacity: 0, y: initialY },
    animate: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.05 * index },
    }),
  };

  return (
    <div className={`flex flex-wrap gap-2 ${className ?? ""}`}>
      {items.map((item, index) => (
        <motion.div
          key={item}
          className={`md:text-base text-xs borderBlack rounded-xl px-5 py-3 bg-white/10 cursor-pointer transition-all duration-300 ${itemClassName ?? ""}`}
          variants={fadeInAnimationVariants}
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
