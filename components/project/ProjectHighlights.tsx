// components/project/ProjectHighlights.tsx
export default function ProjectHighlights({
  highlights,
}: {
  highlights: string[];
}) {
  return (
    <div className="mt-20">
      <h1 className="text-center text-3xl font-poly mb-10 drop-shadow-glow">
        Highlights
      </h1>
      {highlights.map((h, index) => (
        <div
          key={index}
          className="flex gap-10 w-[85vw] md:w-[70vw] font-neue p-5 text-lg rounded-lg mt-5 bg-[#212222]"
        >
          {h}
        </div>
      ))}
    </div>
  );
}
