import SectionTitle from "@/components/shared/SectionTitle";

export default function ProjectHighlights({
  highlights,
}: {
  highlights: string[];
}) {
  return (
    <div className="mt-20">
      <SectionTitle>Highlights</SectionTitle>
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
