import { socials } from "@/data/socials";

const footerSocialNames = ["LinkedIn", "GitHub", "Instagram", "Resume"];

const FooterLinks = () => {
  return (
    <div className="flex justify-between gap-20 mt-10 md:mt-0">
      {/* Contact Section */}
      <div>
        <p className="text-gray-500 mb-2 text-xs">CONTACT</p>
        <div className="text-lg flex flex-col gap-2">
          {socials
            .filter((social) => footerSocialNames.includes(social.name))
            .map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-500 duration-300 transition-all"
              >
                {social.name}
              </a>
            ))}
        </div>
      </div>
    </div>
  );
};

export default FooterLinks;
