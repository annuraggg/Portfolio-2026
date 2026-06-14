import CaseList from "@/components/case-study/CaseList";
import FeaturedSection from "@/components/home/FeaturedSection";
import HomeHero from "@/components/home/HomeHero";
import ProjectList from "@/components/project/ProjectList";

const Work = () => {
  return (
    <div className="w-[90vw] max-w-[1440px] md:w-[90%] md:px-10">
      <HomeHero />

      <FeaturedSection
        eyebrow="Systems Engineering"
        title="Cloud Case Studies"
        href="/cloud"
        linkLabel="View all cloud case studies"
        accent="cyan"
      >
        <CaseList limit={2} showCategory />
      </FeaturedSection>

      <FeaturedSection
        eyebrow="Product"
        title="Featured Fullstack Projects"
        href="/fullstack"
        linkLabel="View all fullstack projects"
        accent="violet"
      >
        <ProjectList limit={2} showCategory />
      </FeaturedSection>
    </div>
  );
};

export default Work;
