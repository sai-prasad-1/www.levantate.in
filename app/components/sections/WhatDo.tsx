"use client";

import Section from "../ui/Section";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";

// Font cycling text component
const FontCycleText = ({ text }: { text: string }) => {
  const fonts = ["font-onest", "font-agile", "font-sans"];
  const [currentFontIndex, setCurrentFontIndex] = useState(0);
  const [letterFonts, setLetterFonts] = useState<number[]>(
    Array(text.length).fill(0)
  );
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const cycleLetters = async () => {
      setIsTransitioning(true);
      const nextFontIndex = (currentFontIndex + 1) % fonts.length;

      // Change one letter at a time
      for (let i = 0; i < text.length; i++) {
        await new Promise((resolve) => setTimeout(resolve, 50));
        setLetterFonts((prev) => {
          const newFonts = [...prev];
          newFonts[i] = nextFontIndex;
          return newFonts;
        });
      }

      setCurrentFontIndex(nextFontIndex);
      setIsTransitioning(false);
    };

    const interval = setInterval(() => {
      if (!isTransitioning) {
        cycleLetters();
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [currentFontIndex, isTransitioning, text.length, fonts.length]);

  return (
    <div 
      className="relative flex items-center justify-center"
      style={{ 
        width: '600px', 
        height: '80px',
        padding: '24px 48px',
      }}
    >
      {/* Corner brackets - L shaped, only corners */}
      {/* Top-left */}
      <div
        className="absolute top-0 left-0 w-5 h-5"
        style={{
          borderTop: "5px solid #AEAEC9",
          borderLeft: "5px solid #AEAEC9",
        }}
      />
      {/* Top-right */}
      <div
        className="absolute top-0 right-0 w-5 h-5"
        style={{
          borderTop: "5px solid #AEAEC9",
          borderRight: "5px solid #AEAEC9",
        }}
      />
      {/* Bottom-left */}
      <div
        className="absolute bottom-0 left-0 w-5 h-5"
        style={{
          borderBottom: "5px solid #AEAEC9",
          borderLeft: "5px solid #AEAEC9",
        }}
      />
      {/* Bottom-right */}
      <div
        className="absolute bottom-0 right-0 w-5 h-5"
        style={{
          borderBottom: "5px solid #AEAEC9",
          borderRight: "5px solid #AEAEC9",
        }}
      />

      {/* Text with cycling fonts - centered in fixed container */}
      <span 
        className="text-4xl md:text-5xl text-[#38385B] font-medium whitespace-nowrap flex items-end"
        style={{ lineHeight: '1.2', height: '60px', paddingBottom: '5px' }}
      >
        {text.split("").map((letter, index) => {
          const currentFont = fonts[letterFonts[index]];
          // Agile font has different baseline, push it down more
          const verticalOffset = currentFont === "font-agile" ? "8px" : "0px";
          
          return (
            <span
              key={index}
              className={`${currentFont} transition-all duration-200`}
              style={{ 
                minWidth: letter === " " ? "0.3em" : "auto",
                lineHeight: '1.2',
                position: 'relative',
                top: verticalOffset,
              }}
            >
              {letter}
            </span>
          );
        })}
      </span>
    </div>
  );
};

// Team member card component
const TeamMember = ({ name, role }: { name: string; role: string }) => (
  <div 
    className="flex items-center gap-3 px-4 py-3 rounded-xl shrink-0"
    style={{ background: 'rgba(255, 255, 255, 0.7)' }}
  >
    <div 
      className="w-10 h-10 rounded-full bg-gray-300 overflow-hidden"
      style={{ background: '#C5C5D5' }}
    >
      {/* Placeholder avatar */}
      <div className="w-full h-full flex items-center justify-center text-gray-500 text-sm font-medium">
        {name.charAt(0)}
      </div>
    </div>
    <div className="flex flex-col">
      <span className="text-[#8A8A9A] text-sm">{name}</span>
      <span className="text-[#1a1a2e] font-semibold text-sm whitespace-nowrap">{role}</span>
    </div>
  </div>
);

const WhatDo = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };





  return (
    <Section noBackgroundImage showGlassDecor className="!py-30 flex items-center justify-center">
      <div ref={sectionRef}>
        <motion.div 
          className="flex flex-col items-center justify-center gap-6 !mb-15"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} transition={{ duration: 0.5, ease: "easeOut" }}>
            <Image 
              src="/logo-drawn.png" 
              alt="" 
              width={40} 
              height={40}
              className="w-10 h-10"
            />
          </motion.div>
          <motion.h1 
            className="text-lg font-agile text-[#38385B] text-center"
            variants={itemVariants}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            WE DON'T JUST DELIVER<br/> WE BUILD LIKE IT'S OUR OWN
          </motion.h1>
        </motion.div>

        {/* Font cycling text with corner brackets */}
        <motion.div
          className="flex justify-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
        >
          <FontCycleText text="Results you can feel" />
        </motion.div>

      </div>
    </Section>
  );
}

export default WhatDo;