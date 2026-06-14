import Link from "next/link";
import { LuArrowRight } from "react-icons/lu";

export default function FeaturedSection({
  eyebrow,
  title,
  href,
  linkLabel,
  accent,
  children,
}: {
  eyebrow: string;
  title: string;
  href: string;
  linkLabel: string;
  accent: "violet" | "cyan";
  children: React.ReactNode;
}) {
  const accentClass =
    accent === "cyan" ? "text-cyan-300/70" : "text-violet-300/70";

  return (
    <section className="w-full py-16 md:py-24">
      <div className="mb-4 flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div className="max-w-3xl">
          <p
            className={`text-[10px] uppercase tracking-[0.32em] md:text-xs ${accentClass}`}
          >
            {eyebrow}
          </p>
          <h2 className="mt-3 text-3xl font-poly tracking-tight text-white md:text-5xl">
            {title}
          </h2>
        </div>
        <Link
          href={href}
          className="group hidden w-fit items-center gap-3 rounded-full border border-white/10 bg-white/[0.035] px-5 py-3 text-sm text-zinc-300 transition-all duration-300 hover:border-white/25 hover:bg-white/[0.07] hover:text-white md:flex"
        >
          {linkLabel}
          <LuArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>
      {children}
      <div className="mt-8 flex justify-center md:hidden">
        <Link
          href={href}
          className="flex items-center gap-3 rounded-full border border-white/10 px-5 py-3 text-sm text-zinc-300"
        >
          {linkLabel}
          <LuArrowRight />
        </Link>
      </div>
    </section>
  );
}
