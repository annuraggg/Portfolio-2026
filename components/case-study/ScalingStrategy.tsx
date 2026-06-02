export default function ScalingStrategy({
  scaling,
}: {
  scaling?: string[];
}) {
  if (!scaling?.length) return null;

  return (
    <div className="mt-20 w-[85vw] md:w-[70vw]">
      <h1 className="text-center text-3xl font-poly mb-10 drop-shadow-glow">
        Scaling Strategy
      </h1>

      <div className="flex flex-col gap-3">
        {scaling.map((item) => (
          <div
            key={item}
            className="
              rounded-lg
              border
              border-white/10
              bg-white/5
              p-5
            "
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}