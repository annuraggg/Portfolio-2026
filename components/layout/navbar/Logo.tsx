"use client";
import dynamic from "next/dynamic";
const InteractiveLogo = dynamic(() => import("./InteractiveLogo"), { ssr: false });

const LogoWithConfetti = () => {
  return <InteractiveLogo />;
};

export default LogoWithConfetti;
