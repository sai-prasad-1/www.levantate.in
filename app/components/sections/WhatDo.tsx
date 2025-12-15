"use client";

import Section from "../ui/Section";
import Image from "next/image";
import { motion, useAnimationFrame } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import NextImage from "next/image";
import Link from "next/link";

// Team member card component
const TeamCard = ({ name, role }: { name: string; role: string }) => (
  <div className="flex items-center gap-3 bg-white rounded-2xl !px-3 !pr-6 !py-2 shadow-sm border border-[#E2E4F5] shrink-0">
    <div className="w-11 h-11 rounded-xl bg-[#CDCDDE] shrink-0" />
    <div className="flex flex-col">
      <span className="text-xs font-onest text-[#7B7B9E]">{name}</span>
      <span className="text-base font-onest font-medium text-[#38385B] whitespace-nowrap">{role}</span>
    </div>
  </div>
);

// Infinite marquee row component
const MarqueeRow = ({ 
  items, 
  direction = "left", 
  speed = 1 
}: { 
  items: { name: string; role: string }[]; 
  direction?: "left" | "right"; 
  speed?: number;
}) => {
  const [xPos, setXPos] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [itemWidth, setItemWidth] = useState(0);

  useEffect(() => {
    if (containerRef.current) {
      // Get width of one set of items
      const firstSet = containerRef.current.children[0] as HTMLElement;
      if (firstSet) {
        setItemWidth(firstSet.offsetWidth);
      }
    }
  }, [items]);

  useAnimationFrame((time, delta) => {
    if (itemWidth === 0) return;
    
    const moveAmount = (delta / 1000) * 50 * speed;
    
    if (direction === "left") {
      setXPos((prev) => {
        const newPos = prev - moveAmount;
        // Reset when we've scrolled past one full set
        if (Math.abs(newPos) >= itemWidth) {
          return newPos + itemWidth;
        }
        return newPos;
      });
    } else {
      setXPos((prev) => {
        const newPos = prev + moveAmount;
        // Reset when we've scrolled past one full set
        if (newPos >= 0) {
          return newPos - itemWidth;
        }
        return newPos;
      });
    }
  });

  return (
    <div className="overflow-hidden">
      <motion.div 
        ref={containerRef}
        className="flex gap-5"
        style={{ x: xPos }}
        initial={{ x: direction === "right" ? -itemWidth || -500 : 0 }}
      >
        {/* Render items 3 times for seamless loop */}
        {[0, 1, 2].map((setIndex) => (
          <div key={setIndex} className="flex gap-5 shrink-0">
            {items.map((item, idx) => (
              <TeamCard key={`${setIndex}-${idx}`} name={item.name} role={item.role} />
            ))}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

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
            WE DON'T JUST DELIVER<br /> WE BUILD LIKE IT'S OUR OWN
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
        {/* Cards */}
        <motion.div
          className="flex justify-center !mt-16 gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
        >
          {/* Left card */}
          <div className="w-130 h-150 bg-[#D8D8E6] border-[1.79px] border-[#C2C2D6] !p-4 rounded-2xl">
            <div className="w-full h-full flex flex-col items-start justify-start border-[1px] border-[#C3C3D6] bg-[#EAEAF2] rounded-xl">
              <div className="flex flex-col items-start justify-start !px-6 !py-10">
                <h3 className="text-xl font-onest  text-[#38385B] !mb-4">Specialists</h3>
                <h1 className="text-4xl font-onest font-medium text-[#38385B] !mb-4">Specialists<br /> Not Generalists</h1>
                <p className="text-xl font-onest text-[#38385B]">We are experts in clarity, positioning and <br />performance. No Filler, No fluff</p>
              </div>
              {/*Pattern for the dots*/}
              <div className="flex items-center justify-center h-1/2 w-full">
                <div className="relative flex items-center justify-center">
                  <div className="flex items-center gap-3.5">
                    {Array.from({ length: 17 }).map((_, i) => (
                      <div key={`h-${i}`} className="w-[14px] h-[14px] rounded-full bg-[#CDCDDE]" />
                    ))}
                  </div>

                  <div className="absolute flex flex-col items-center gap-4">
                    {Array.from({ length: 9 }).map((_, i) => (
                      <div key={`v-${i}`} className="w-[14px] h-[14px] rounded-full bg-[#CDCDDE]" />
                    ))}
                  </div>

                  <div className="absolute flex flex-col items-center gap-6">
                    <div className="flex gap-6">
                      <div className="w-[14px] h-[14px] rounded-full bg-[#CDCDDE]" />
                      <div className="w-[14px] h-[14px] rounded-full bg-[#CDCDDE]" />
                    </div>
                    <div className="flex gap-6">
                      <div className="w-[14px] h-[14px] rounded-full bg-[#CDCDDE]" />
                      <div className="w-[14px] h-[14px] rounded-full bg-[#CDCDDE]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Right card */}
          <div className="w-130 h-150 bg-[#D8D8E6] border-[1.79px] border-[#C2C2D6] !p-4 rounded-2xl">
            <div className="w-full h-full flex flex-col items-start justify-start border-[1px] border-[#C3C3D6] bg-[#EAEAF2] rounded-xl overflow-hidden">
              <div className="flex flex-col items-start justify-start !px-6 !py-10">
                <h3 className="text-xl font-onest text-[#38385B] !mb-4">Bookmarked</h3>
                <h1 className="text-4xl font-onest font-medium text-[#38385B] !mb-4">Small team.<br/>Big outcomes.</h1>
                <p className="text-xl font-onest text-[#38385B]">We bring the right people to the table.<br/>Zero bloat, Strategy, design, and dev working<br/> continuously working as agile.</p>
              </div>
              {/* Team member cards - Infinite scroll */}
              <div className="flex-1 w-full overflow-hidden">
                <div className="flex flex-col gap-3">
                  <MarqueeRow 
                    items={[
                      { name: "Christo Paul", role: "Product Designer" },
                      { name: "M Akhil P Raj", role: "Blockchain Dev" },
                      { name: "Amal Manoj", role: "AI/ML Specialist" },
                    ]}
                    direction="left"
                    speed={1}
                  />
                  <MarqueeRow 
                    items={[
                      { name: "Sai Prasad", role: "Lead Developer" },
                      { name: "Austin Simpson", role: "Protagonist" },
                      { name: "Farhan", role: "Lead Developer" },
                    ]}
                    direction="right"
                    speed={0.8}
                  />
                  <MarqueeRow 
                    items={[
                      { name: "Anoop", role: "Frontend Developer" },
                      { name: "Sai", role: "Lead Developer" },
                    ]}
                    direction="left"
                    speed={1.2}
                  />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
          className="flex justify-center !mt-8 gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
        >
          {/* Left column - Stats */}
          <div className="flex flex-col gap-6">
            {/* Stat Card 1 */}
            <div className="w-60 h-57 bg-[#D8D8E6] border-[1.79px] border-[#C2C2D6] !p-4 rounded-2xl">
              <div className="w-full h-full flex flex-col items-center justify-center border-[1px] border-[#C3C3D6] bg-white rounded-xl">
                <span className="text-6xl font-onest font-regular text-[#38385B]">8+</span>
                <span className="text-xl font-onest text-[#38385B] !mt-4">Specialists</span>
              </div>
            </div>
            {/* Stat Card 2 */}
            <div className="w-60 h-57 bg-[#D8D8E6] border-[1.79px] border-[#C2C2D6] !p-4 rounded-2xl">
              <div className="w-full h-full flex flex-col items-center justify-center border-[1px] border-[#C3C3D6] bg-white rounded-xl">
                <span className="text-6xl font-onest font-regular text-[#38385B]">99%</span>
                <span className="text-xl font-onest text-[#38385B] !mt-4">Client Retention</span>
              </div>
            </div>
          </div>
          {/* Right card - Agile Methodology */}
          <div className="w-200 h-120 bg-[#D8D8E6] border-[1.79px] border-[#C2C2D6] !p-4 rounded-2xl">
            <div className="w-full h-full flex border-[1px] border-[#C3C3D6] bg-[#EAEAF2] rounded-xl overflow-hidden">
              {/* Content */}
              <div className="flex flex-col items-start justify-start !px-8 !py-10 w-3/4">
                <h3 className="text-xl font-onest text-[#38385B] tracking-wider !mb-4">AGILE METHODOLOGY</h3>
                <h1 className="text-4xl font-onest font-medium text-[#38385B] !mb-6 leading-tight">Strategy<br/>and conversion focused.</h1>
                <p className="text-xl font-onest text-[#5A5A7A] !mb-6 leading-relaxed">
                  Product is only powerful when it moves its metrics. Everything we create is crafted to convert, retain and grow.
                </p>
                <p className="text-xl font-onest text-[#5A5A7A] leading-relaxed">
                  We're here for version 1, and version 10. Continuous<br/> progress. <span className="font-semibold text-[#38385B]">No complacency. Built to evolve.</span>
                </p>
              </div>
              {/* Dot pattern */}
              <div className="w-1/4 flex items-center justify-end">
                <div className="grid grid-cols-7 gap-4">
                  {Array.from({ length: 126 }).map((_, i) => (
                    <div key={i} className="w-[10px] h-[10px] rounded-full bg-[#CDCDDE]" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="flex justify-center !mt-8 gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
        >
          {/* Not an agency card */}
          <div className="w-266 bg-[#D8D8E6] border-[1.79px] border-[#C2C2D6] !p-4 rounded-2xl">
            <div className="w-full h-full flex items-center gap-8 border-[1px] border-[#C3C3D6] bg-white rounded-xl !px-4 !py-4">
              {/* Logo */}
              <div className="w-36 h-36 bg-[#E5E9F5] border-[1px] border-[#C2C2D6] rounded-xl flex items-center justify-center shrink-0">
                <Image 
                  src="/levantate_logo_square.svg" 
                  alt="Levantate Logo" 
                  width={72} 
                  height={72}
                />
              </div>
              {/* Title */}
              <h2 className="text-3xl font-onest font-medium text-[#38385B] whitespace-nowrap">
                We are not<br/>an agency
              </h2>
              {/* Divider */}
              <div className="h-20 w-[1px] bg-[#C3C3D6]" />
              {/* Description */}
              <p className="text-2xl font-onest text-[#38385B] leading-relaxed">
                We're a lean, independent studio doing good work for good people. Without the overhead, handoffs, or hierarchy.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="relative flex flex-col justify-center items-center !mt-42 gap-6 !mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
        >
          {/* Background gradient */}
          <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none rotate-180">
            <NextImage 
              src="/images/section-gradient.svg" 
              alt="Section Background" 
              width={1000} 
              height={1000}
              className="object-contain"
            />
          </div>
          {/* Content */}
          <h3 className="relative z-10 text-4xl font-onest text-black font-medium text-center !mb-4">Let's build something sharp, strategic, and <br/>impossible to overlook.</h3>
          <div className="flex items-center justify-center z-10 mt-8 gap-4">
          <Image 
              src="/logo-drawn.png" 
              alt="" 
              width={20} 
              height={20}
              className="w-4 h-4"
            />
            <Image 
              src="/logo-drawn.png" 
              alt="" 
              width={30} 
              height={30}
              className="w-7 h-7"
            />
            <Image 
              src="/logo-drawn.png" 
              alt="" 
              width={40} 
              height={40}
              className="w-10 h-10"
            />
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Link 
              href="#contact"
              className=" h-14 w-fit !px-2 !pr-4 flex items-center gap-2 bg-black text-white rounded-2xl hover:bg-gray-900 transition-all shrink-0 border-2 border-[#E2E4F5]"
            >
              <motion.div 
                className="w-10 h-10 bg-[#C4F7D4] rounded-lg border border-white p-1.5 flex items-center justify-center"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <Image 
                  src="/levantate_logo_square.svg" 
                  alt="" 
                  width={20} 
                  height={20}
                  className="w-5 h-5"
                />
              </motion.div>
              <div className="flex flex-col text-left leading-tight">
                <span className="text-sm font-medium font-onest">Book an intro call</span>
                <span className="text-xs text-gray-300 font-onest">Friendly chat, no pressure</span>
      </div>
            </Link>
          </motion.div>
          <Image 
              src="/logo-drawn.png" 
              alt="" 
              width={40} 
              height={40}
              className="w-10 h-10"
            />
            <Image 
              src="/logo-drawn.png" 
              alt="" 
              width={40} 
              height={40}
              className="w-7 h-7"
            />
            <Image 
              src="/logo-drawn.png" 
              alt="" 
              width={40} 
              height={40}
              className="w-4 h-4"
            />
          </div>
        </motion.div>
      </div>
    </Section>
  );
}

export default WhatDo;