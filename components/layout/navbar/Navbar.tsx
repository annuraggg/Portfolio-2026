import PrimaryNav from "./PrimaryNav";
import SocialLinks from "./SocialLinks";
import LogoWithConfetti from "./LogoWithConfetti";

const Navbar = () => {
  return (
    <div className="px-10 py-5 flex items-center justify-between md:fixed w-full z-50 h-[84px]">
      <div className="flex gap-2 items-center w-full mt-5">
        <LogoWithConfetti />
      </div>
      <PrimaryNav />
      <SocialLinks />
    </div>
  );
};

export default Navbar;
