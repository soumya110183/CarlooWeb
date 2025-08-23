import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

export default function SocialMediaIcon() {
  const socialLinks = [
    { href: "https://www.facebook.com/people/Algorethicsai/61569461851451/", Icon: FaFacebookF, label: "Facebook" },
    { href: "https://www.instagram.com/algorethics_ai/", Icon: FaInstagram, label: "Instagram" },
    { href: "https://www.linkedin.com/company/algorethics-ai/", Icon: FaLinkedinIn, label: "LinkedIn" },
    { href: "https://www.youtube.com/@Algorethics", Icon: FaYoutube, label: "YouTube" },
  ];

  return (
    <div className="flex gap-4 mt-4">
      {socialLinks.map(({ href, Icon, label }, idx) => (
        <a
          key={idx}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label} 
        >
          <Icon className="text-white bg-black rounded-full p-2 w-8 h-8 cursor-pointer hover:scale-105 transition" />
        </a>
      ))}
    </div>
  );
}
