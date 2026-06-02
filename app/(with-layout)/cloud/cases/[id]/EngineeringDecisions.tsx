export default function EngineeringDecisions({
  decisions,
}: {
  decisions?: {
    title: string;
    reason: string;
  }[];
}) {
  if (!decisions?.length) return null;

  return (
    <div className="mt-20 w-[85vw] md:w-[70vw]">
      <h1 className="text-center text-3xl font-poly mb-10 drop-shadow-glow">
        Engineering Decisions
      </h1>

      <div className="flex flex-col gap-5">
        {decisions.map((decision) => (
          <div
            key={decision.title}
            className="
              rounded-lg
              border
              border-white/10
              bg-white/5
              p-6
            "
          >
            <h2 className="text-xl font-semibold">
              {decision.title}
            </h2>

            <p className="mt-3 text-gray-500">
              {decision.reason}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}