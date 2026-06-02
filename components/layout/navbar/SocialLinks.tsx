import { RxArrowTopRight } from "react-icons/rx";
import { CiCoffeeCup } from "react-icons/ci";
import { RiDiscordLine } from "react-icons/ri";
import { LuGithub, LuLinkedin, LuInstagram } from "react-icons/lu";
import { navbarSocialLinks } from "@/data/socials";
import type { SocialIconKey } from "@/types/social";

const iconMap: Record<SocialIconKey, JSX.Element> = {
  coffee: <CiCoffeeCup size={25} />,
  discord: <RiDiscordLine size={20} />,
  linkedin: <LuLinkedin size={20} />,
  github: <LuGithub size={20} />,
  instagram: <LuInstagram size={20} />,
};

const SocialLinks = () => {
  return (
    <div className="gap-1 md:gap-5 hidden md:flex">
      {navbarSocialLinks.map((link) => (
        <a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex gap-1 items-center cursor-pointer bg-white/0 hover:bg-white/10 transition-all ease-linear duration-200 p-1.5 px-2 rounded-full"
        >
          {link.icon ? (
            iconMap[link.icon]
          ) : (
            <>
              {link.name}
              <RxArrowTopRight size={15} />
            </>
          )}
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
