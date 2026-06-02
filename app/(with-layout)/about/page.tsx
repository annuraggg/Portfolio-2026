import AboutIntro from "@/components/about/AboutIntro";
import ProfileBadge from "@/components/about/ProfileBadge";
import Background from "@/components/about/Background";
import ExperienceSection from "@/components/about/ExperienceSection";

const Info = () => {
  return (
    <div className="md:w-[70%] w-[85vw] md:mt-16 animate__animated animate__fadeIn">
      <AboutIntro />

      <div className="flex flex-col md:flex-row items-start justify-between w-full mt-10 h-[400px]">
        {/* Badge container */}
        <div className="flex items-center justify-center min-h-[200px]">
          <ProfileBadge />
        </div>

        <Background />
      </div>

      <div className="mt-20">
        <ExperienceSection />
      </div>
    </div>
  );
};

export default Info;
