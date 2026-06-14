import { LuCloudCog, LuCodeXml } from "react-icons/lu";

export default function HomeHero() {
  return (
    <section className="relative mx-auto flex min-h-[65vh] w-full max-w-6xl flex-col items-center justify-center overflow-hidden text-center">
      <div className="absolute left-[25%] -top-[50%] -z-10 h-80 w-80 rounded-full bg-violet-400/[0.07] blur-[120px]" />
      <div className="absolute right-[20%] top-[35%] -z-10 h-80 w-80 rounded-full bg-cyan-400/[0.06] blur-[120px]" />

      <p className="text-[10px] uppercase tracking-[0.34em] text-zinc-500 md:text-xs">
        Fullstack Engineer / Cloud Architect
      </p>
      <h1 className="mt-6 max-w-5xl text-5xl leading-[0.98] tracking-[-0.055em] md:text-8xl">
        I design products and the{" "}
        <span className="font-gloock italic bg-gradient-to-b from-white via-zinc-300 to-zinc-700 bg-clip-text text-transparent">
          systems behind them.
        </span>
      </h1>
      <p className="mt-8 max-w-2xl text-sm leading-7 text-zinc-500 md:text-base">
        Based in Mumbai.
      </p>
    </section>
  );
}
