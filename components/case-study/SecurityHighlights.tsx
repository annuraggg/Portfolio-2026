export default function SecurityHighlights({
  security,
}: {
  security?: string[];
}) {
  if (!security?.length) return null;

  return (
    <div className="mt-20 w-[85vw] md:w-[70vw]">
      <h1 className="text-center text-3xl font-poly mb-10 drop-shadow-glow">
        Security
      </h1>

      <div className="flex flex-col gap-3">
        {security.map((item) => (
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