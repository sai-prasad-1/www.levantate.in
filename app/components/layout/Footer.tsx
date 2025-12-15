import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { name: "Terms & Conditions", href: "/terms" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Cookie Policy", href: "/cookies" },
    { name: "Sitemap", href: "/sitemap.xml" },
  ];

  return (
    <footer className="bg-[#EAEAF2] !pt-16 !pb-12 flex flex-col items-center justify-center">
      {/* Groove Divider */}
      <div className="relative w-full !mb-10">
        <div className="relative w-full flex items-center">
          {/* Left fade section */}
          <div className="w-24 relative">
            <div
              className="w-full"
              style={{
                height: "2px",
                background: "linear-gradient(to right, transparent 0%, #CDCDDE 100%)",
              }}
            />
            <div
              className="absolute top-0 w-full"
              style={{
                height: "1px",
                background: "linear-gradient(to right, transparent 0%, rgba(205, 205, 222, 0.6) 100%)",
                boxShadow: "0 1px 3px rgba(255, 255, 255, 0.5)",
              }}
            />
          </div>

          {/* Main line */}
          <div className="flex-1 relative">
            <div
              className="w-full"
              style={{
                height: "2px",
                background: "#CDCDDE",
              }}
            />
            <div
              className="absolute top-0 w-full"
              style={{
                height: "1px",
                background: "rgba(205, 205, 222, 0.8)",
                boxShadow: "0 1px 3px rgba(255, 255, 255, 0.5), 0 0 6px rgba(255, 255, 255, 0.4)",
              }}
            />
          </div>

          {/* Right fade section */}
          <div className="w-24 relative">
            <div
              className="w-full"
              style={{
                height: "2px",
                background: "linear-gradient(to left, transparent 0%, #CDCDDE 100%)",
              }}
            />
            <div
              className="absolute top-0 w-full"
              style={{
                height: "1px",
                background: "linear-gradient(to left, transparent 0%, rgba(205, 205, 222, 0.6) 100%)",
                boxShadow: "0 1px 3px rgba(255, 255, 255, 0.5)",
              }}
            />
          </div>
        </div>
      </div>

      {/* Footer Content */}
      <div className="w-full mx-auto !px-8">
        <div className="flex justify-between items-center">
          {/* Footer Links */}
          <div className="flex items-center gap-8">
            {footerLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-base font-onest text-[#38385B] hover:text-black transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-base font-onest text-[#38385B]">
            {currentYear}@Levantate Labs
          </p>
        </div>
      </div>
    </footer>
  );
}



