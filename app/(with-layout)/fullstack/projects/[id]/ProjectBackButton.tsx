"use client";

import { IoChevronBack } from "react-icons/io5";
import { useRouter } from "next/navigation";

export default function BackButton({ href }: { href: string }) {
  const router = useRouter();
  return (
    <div
      className="p-2 hover:bg-gray-800 z-50 fixed w-fit rounded-full duration-300 transition-all cursor-pointer flex gap-2 items-center justify-center pr-4"
      onClick={() => router.push(href)}
    >
      <IoChevronBack size={20} />
      <p>Back</p>
    </div>
  );
}
