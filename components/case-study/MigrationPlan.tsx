import type { CloudCaseStudyMigrationPhase } from "@/types/cloud-case-study";

export default function MigrationPlan({
  phases,
}: {
  phases?: CloudCaseStudyMigrationPhase[];
}) {
  if (!phases?.length) return null;

  return (
    <div className="mt-20 w-[85vw] md:w-[70vw]">
      <h1 className="text-center text-3xl font-poly mb-10 drop-shadow-glow">
        Migration Plan
      </h1>

      <div className="flex flex-col gap-5">
        {phases.map((phase) => (
          <div
            key={phase.phase}
            className="
              rounded-lg
              border
              border-white/10
              bg-white/5
              p-6
            "
          >
            <h2 className="text-xl font-semibold">
              {phase.phase}
            </h2>

            <p className="mt-3 text-gray-500">
              {phase.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
