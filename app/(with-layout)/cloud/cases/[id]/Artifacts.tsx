import Image from "next/image";

export default function CaseStudyArtifacts({
  screenshots,
  title,
}: {
  screenshots?: string[];
  title: string;
}) {
  if (!screenshots?.length) return null;

  return (
    <div className="mt-20">
      <h1 className="text-center text-3xl font-poly mb-10 drop-shadow-glow">
        Architecture & Artifacts
      </h1>

      <div className="grid grid-cols-1 gap-10 w-[85vw] md:w-[70vw]">
        {screenshots.map((artifact, index) => (
          <div
            key={artifact}
            className="rounded-lg border border-white/10 overflow-hidden bg-white/5"
          >
            <Image
              src={artifact}
              alt={`${title} Artifact ${index + 1}`}
              width={1600}
              height={900}
              className="w-full h-auto"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
