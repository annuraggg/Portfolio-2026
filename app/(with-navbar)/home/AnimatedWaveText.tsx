"use client";
import React, { useState } from "react";
import { LayoutTextFlip } from "@/components/ui/layout-text-flip";
import { motion } from "motion/react";

const AnimatedWaveText = () => {
  const [isHovered, setIsHovered] = useState(false);
  const waveUrl = "/wave.svg";

  return (
    <h2 className="relative p-0 group text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl inline-block pb-8 font-semibold transition-colors duration-1000 text-center px-4">
      <div
        className="relative z-10"
        onMouseOver={() => setIsHovered(true)}
        onMouseOut={() => setIsHovered(false)}
      >
        <motion.div className="relative mx-4 my-4 flex flex-col items-center justify-center gap-4 text-center sm:mx-0 sm:mb-0 sm:flex-row">
          <LayoutTextFlip
            text="A "
            words={[
              "Full Stack Developer",
              "Cloud Engineer",
              "SAP BASIS Consultant",
            ]}
          />
        </motion.div>
      </div>
      <span
        className={`absolute left-0 bottom-0 w-full h-[8px] sm:h-[10px] md:h-[12px] bg-repeat-x bg-bottom ${
          isHovered ? "animate-wave" : ""
        }`}
        style={{
          backgroundImage: `url('${waveUrl}')`,
          backgroundSize: "28px 12px",
        }}
      />
    </h2>
  );
};

export default AnimatedWaveText;
