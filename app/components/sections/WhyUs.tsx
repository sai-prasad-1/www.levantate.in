"use client";

import Section from "../ui/Section";
import Image from "next/image";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { useRef } from "react";

// Component for each word with scroll-based color
const ScrollWord = ({ 
  word, 
  index, 
  totalWords, 
  scrollYProgress 
}: { 
  word: string; 
  index: number; 
  totalWords: number; 
  scrollYProgress: MotionValue<number>;
}) => {
  // Each word activates at a different scroll point
  const start = index / totalWords;
  const end = (index + 1) / totalWords;
  
  const color = useTransform(
    scrollYProgress,
    [start, end],
    ["#CACADE", "#38385B"]
  );

  return (
    <motion.span
      className="cursor-default inline-block"
      style={{ color }}
    >
      {word}&nbsp;
    </motion.span>
  );
};

const WhyUs = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 0.8", "end 0.5"]
  });

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

  const allWords = [
    { words: ["Design.", "Code.", "Trust."], break: true },
    { words: ["We", "shape", "B2B", "brands,", "SaaS,", "and"], break: true },
    { words: ["blockchain", "experiences", "that", "turn"], break: true },
    { words: ["first", "impressions", "into", "lasting"], break: true },
    { words: ["conversions."], break: false },
  ];

  // Flatten all words for indexing
  const flatWords = allWords.flatMap(line => line.words);
  const totalWords = flatWords.length;
  
  let wordIndex = 0;

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
            className="text-lg font-agile text-[#38385B]"
            variants={itemVariants}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            YOUR UNFAIR ADVANTAGE
          </motion.h1>
        </motion.div>

        <div className="text-center text-4xl font-onest leading-relaxed">
          {allWords.map((line, lineIndex) => (
            <span key={lineIndex}>
              {line.words.map((word) => {
                const currentIndex = wordIndex++;
                return (
                  <ScrollWord
                    key={currentIndex}
                    word={word}
                    index={currentIndex}
                    totalWords={totalWords}
                    scrollYProgress={scrollYProgress}
                  />
                );
              })}
              {line.break && <br />}
            </span>
          ))}
        </div>
        
      </div>
    </Section>
  );
}

export default WhyUs;