import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { name: "Terms & Conditions", href: "/terms-and-conditions" },
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Cookie Policy", href: "/cookies" },
    { name: "Sitemap", href: "/sitemap.xml" },
  ];

  return (
    <footer className="bg-[#EAEAF2] !pt-8 sm:!pt-12 md:!pt-16 !pb-6 sm:!pb-8 md:!pb-12 flex flex-col items-center justify-center">
      {/* Groove Divider */}
      <div className="relative w-full !mb-6 sm:!mb-8 md:!mb-10">
        <div className="relative w-full flex items-center">
          {/* Left fade section */}
          <div className="w-12 sm:w-16 md:w-24 relative">
            <div
              className="w-full h-[1px] sm:h-[2px]"
              style={{
                background: "linear-gradient(to right, transparent 0%, #CDCDDE 100%)",
              }}
            />
            <div
              className="absolute top-0 w-full h-[1px]"
              style={{
                background: "linear-gradient(to right, transparent 0%, rgba(205, 205, 222, 0.6) 100%)",
                boxShadow: "0 1px 3px rgba(255, 255, 255, 0.5)",
              }}
            />
          </div>

          {/* Main line */}
          <div className="flex-1 relative">
            <div
              className="w-full h-[1px] sm:h-[2px]"
              style={{
                background: "#CDCDDE",
              }}
            />
            <div
              className="absolute top-0 w-full h-[1px]"
              style={{
                background: "rgba(205, 205, 222, 0.8)",
                boxShadow: "0 1px 3px rgba(255, 255, 255, 0.5), 0 0 6px rgba(255, 255, 255, 0.4)",
              }}
            />
          </div>

          {/* Right fade section */}
          <div className="w-12 sm:w-16 md:w-24 relative">
            <div
              className="w-full h-[1px] sm:h-[2px]"
              style={{
                background: "linear-gradient(to left, transparent 0%, #CDCDDE 100%)",
              }}
            />
            <div
              className="absolute top-0 w-full h-[1px]"
              style={{
                background: "linear-gradient(to left, transparent 0%, rgba(205, 205, 222, 0.6) 100%)",
                boxShadow: "0 1px 3px rgba(255, 255, 255, 0.5)",
              }}
            />
          </div>
        </div>
      </div>

      {/* Footer Content */}
      <div className="w-full mx-auto !px-4 sm:!px-6 md:!px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0">
          {/* Footer Links */}
          <div className="flex flex-wrap justify-center sm:justify-start items-center gap-3 sm:gap-4 md:gap-8">
            {footerLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-xs sm:text-sm md:text-base font-onest text-[#38385B] hover:text-black transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-xs sm:text-sm md:text-base font-onest text-[#38385B]">
            {currentYear}@Levantate Labs
          </p>
        </div>
      </div>
    </footer>
  );
}



