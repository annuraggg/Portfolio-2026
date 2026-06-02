export default function ProjectProblemSolution({
  problem,
  solution,
}: {
  problem?: string;
  solution?: string;
}) {
  if (!problem || !solution) return null;

  return (
    <div className="mt-20 flex-col md:flex-row flex gap-10 w-[85vw] md:w-[70vw]">
      <div>
        <b>The Problem</b>
        <p className="mt-5 text-gray-500">{problem}</p>
      </div>
      <div>
        <b>The Solution</b>
        <p className="mt-5 text-gray-500">{solution}</p>
      </div>
    </div>
  );
}
