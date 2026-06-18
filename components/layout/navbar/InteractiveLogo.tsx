"use client";

import Image from "next/image";

const Logo = () => {
  const throwConfetti = async () => {
    const { default: JSConfetti } = await import("js-confetti");
    const jsConfetti = new JSConfetti();

    jsConfetti.addConfetti({
      confettiColors: ["#101010", "#1C1C1C", "#ffffff6e"],
    });
  };

  return (
    <Image
      src="/logoicon.png"
      alt="Logo"
      width={80}
      height={80}
      className="mr-5 w-20 cursor-pointer overflow-visible"
      priority
      onClick={throwConfetti}
    />
  );
};

export default Logo;
