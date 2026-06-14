import Image from "next/image";
import { LuImage } from "react-icons/lu";
import ProjectReveal from "./ProjectReveal";
import ProjectSectionHeader from "./ProjectSectionHeader";

export default function ProjectScreenshots({
  screenshots,
  title,
}: {
  screenshots?: string[];
  title: string;
}) {
  if (!screenshots?.length) return null;

  return (
    <ProjectReveal className="w-full max-w-7xl">
      <section className="py-16 md:py-24">
        <ProjectSectionHeader eyebrow="Product Interface" title="Screenshots" />
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {screenshots.map((s, index) => (
          <div
            key={s}
            className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035] p-2"
          >
            <div className="flex items-center justify-between px-2 py-2">
              <div className="flex items-center gap-2 text-zinc-500">
                <LuImage size={14} />
                <span className="font-mono text-[9px] uppercase tracking-[0.18em]">
                  Screenshot {String(index + 1).padStart(2, "0")}
                </span>
              </div>
            </div>
            <div className="overflow-hidden rounded-xl">
              <Image
                src={s}
                alt={`${title} Screenshot ${index + 1}`}
                width={800}
                height={600}
                className="h-auto w-full transition-transform duration-700 group-hover:scale-[1.025]"
              />
            </div>
          </div>
        ))}
        </div>
      </section>
    </ProjectReveal>
  );
}
