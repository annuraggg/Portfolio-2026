import Link from "next/link";
import { IoChevronBack } from "react-icons/io5";

export default function BackLink({ href }: { href: string }) {
  return (
    <Link
      href={href}
      className="p-2 hover:bg-gray-800 z-50 fixed w-fit rounded-full duration-300 transition-all cursor-pointer flex gap-2 items-center justify-center pr-4"
    >
      <IoChevronBack size={20} />
      <span>Back</span>
    </Link>
  );
}
