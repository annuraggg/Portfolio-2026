"use client";
import React from "react";
import dynamic from "next/dynamic";
const Confetti = dynamic(() => import("./Logo"), { ssr: false });

const LogoWithConfetti = () => {
  return <Confetti />;
};

export default LogoWithConfetti;
