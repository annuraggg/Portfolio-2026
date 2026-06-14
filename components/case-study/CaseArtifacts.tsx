import Image from "next/image";
import CaseReveal from "./CaseReveal";
import CaseSectionHeader from "./CaseSectionHeader";

export default function CaseStudyArtifacts({
  screenshots,
  title,
}: {
  screenshots?: string[];
  title: string;
}) {
  if (!screenshots?.length) return null;

  return (
    <CaseReveal className="w-full max-w-7xl">
      <section className="py-16 md:py-24">
        <CaseSectionHeader eyebrow="Reference Material" title="Architecture & Artifacts" />
        <div className="grid grid-cols-1 gap-5">
        {screenshots.map((artifact, index) => (
          <div
            key={artifact}
            className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035] p-2"
          >
            <Image
              src={artifact}
              alt={`${title} Artifact ${index + 1}`}
              width={1600}
              height={900}
              className="h-auto w-full rounded-xl"
            />
          </div>
        ))}
        </div>
      </section>
    </CaseReveal>
  );
}
