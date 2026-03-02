export const dynamic = "force-dynamic";
import { IconCloud } from "@/components/ui/icon-cloud";
import { getAllSkills } from "@/lib/db/skills";
import React from "react";
import { SkillItem } from "./SkillItem";

const Skills = async () => {
  const skillsData = await getAllSkills();
  const images = skillsData.map((skill) => {
    const cleanSlug = skill.title.replace(/\s+/g, "").toLowerCase();
    return `https://cdn.simpleicons.org/${cleanSlug}/${cleanSlug}`;
  });

  return (
    <div className="px-4 sm:px-6 md:px-12 lg:px-24 lg:py-32 xl:px-32 2xl:px-64 py-12 sm:py-16 md:py-20">
      <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-accent font-medium text-center">
        Skills
      </h2>
      <p className="dark:text-zinc-400 text-sm text-center mt-2 mb-6 sm:mb-8 md:mb-10">
        Green items include proficiency. Click to see
      </p>
      <div className="flex flex-col lg:flex-row justify-start items-center lg:items-start gap-8">
        <div className="w-full lg:w-auto flex justify-center mt-0 lg:-mt-14">
          <IconCloud images={images} />
        </div>

        <div className="flex flex-wrap justify-center lg:justify-start w-full lg:flex-1">
          {skillsData.map((skill, index) => (
            <div key={index} className="p-1 sm:p-2">
              <SkillItem
                title={skill.title}
                progress={skill.progress}
                index={index}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
