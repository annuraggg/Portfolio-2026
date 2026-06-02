import { CiCoffeeCup } from "react-icons/ci";
import { RiDiscordLine } from "react-icons/ri";
import { LuGithub, LuLinkedin, LuInstagram } from "react-icons/lu";
import { RxArrowTopRight } from "react-icons/rx";
import { socials } from "@/data/socials";

const icons = {
  "Buy Me a Coffee": <CiCoffeeCup size={25} />,
  Discord: <RiDiscordLine size={20} />,
  LinkedIn: <LuLinkedin size={20} />,
  GitHub: <LuGithub size={20} />,
  Instagram: <LuInstagram size={20} />,
};

const NavbarLinks = () => {
  return (
    <div className="gap-1 md:gap-5 hidden md:flex">
      {socials.map((link) => (
        <a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex gap-1 items-center cursor-pointer bg-white/0 hover:bg-white/10 transition-all ease-linear duration-200 p-1.5 px-2 rounded-full"
        >
          {link.name in icons ? (
            icons[link.name as keyof typeof icons]
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

export default NavbarLinks;
