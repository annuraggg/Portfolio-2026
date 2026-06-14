import Image from "next/image";
import { LuMaximize2 } from "react-icons/lu";
import CaseReveal from "./CaseReveal";
import CaseSectionHeader from "./CaseSectionHeader";

export default function CaseCover({
  cover,
  title,
  description,
}: {
  cover: string;
  title: string;
  description: string;
}) {
  return (
    <CaseReveal className="w-full max-w-7xl">
      <section className="py-16 md:py-28">
        <CaseSectionHeader
          eyebrow="System Architecture"
          title="AWS Architecture"
          description={description}
        />
        <div className="group relative overflow-hidden rounded-3xl border border-cyan-300/15 bg-[#080d10] p-2 shadow-[0_0_120px_rgba(34,211,238,0.12)] md:p-4">
          <div className="absolute inset-x-[15%] top-0 h-32 bg-cyan-300/10 blur-[80px]" />
          <div className="flex items-center justify-between border-b border-white/10 px-3 py-3 md:px-4">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-red-400/80" />
              <span className="h-2 w-2 rounded-full bg-amber-300/80" />
              <span className="h-2 w-2 rounded-full bg-emerald-400/80" />
            </div>
            <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-zinc-500 md:text-xs">
              {title}
            </p>
            <LuMaximize2 className="text-zinc-600 transition-colors duration-300 group-hover:text-cyan-200" />
          </div>
          <div className="relative overflow-hidden rounded-b-2xl bg-white">
            <Image
              src={cover}
              alt={title}
              width={1591}
              height={1061}
              priority
              className="h-auto w-full transition-transform duration-700 ease-out group-hover:scale-[1.025]"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-cyan-950/10 via-transparent to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
          </div>
        </div>
      </section>
    </CaseReveal>
  );
}
