import type { CloudCaseStudyChallenge } from "@/types/cloud-case-study";

export default function Challenges({
  challenges,
}: {
  challenges?: CloudCaseStudyChallenge[];
}) {
  if (!challenges?.length) return null;

  return (
    <div className="mt-20 w-[85vw] md:w-[70vw]">
      <h1 className="text-center text-3xl font-poly mb-10 drop-shadow-glow">
        Challenges
      </h1>

      <div className="flex flex-col gap-6">
        {challenges.map((challenge, index) => (
          <div
            key={index}
            className="
              rounded-lg
              border
              border-white/10
              bg-white/5
              p-6
            "
          >
            <h2 className="text-xl font-semibold">
              Challenge
            </h2>

            <p className="mt-3 text-gray-500">
              {challenge.problem}
            </p>

            <h2 className="text-xl font-semibold mt-8">
              Solution
            </h2>

            <p className="mt-3 text-gray-500">
              {challenge.solution}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
