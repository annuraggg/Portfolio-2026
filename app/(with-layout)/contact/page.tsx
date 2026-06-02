import DiscordProfile from "@/components/contact/DiscordProfile";
import Image from "next/image";
import Link from "next/link";
import ContactForm from "@/components/contact/ContactForm";

export const metadata = {
  title: "Contact",
};

export default async function ContactPage() {
  return (
    <div
      className="md:w-auto w-[85vw] animate__animated animate__fadeIn mx-auto"
      id="mainContact"
    >
      <h1 className="md:text-7xl text-center text-3xl drop-shadow-glow font-poly">
        Get in Touch{" "}
        <span className="font-gloock italic bg-gradient-to-b from-[#ffffff6e] via-[#d8d9d8bc] to-[#10101000] text-transparent bg-clip-text">
          With Me.
        </span>
      </h1>
      <p className="text-center mt-2 text-gray-500">
        I would love to hear from you
      </p>

      <div className="flex items-center justify-center my-5">
        {/* Server-rendered, no hooks */}
        <DiscordProfile />
      </div>

      <div className="flex items-center justify-center flex-col mt-10">
        <Link
          href="mailto:hello@anuragsawant.in"
          className="cursor-pointer hover:text-blue-500 transition-all duration-300"
        >
          hello@anuragsawant.in
        </Link>
        <ContactForm />
      </div>

      <div className="flex items-center justify-center mt-8">
        <Image
          src="/name.png"
          alt="Name wordmark"
          width={500} 
          height={500}
          className="w-48 invert-[0.2] h-auto"
          priority
        />
      </div>
    </div>
  );
}
