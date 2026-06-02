import { FaArrowRight } from "react-icons/fa6";
import work from "../../../data/case";
import Image from "next/image";
import Link from "next/link";

const Work = () => {
  return (
    <div className="md:w-[90%] w-[90vw] md:py-10 md:p-10 animate__animated animate__fadeIn">
      <div className="text-center text-5xl font-poly drop-shadow-glow md:text-8xl">
        <h1>
          Cloud Infrastructure built for{" "}
          <span className=" md:text-8xl font-gloock italic drop-shadow-none bg-gradient-to-b from-[#ffffff6e] via-[#d8d9d8bc] to-[#101010] text-transparent bg-clip-text">
            reliability.
          </span>
        </h1>
      </div>

      <div className="mt-20"></div>

      <div className="flex flex-col md:gap-5 w-full">
        {work.map((w) => (
          <Link
            key={w.title}
            className="bg-gradient-to-r from-[#252524] w-full via-[#ffffff92] to-[#252524] p-[1px] rounded-3xl mt-5 md:mt-10 cursor-pointer group "
            href={`/cloud/cases/${w.id}`}
          >
            <div className="bg-gradient-to-b md:h-[75vh] from-[#222323] to-[#151515] flex-col md:flex-row rounded-3xl p-7 md:p-10 overflow-hidden duration-300 transition-all">
              <div className="flex md:justify-between md:flex-row flex-col-reverse">
                <div className="md:w-[90%]">
                  <h2 className="text-2xl">{w.title}</h2>
                  <p className="text-gray-500 text-sm">{w.overview}</p>
                </div>

                <FaArrowRight
                  size={20}
                  className="mb-5 self-end md:self-auto md:mb-0 group-hover:translate-x-2 transition-all duration-500 ease-in-out"
                />
              </div>

              <div className="flex items-center justify-center">
                <Image
                  src={w.cover ? w.cover : "https://via.placeholder.com/300"}
                  alt={w.title}
                  width={1920}
                  height={1018}
                  className="md:w-[90%] mt-5 md:mt-20 rounded-3xl group-hover:mt-10 transition-all duration-500 ease-in-out"
                />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Work;
