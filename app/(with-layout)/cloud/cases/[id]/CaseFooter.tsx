"use client";

import { CiCoffeeCup } from "react-icons/ci";
import Image from "next/image";

export default function CaseStudyFooter() {
  return (
    <div className="mt-32 flex flex-col items-center justify-center">
      <p className="text-xl font-poly mb-5 text-center">
        Built with curiosity and coffee.
      </p>

      <Image
        src="/sign.png"
        alt="Signature"
        width={56}
        height={56}
        className="invert w-14 opacity-80"
      />

      <div
        className="
          mt-10
          p-3
          rounded-full
          bg-white/5
          hover:bg-white/10
          border
          border-white/10
          hover:border-white/20
          transition-all
          duration-300
          cursor-pointer
        "
        onClick={() =>
          window.open("https://buymeacoffee.com/annuraggg", "_blank")
        }
      >
        <CiCoffeeCup size={28} />
      </div>
    </div>
  );
}
