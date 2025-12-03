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
      <div className="w-full flex justify-center">
        <nav className="sm:w-fit rounded-3xl shadow-[0_22px_45px_rgba(15,23,42,0.18)] border border-[#E2E4F5] bg-white backdrop-blur-md min-h-18 flex justify-center items-center">
          <div className="w-full flex items-center justify-between h-full">
          {/* Logo */}
            <Link href="/" className="shrink-0">
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
            <Link 
              href="#work" 
              className="text-xs sm:text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors whitespace-nowrap !px-2 py-2 rounded-xl h-[48px] flex items-center"
            >
              Our Work
            </Link>
            <Link 
              href="#why" 
              className="text-xs sm:text-sm font-medium text-gray-700 transition-colors whitespace-nowrap !px-2 py-2 rounded-xl hover:bg-gray-100 h-[48px] flex items-center"
            >
              Why Us
            </Link>
            <Link 
              href="#what" 
              className="text-xs sm:text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors whitespace-nowrap !px-2 py-2 rounded-xl h-[48px] flex items-center"
            >
              What we do
            </Link>
          </div>

          {/* CTA Button - Desktop */}
          <Link 
            href="#contact"
            className="hidden h-14 w-fit !px-2 !mr-2 lg:flex items-center gap-2 bg-black text-white rounded-2xl hover:bg-gray-900 transition-all shrink-0 border-2 border-[#E2E4F5]"
          >
            <div className="w-10 h-10 bg-[#C4F7D4] rounded-lg border border-white p-1.5 flex items-center justify-center">
              <Image 
                src="/levantate_logo_square.svg" 
                alt="" 
                width={20} 
                height={20}
                className="w-5 h-5"
              />
            </div>
            <div className="flex flex-col text-left leading-tight">
              <span className="text-xs sm:text-sm font-medium">Book an intro call</span>
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

