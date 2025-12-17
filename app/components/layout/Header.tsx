"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState<"work" | "why" | "what" | "blog" | "careers" | "contact" | "">("");
  const pathname = usePathname();
  const router = useRouter();

  // Track active section based on scroll position
  useEffect(() => {
    // Only run on home page
    if (pathname !== "/") {
      // Set active based on current page
      if (pathname.startsWith("/careers")) {
        setActiveNav("careers");
      } else {
        // Clear active nav for other pages (privacy, cookies, terms, etc.)
        setActiveNav("");
      }
      return;
    }

    const sectionIds = ["why", "what", "work", "blog", "contact"];
    
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -60% 0px", // Trigger when section is in the middle-ish of viewport
      threshold: 0
    };

    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id as typeof activeNav;
          if (sectionIds.includes(sectionId)) {
            setActiveNav(sectionId);
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe all sections
    sectionIds.forEach((id) => {
      const section = document.getElementById(id);
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [pathname]);

  const scrollToSection = (sectionId: string, navKey: "work" | "why" | "what" | "blog" | "careers" | "contact") => {
    setActiveNav(navKey);
    
    // If we're not on the home page, navigate there first
    if (pathname !== "/") {
      router.push(`/#${sectionId}`);
      return;
    }
    
    // Find the section and scroll to it
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-8 left-0 right-0 z-50"
    >
      <div className="w-full flex justify-center !px-4 lg:!px-0">
        <nav className="w-full lg:w-fit rounded-3xl shadow-[0_22px_45px_rgba(15,23,42,0.18)] border border-[#E2E4F5] bg-white backdrop-blur-md min-h-18 flex justify-center items-center">
          <div className="w-full flex items-center justify-between h-full !px-2 lg:!px-0">
          {/* Logo */}
            <Link href="/" className="shrink-0" onClick={() => setActiveNav("")}>
              <div className="flex items-center justify-center !ml-2 bg-white border-3 border-[#E2E4F5] rounded-2xl w-16 h-14">
                <Image 
                  src="/levantate_logo_square.svg" 
                  alt="Levantate Labs" 
                  width={32} 
                  height={32}
                  className="w-6 h-6"
                />
              </div>
            </Link>

          {/* Navigation Links - Desktop */}
          <div className="hidden lg:flex items-center gap-4 flex-1 justify-center !mx-4">
            <button 
              onClick={() => scrollToSection("why", "why")}
              className={`text-xs sm:text-sm font-medium text-gray-700 transition-colors whitespace-nowrap !px-2 py-3 rounded-xl hover:bg-gray-100 h-[52px] flex items-center ${activeNav === "why" ? "bg-gray-100" : ""}`}
            >
              Why Us
            </button>
            <button 
              onClick={() => scrollToSection("what", "what")}
              className={`text-xs sm:text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors whitespace-nowrap !px-2 py-3 rounded-xl h-[52px] flex items-center ${activeNav === "what" ? "bg-gray-100" : ""}`}
            >
              What we do
            </button>
            <button 
              onClick={() => scrollToSection("work", "work")}
              className={`text-xs sm:text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors whitespace-nowrap !px-2 py-3 rounded-xl h-[52px] flex items-center ${activeNav === "work" ? "bg-gray-100" : ""}`}
            >
              Our Work
            </button>
            <button 
              onClick={() => scrollToSection("blog", "blog")}
              className={`text-xs sm:text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors whitespace-nowrap !px-2 py-3 rounded-xl h-[52px] flex items-center ${activeNav === "blog" ? "bg-gray-100" : ""}`}
            >
             Blog
            </button>
            <Link 
              href="/careers" 
              onClick={() => setActiveNav("careers")}
              className={`relative text-xs sm:text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors whitespace-nowrap !px-2 py-3 rounded-xl h-[52px] flex flex-col items-center justify-center ${activeNav === "careers" ? "bg-gray-100" : ""}`}
            >
              <span
                className="text-[9px] text-green-800 font-semibold tracking-wide absolute top-0.5 border border-green-500 rounded-full !px-1 bg-[#C4F7D4]"
              >
                Hiring 
              </span>
              <span>Careers</span>
            </Link>
          </div>

          {/* CTA Button - Desktop */}
          <motion.div
            whileHover="hover"
            whileTap={{ scale: 0.98 }}
            variants={{
              hover: { scale: 1.05 }
            }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Link 
              href="#contact"
              className="hidden h-14 w-fit !px-2 !mr-2 lg:flex items-center gap-2 bg-black text-white rounded-2xl hover:bg-gray-900 transition-all shrink-0 border-2 border-[#E2E4F5] cursor-pointer"
            >
              <motion.div 
                className="w-8 h-8 sm:w-10 sm:h-10 bg-[#C4F7D4] rounded-md sm:rounded-lg border border-white p-1 sm:p-1.5 flex items-center justify-center"
                variants={{
                  hover: { rotate: 360 }
                }}
                transition={{ duration: 0.6 }}
              >
                <Image 
                  src="/levantate_logo_square.svg" 
                  alt="" 
                  width={20} 
                  height={20}
                  className="w-4 h-4 sm:w-5 sm:h-5"
                />
              </motion.div>
              <div className="flex flex-col text-left leading-tight">
                <span className="text-xs sm:text-sm font-medium font-onest">Book an intro call</span>
                <span className="text-[10px] sm:text-xs text-gray-300 font-onest">Friendly chat, no pressure</span>
              </div>
            </Link>
          </motion.div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 !mr-2 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            <svg 
              className="w-6 h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M4 6h16M4 12h16M4 18h16" 
              />
            </svg>
          </button>
        </div>
        </nav>
      </div>

      {/* Mobile Slide-in Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden fixed inset-0 bg-black/50 z-40"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            
            {/* Slide-in Panel */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="lg:hidden fixed top-0 left-0 h-full w-3/4 bg-white z-50 shadow-2xl"
            >
              <div className="flex flex-col h-full">
                {/* Header with Logo and Close */}
                <div className="flex items-center justify-between !p-4 border-b border-gray-200">
                  <Link href="/" onClick={() => { setIsMobileMenuOpen(false); setActiveNav(""); }}>
                    <div className="flex items-center justify-center bg-white border-2 border-[#E2E4F5] rounded-2xl w-14 h-12">
                      <Image 
                        src="/levantate_logo_square.svg" 
                        alt="Levantate Labs" 
                        width={28} 
                        height={28}
                        className="w-6 h-6"
                      />
                    </div>
                  </Link>
                  <button 
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                    aria-label="Close menu"
                  >
                    <svg 
                      className="w-6 h-6" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M6 18L18 6M6 6l12 12" 
                      />
                    </svg>
                  </button>
                </div>

                {/* Navigation Links */}
                <div className="flex flex-col !p-4 gap-2 flex-1">
                  <button 
                    className={`text-base font-medium text-gray-900 hover:bg-gray-100 transition-colors !py-3 !px-4 rounded-xl text-left ${activeNav === "why" ? "bg-gray-100" : ""}`}
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      setTimeout(() => scrollToSection("why", "why"), 300);
                    }}
                  >
                    Why Us
                  </button>
                  <button 
                    className={`text-base font-medium text-gray-900 hover:bg-gray-100 transition-colors !py-3 !px-4 rounded-xl text-left ${activeNav === "what" ? "bg-gray-100" : ""}`}
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      setTimeout(() => scrollToSection("what", "what"), 300);
                    }}
                  >
                    What we do
                  </button>
                  <button 
                    className={`text-base font-medium text-gray-900 hover:bg-gray-100 transition-colors !py-3 !px-4 rounded-xl text-left ${activeNav === "work" ? "bg-gray-100" : ""}`}
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      setTimeout(() => scrollToSection("work", "work"), 300);
                    }}
                  >
                    Our Work
                  </button>
                  <button 
                    className={`text-base font-medium text-gray-900 hover:bg-gray-100 transition-colors !py-3 !px-4 rounded-xl text-left ${activeNav === "blog" ? "bg-gray-100" : ""}`}
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      setTimeout(() => scrollToSection("blog", "blog"), 300);
                    }}
                  >
                    Blog
                  </button>
                  <Link 
                    href="/careers" 
                    className={`relative text-base font-medium text-gray-900 hover:bg-gray-100 transition-colors !py-3 !px-4 rounded-xl flex items-center gap-2 ${activeNav === "careers" ? "bg-gray-100" : ""}`}
                    onClick={() => {
                      setActiveNav("careers");
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    Careers
                    <span className="text-[10px] text-green-800 font-semibold border border-green-500 rounded-full !px-1 bg-[#C4F7D4]">
                      Hiring
                    </span>
                  </Link>
                </div>

                {/* CTA Button */}
                <div className="!p-4 border-t border-gray-200">
                  <button 
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      setTimeout(() => scrollToSection("contact", "contact"), 300);
                    }}
                    className="flex items-center gap-3 w-full bg-black text-white !p-3 rounded-2xl hover:bg-gray-900 transition-all cursor-pointer"
                  >
                    <div className="w-10 h-10 bg-[#C4F7D4] rounded-lg border border-white p-1.5 flex items-center justify-center shrink-0">
                      <Image 
                        src="/levantate_logo_square.svg" 
                        alt="" 
                        width={20} 
                        height={20}
                        className="w-5 h-5"
                      />
                    </div>
                    <div className="flex flex-col text-left leading-tight">
                      <span className="text-sm font-medium">Book an intro call</span>
                      <span className="text-xs text-gray-300">Friendly chat, no pressure</span>
                    </div>
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

