import FooterLinks from "./FooterLinks";
import FooterNavigation from "./FooterNavigation";
import Image from "next/image";

const FooterContainer = () => {
  return (
    <div className="md:w-full w-[100vw] h-[70vh] py-5 md:py-0 md:h-[45vh] bg-[#111011] border-y border-y-[#262726]">
      <div className="w-full h-[95%] flex flex-col md:flex-row items-center justify-center md:justify-around">
        <div className="flex items-center justify-center flex-col md:block">
          <Image
            src="/logoicon.png"
            className="w-8 invert"
            alt="logo"
            width={100}
            height={100}
          />
          <p className="mt-2 md:mt-10">Made with ❤️ By Anurag</p>
          <p className="text-xs text-gray-500 cursor-pointer">
            <a
              href="https://buymeacoffee.com/annuraggg"
              target="_blank"
              rel="noopener noreferrer"
            >
              Buy Me A Coffee?
            </a>
          </p>
        </div>
        <div className="flex gap-20">
          <FooterLinks />
          <FooterNavigation />
        </div>
      </div>

      <p className="text-center mb-10 text-gray-500 text-xs mt-[-30px]">
        Last Updated on {process.env.NEXT_PUBLIC_UPDATED_AT}
      </p>
    </div>
  );
};

export default FooterContainer;
