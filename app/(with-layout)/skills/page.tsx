import { skillsData } from "@/data/skills";
import { credentials } from "@/data/credentials";
import { SkillItem } from "@/components/skills/SkillItem";
import { CredentialItem } from "@/components/skills/CredentialItem";

const Skills = () => {
  return (
    <div className="md:w-[70%] w-[85vw] animate__animated animate__fadeIn">
      <h1 className="font-poly text-3xl md:text-7xl text-center drop-shadow-glow">
        Skills
      </h1>
      <p className="text-gray-500 md:text-base text-sm text-center mt-2">
        Green items include proficiency. Click to see
      </p>
      <p className="text-gray-500 text-xs text-center mb-10 mt-2">
        Last Updated at {process.env.NEXT_PUBLIC_SKILLS_UPDATED_AT}
      </p>

      <ul className="flex flex-wrap gap-5 items-center justify-center">
        {[...skillsData]
          .sort((a, b) => a.title.localeCompare(b.title))
          .map((skill, index) => (
            <SkillItem key={skill.title} {...skill} index={index} />
          ))}
      </ul>

      <div className="mt-20">
        <h1 className="font-poly text-2xl text-center mb-10 drop-shadow-glow">
          Credentials
        </h1>
        {credentials.map((c) => (
          <CredentialItem key={c.title} {...c} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
