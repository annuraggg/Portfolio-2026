import MiddleBar from "./MiddleBar";
import NavbarLinks from "./NavbarLinks";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <div className="px-10 py-5 flex items-center justify-between md:fixed w-full z-50 h-[84px]">
      <div className="flex gap-2 items-center w-full mt-5">
        <Logo />
      </div>
      <MiddleBar />
      <NavbarLinks />
    </div>
  );
};

export default Navbar;
