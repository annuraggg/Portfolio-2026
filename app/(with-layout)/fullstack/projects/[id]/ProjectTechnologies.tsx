"use client";

import { motion } from "framer-motion";

const fadeInAnimationVariants = {
  initial: { opacity: 1, y: 40 },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.05 * index },
  }),
};

export default function ProjectTechnologies({
  technologies,
}: {
  technologies: string[];
}) {
  return (
    <div className="mt-20">
      <h1 className="text-center text-3xl font-poly mb-10 drop-shadow-glow">
        Technologies
      </h1>
      <div className="flex flex-wrap gap-2 w-[85vw] md:w-[70vw] items-center justify-center">
        {technologies.map((skill, index) => (
          <motion.div
            key={index}
            className="md:text-base text-xs borderBlack rounded-xl px-5 py-3 bg-white/10 cursor-pointer transition-all duration-300"
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            custom={index}
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
