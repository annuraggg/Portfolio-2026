"use client"
import JSConfetti from "js-confetti";
import Image from "next/image";
import React from "react";

const Logo = () => {
  const jsConfetti = new JSConfetti();
  const throwConfetti = () => {
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
