import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import type { ShowcaseItem } from "@/types/content";

const PLACEHOLDER_IMAGE = "https://via.placeholder.com/300";

export default function ShowcaseCard({
  href,
  item,
  category,
}: {
  href: string;
  item: ShowcaseItem;
  category?: string;
}) {
  return (
    <Link
      className="bg-gradient-to-r from-[#252524] w-full via-[#ffffff92] to-[#252524] p-[1px] rounded-3xl mt-5 md:mt-10 cursor-pointer group"
      href={href}
    >
      <div className="bg-gradient-to-b md:h-[75vh] from-[#222323] to-[#151515] flex-col md:flex-row rounded-3xl p-7 md:p-10 overflow-hidden duration-300 transition-all">
        <div className="flex md:justify-between md:flex-row flex-col-reverse">
          <div className="md:w-[90%]">
            {category && (
              <p className="mb-3 text-[10px] uppercase tracking-[0.26em] text-zinc-500">
                {category}
              </p>
            )}
            {item.badge && (
              <p className="text-xs text-yellow-500 bg-yellow-500/20 px-2 py-1 rounded-full mb-2 w-fit">
                {item.badge}
              </p>
            )}
            <h2 className="text-2xl">{item.title}</h2>
            <p className="text-gray-500 text-sm">{item.summary}</p>
          </div>
          <FaArrowRight
            size={20}
            className="mb-5 self-end md:self-auto md:mb-0 group-hover:translate-x-2 transition-all duration-500 ease-in-out"
          />
        </div>
        <div className="flex items-center justify-center">
          <Image
            src={item.cover ?? PLACEHOLDER_IMAGE}
            alt={item.title}
            width={1920}
            height={1018}
            sizes={item.coverSizes ?? "(max-width: 768px) 82vw, 50vw"}
            className="h-auto md:w-[90%] mt-5 md:mt-20 rounded-3xl group-hover:mt-10 transition-all duration-500 ease-in-out"
          />
        </div>
      </div>
    </Link>
  );
}
