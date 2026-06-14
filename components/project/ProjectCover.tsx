import Image from "next/image";
import { LuMaximize2 } from "react-icons/lu";
import ProjectReveal from "./ProjectReveal";

export default function ProjectCover({
  cover,
  title,
}: {
  cover: string;
  title: string;
}) {
  return (
    <ProjectReveal className="w-full max-w-7xl">
      <div className="group relative overflow-hidden rounded-3xl p-2 md:p-4">
        <Image
          src={cover}
          alt={title}
          width={1200}
          height={600}
          priority
          className="h-auto w-full transition-transform duration-700 ease-out group-hover:scale-[1.02]"
        />
      </div>
    </ProjectReveal>
  );
}
