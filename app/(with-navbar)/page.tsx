import { getFeatureFlag } from "@/lib/config/configcat-server";
import Hero from "./home/Hero";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import MouseFollower from "@/components/MouseFollower";

const About = dynamic(() => import("./home/About"));
// const Estimate = dynamic(() => import("./home/Estimate"));
// const FAQ = dynamic(() => import("./home/FAQ"));
const Skills = dynamic(() => import("./home/Skills"));
const isFeatureEnabled = getFeatureFlag("enablemousefollower", false);

export default async function Home() {
  return (
    <main>
      {(await isFeatureEnabled) && <MouseFollower />}
      <Hero />
      <Suspense fallback={<div className="min-h-[400px]" />}>
        <About />
      </Suspense>
      <Suspense fallback={<div className="min-h-[400px]" />}>
        <Skills />
      </Suspense>
      {/* <Suspense fallback={<div className="min-h-[400px]" />}>
        <Estimate />
      </Suspense> */}
      {/* <Suspense fallback={<div className="min-h-[400px]" />}>
        <FAQ />
      </Suspense> */}
    </main>
  );
}
