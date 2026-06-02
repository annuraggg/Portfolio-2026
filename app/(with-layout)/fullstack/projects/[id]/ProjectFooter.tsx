"use client";

import { CiCoffeeCup } from "react-icons/ci";
import Image from "next/image";

export default function ProjectFooter() {
  return (
    <div className="mt-20 flex items-center justify-center flex-col">
      <p className="text-xl mb-5">Thank you</p>
      <Image
        src="/sign.png"
        alt="Signature"
        width={56}
        height={56}
        className="invert w-14"
      />
      <div className="mt-10 p-3 transition-all duration-300 cursor-pointer rounded-full bg-white/0 hover:bg-white/10">
        <CiCoffeeCup
          size={30}
          onClick={() =>
            window.open("https://buymeacoffee.com/annuraggg", "_blank")
          }
        />
      </div>
    </div>
  );
}
