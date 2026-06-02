import { footerSocialLinks } from "@/data/socials";

const FooterSocialLinks = () => {
  return (
    <div className="flex justify-between gap-20 mt-10 md:mt-0">
      {/* Contact Section */}
      <div>
        <p className="text-gray-500 mb-2 text-xs">CONTACT</p>
        <div className="text-lg flex flex-col gap-2">
          {footerSocialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 duration-300 transition-all"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FooterSocialLinks;
