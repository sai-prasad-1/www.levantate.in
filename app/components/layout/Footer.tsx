import Link from "next/link";
import { FaTwitter, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: "Home", href: "/" },
      { name: "Services", href: "#services" },
      { name: "Blog", href: "/blog" },
      { name: "Careers", href: "/careers" },
    ],
    legal: [
      { name: "Terms & Conditions", href: "/terms" },
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Cookie Policy", href: "/cookies" },
      { name: "Sitemap", href: "/sitemap.xml" },
    ],
  };

  const socialLinks = [
    { name: "Twitter", icon: FaTwitter, href: "https://twitter.com/LevantateLabs" },
    { name: "LinkedIn", icon: FaLinkedin, href: "https://linkedin.com/company/levantate-labs" },
    { name: "GitHub", icon: FaGithub, href: "https://github.com/levantatelabs" },
    { name: "Instagram", icon: FaInstagram, href: "https://instagram.com/levantatelabs" },
  ];

  return (
    <footer className="bg-black text-white">
      Footer
    </footer>
  );
}



