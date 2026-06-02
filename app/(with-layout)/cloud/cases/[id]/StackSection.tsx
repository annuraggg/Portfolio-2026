"use client";

import { motion } from "framer-motion";

const fadeInAnimationVariants = {
  initial: { opacity: 0, y: 20 },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.05 * index },
  }),
};

export default function StackSection({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  if (!items?.length) return null;

  return (
    <div className="mb-10">
      <h2 className="text-xl font-semibold mb-4">{title}</h2>

      <div className="flex flex-wrap gap-2">
        {items.map((item, index) => (
          <motion.div
            key={item}
            className="md:text-base text-xs borderBlack rounded-xl px-5 py-3 bg-white/10 cursor-pointer transition-all duration-300"
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
    </div>
  );
}
