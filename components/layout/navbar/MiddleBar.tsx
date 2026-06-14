"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { primaryNavigation } from "@/data/navigation";

const MiddleBar = () => {
  const pathname = usePathname();

  const activeIndex = primaryNavigation.findIndex((item) => {
    if (item.href === "/") {
      return pathname === "/";
    }

    const normalized = item.href.endsWith("/")
      ? item.href.slice(0, -1)
      : item.href;

    return pathname === normalized || pathname.startsWith(`${normalized}/`);
  });

  const showHighlight = activeIndex !== -1;

  const backDivStyle = {
    transform: `translateX(${30 + 90 * activeIndex}px)`,
  };

  const frontDivStyle = {
    transform: `translateX(${activeIndex * 5.5}rem)`,
  };

  return (
    <div className="h-fit md:absolute fixed ml-auto mr-auto left-0 right-0 w-fit z-50">
      {showHighlight && (
        <div
          className="h-full w-8 bg-white/25 rounded-md border-t-white border-t-[3px] transform-gpu absolute -z-10 transition-all duration-500 delay-[30ms]"
          style={backDivStyle}
        />
      )}

      {showHighlight && (
        <div className="absolute px-1.5">
          <div
            className="z-10 absolute h-10 w-20 mt-2 rounded-full bg-white/10 transform-gpu transition-all duration-500"
            style={frontDivStyle}
          />
        </div>
      )}

      <div className="border-2 backdrop-blur-lg mt-0.5 bg-white/0 hover:bg-white/5 border-[#3F3E3E] rounded-full p-1 flex gap-2 items-center justify-center">
        {primaryNavigation.map((item, index) => {
          const isActive = index === activeIndex && showHighlight;

          return (
            <Link
              key={item.name}
              href={item.href}
              className={`w-20 text-sm h-10 flex items-center justify-center rounded-full cursor-pointer transition-all duration-300 ${
                isActive
                  ? "text-white font-semibold"
                  : "text-gray-400 hover:text-white hover:bg-gradient-to-l hover:from-[#3c403884]"
              }`}
            >
              {item.name}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default MiddleBar;
