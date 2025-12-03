"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-8 left-0 right-0 z-50"
    >
      <div className="">
        <nav className="w-full rounded-full shadow-[0_22px_45px_rgba(15,23,42,0.18)] border border-[#E2E4F5] bg-white backdrop-blur-md min-h-16 flex justify-center items-center">
          <div className="flex items-center justify-between h-full gap-3 px-11">
          {/* Logo */}
            <Link href="/" className="shrink-0 h-8 bg-amber-700">
              <div className="flex items-center justify-center mr-6  bg-white border border-[#E2E4F5] shadow-sm px-3 py-2 h-8 ">
                <Image 
                  src="/levantate_logo_square.svg" 
                  alt="Levantate Labs" 
                  width={32} 
                  height={32}
                  className="w-8 h-8"
                />
              </div>
            </Link>

          {/* Navigation Links - Desktop */}
          <div className="hidden lg:flex items-center gap-3 xl:gap-4 flex-1 justify-center">
            <Link 
              href="#work" 
              className="text-xs sm:text-sm font-medium text-gray-900 hover:text-gray-700 transition-colors whitespace-nowrap px-4 py-2 rounded-full hover:bg-white/80"
            >
              Our Work
            </Link>
            <Link 
              href="#why" 
              className="text-xs sm:text-sm font-medium text-gray-900 transition-colors whitespace-nowrap px-5 py-2 rounded-full bg-white shadow-sm border border-[#E2E4F5]"
            >
              Why Us
            </Link>
            <Link 
              href="#what" 
              className="text-xs sm:text-sm font-medium text-gray-900 hover:text-gray-700 transition-colors whitespace-nowrap px-4 py-2 rounded-full hover:bg-white/80"
            >
              What we do
            </Link>
          </div>

          {/* Divider - Desktop */}
          <div className="hidden lg:block h-12 w-px bg-gray-300"></div>

          {/* CTA Button - Desktop */}
          <Link 
            href="#contact"
            className="hidden lg:flex items-center gap-3 bg-black text-white pl-2 pr-4 py-1.5 rounded-full hover:bg-gray-900 transition-all hover:scale-105 shrink-0 border-2 border-white"
          >
            <Image 
              src="/levantate_logo_square.svg" 
              alt="" 
              width={28} 
              height={28}
              className="invert rounded-full bg-[#C4F7D4] p-1"
            />
            <div className="flex flex-col text-left leading-tight">
              <span className="text-xs sm:text-sm font-semibold">Book an intro call</span>
              <span className="text-[10px] sm:text-xs text-gray-300">Friendly chat, no pressure</span>
            </div>
          </Link>

          {/* Mobile CTA Button */}
          <Link 
            href="#contact"
            className="lg:hidden bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors text-sm font-medium shrink-0"
          >
            Book a call
          </Link>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            <svg 
              className="w-6 h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M6 18L18 6M6 6l12 12" 
                />
              ) : (
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M4 6h16M4 12h16M4 18h16" 
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-gray-200 px-6 py-4"
          >
            <div className="flex flex-col gap-4">
              <Link 
                href="#work" 
                className="text-sm font-medium text-gray-900 hover:text-gray-600 transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Our Work
              </Link>
              <Link 
                href="#why" 
                className="text-sm font-medium text-gray-900 hover:text-gray-600 transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Why Us
              </Link>
              <Link 
                href="#what" 
                className="text-sm font-medium text-gray-900 hover:text-gray-600 transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                What we do
              </Link>
            </div>
          </motion.div>
        )}
        </nav>
      </div>
    </motion.header>
  );
}

