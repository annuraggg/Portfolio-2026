import AnimatedTagList from "@/components/shared/AnimatedTagList";
import SectionTitle from "@/components/shared/SectionTitle";

export default function ProjectTechnologies({
  technologies,
}: {
  technologies: string[];
}) {
  return (
    <div className="mt-20">
      <SectionTitle>Technologies</SectionTitle>
      <div className="flex flex-wrap gap-2 w-[85vw] md:w-[70vw] items-center justify-center">
        <AnimatedTagList items={technologies} initialOpacity={1} offset={40} />
      </div>
    </div>
  );
}
