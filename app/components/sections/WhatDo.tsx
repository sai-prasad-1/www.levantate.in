"use client";

import Section from "../ui/Section";
import { InteractiveDotGridCross, InteractiveDotGrid } from "../ui/InteractiveDots";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import NextImage from "next/image";
import Link from "next/link";

// Team member card component
const TeamCard = ({ name, role, image }: { name: string; role: string, image: string }) => (
  <div className="flex items-center gap-2 sm:gap-3 bg-white rounded-xl sm:rounded-2xl !px-2 sm:!px-3 !pr-4 sm:!pr-6 !py-1.5 sm:!py-2 shadow-sm border border-[#E2E4F5] shrink-0">
    <Image src={image} alt={name} width={44} height={44} className="w-8 h-8 sm:w-11 sm:h-11 rounded-lg sm:rounded-xl bg-[#CDCDDE] shrink-0 object-cover" />
    <div className="flex flex-col">
      <span className="text-[10px] sm:text-xs font-onest text-[#7B7B9E]">{name}</span>
      <span className="text-xs sm:text-base font-onest font-medium text-[#38385B] whitespace-nowrap">{role}</span>
    </div>
  </div>
);

// Smooth back-and-forth marquee row component
const MarqueeRow = ({ 
  items, 
  startDirection = "left",
  speed = 15
}: { 
  items: { name: string; role: string, image: string }[]; 
  startDirection?: "left" | "right";
  speed?: number;
}) => {
  return (
    <div className="overflow-hidden">
      <motion.div 
        className="flex gap-3 sm:gap-5"
        initial={{ x: startDirection === "left" ? "0%" : "-30%" }}
        animate={{
          x: startDirection === "left" ? ["0%", "-30%"] : ["-30%", "0%"]
        }}
        transition={{
          x: {
            duration: speed,
            repeat: Infinity,
            ease: "easeInOut",
            repeatType: "reverse"
          }
        }}
      >
        {/* Render items twice for enough content */}
        {[0, 1].map((setIndex) => (
          <div key={setIndex} className="flex gap-3 sm:gap-5 shrink-0">
            {items.map((item, idx) => (
              <TeamCard key={`${setIndex}-${idx}`} name={item.name} role={item.role} image={item.image} />
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
      className="relative flex items-center justify-center w-full max-w-[300px] sm:max-w-[450px] md:max-w-[600px] h-[50px] sm:h-[65px] md:h-[80px] !p-3 sm:!p-4 md:!p-6"
    >
      {/* Corner brackets - L shaped, only corners */}
      {/* Top-left */}
      <div
        className="absolute top-0 left-0 w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5"
        style={{
          borderTop: "3px solid #AEAEC9",
          borderLeft: "3px solid #AEAEC9",
        }}
      />
      {/* Top-right */}
      <div
        className="absolute top-0 right-0 w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5"
        style={{
          borderTop: "3px solid #AEAEC9",
          borderRight: "3px solid #AEAEC9",
        }}
      />
      {/* Bottom-left */}
      <div
        className="absolute bottom-0 left-0 w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5"
        style={{
          borderBottom: "3px solid #AEAEC9",
          borderLeft: "3px solid #AEAEC9",
        }}
      />
      {/* Bottom-right */}
      <div
        className="absolute bottom-0 right-0 w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5"
        style={{
          borderBottom: "3px solid #AEAEC9",
          borderRight: "3px solid #AEAEC9",
        }}
      />

      {/* Text with cycling fonts - centered in fixed container */}
      <span
        className="text-xl sm:text-3xl md:text-4xl lg:text-5xl text-[#38385B] font-medium whitespace-nowrap flex items-end"
        style={{ lineHeight: '1.2' }}
      >
        {text.split("").map((letter, index) => {
          const currentFont = fonts[letterFonts[index]];
          // Agile font has different baseline, push it down more
          const verticalOffset = currentFont === "font-agile" ? "4px" : "0px";

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
    <Section noBackgroundImage showGlassDecor className="!py-12 sm:!py-20 md:!py-30 flex items-center justify-center px-4 sm:px-6 md:px-0">
      <div ref={sectionRef} className="w-full">
        <motion.div 
          className="flex flex-col items-center justify-center gap-3 sm:gap-4 md:gap-6 !mb-8 sm:!mb-10 md:!mb-15"
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
              className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10"
            />
          </motion.div>
          <motion.h1 
            className="text-xs sm:text-sm md:text-lg font-agile text-[#38385B] text-center"
            variants={itemVariants}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            WE DON&apos;T JUST DELIVER<br /> WE BUILD LIKE IT&apos;S OUR OWN
          </motion.h1>
        </motion.div>

        {/* Font cycling text with corner brackets */}
        <motion.div
          className="flex justify-center !mt-8 sm:!mt-12 md:!mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
        >
          <FontCycleText text="Results you can feel" />
        </motion.div>
        {/* Cards */}
        <motion.div
          className="flex flex-col md:flex-row justify-center !mt-8 sm:!mt-12 md:!mt-16 gap-4 sm:gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
        >
          {/* Left card */}
          <div className="w-full md:w-130 h-auto md:h-150 bg-[#D8D8E6] border-[1.79px] border-[#C2C2D6] !p-2 sm:!p-4 rounded-xl sm:rounded-2xl">
            <div className="w-full h-full flex flex-col items-start justify-start border-[1px] border-[#C3C3D6] bg-[#EAEAF2] rounded-lg sm:rounded-xl">
              <div className="flex flex-col items-start justify-start !px-4 sm:!px-6 !py-6 sm:!py-10">
                <h3 className="text-sm sm:text-lg md:text-xl font-onest text-[#38385B] !mb-2 sm:!mb-4">Specialists</h3>
                <h1 className="text-xl sm:text-2xl md:text-4xl font-onest font-medium text-[#38385B] !mb-2 sm:!mb-4">Specialists<br /> Not Generalists</h1>
                <p className="text-sm sm:text-base md:text-xl font-onest text-[#38385B]">We are experts in clarity, positioning and performance. No Filler, No fluff</p>
              </div>
              {/*Pattern for the dots - interactive on hover*/}
              <InteractiveDotGridCross />
            </div>
          </div>
          {/* Right card */}
          <div className="w-full md:w-130 h-auto md:h-150 bg-[#D8D8E6] border-[1.79px] border-[#C2C2D6] !p-2 sm:!p-4 rounded-xl sm:rounded-2xl">
            <div className="w-full h-full flex flex-col items-start justify-start border-[1px] border-[#C3C3D6] bg-[#EAEAF2] rounded-lg sm:rounded-xl overflow-hidden">
              <div className="flex flex-col items-start justify-start !px-4 sm:!px-6 !py-6 sm:!py-10">
                <h3 className="text-sm sm:text-lg md:text-xl font-onest text-[#38385B] !mb-2 sm:!mb-4">Bookmarked</h3>
                <h1 className="text-xl sm:text-2xl md:text-4xl font-onest font-medium text-[#38385B] !mb-2 sm:!mb-4">Small team.<br/>Big outcomes.</h1>
                <p className="text-sm sm:text-base md:text-xl font-onest text-[#38385B]">We bring the right people to the table. Zero bloat, Strategy, design, and dev working continuously as agile.</p>
              </div>
              {/* Team member cards - Back and forth scroll */}
              <div className="flex-1 w-full overflow-hidden !pb-4">
                <div className="flex flex-col gap-2 sm:gap-3">
                  <MarqueeRow 
                    items={[
                      { name: "Christo Paul", role: "Product Designer", image: "/team/Christo.jpeg" },
                      { name: "M Akhil P Raj", role: "Blockchain Dev", image: "/team/Akhil.jpeg" },
                      { name: "Amal Manoj", role: "AI/ML Specialist", image: "/team/Amal.jpeg" },
                    ]}
                    startDirection="left"
                    speed={12}
                  />
                  <MarqueeRow 
                    items={[
                      { name: "Sai Prasad", role: "Lead Developer", image: "/team/Sai.jpeg" },
                      { name: "Austin Simpson", role: "Product Manager", image: "/team/Austin.jpeg" },
                      { name: "Farhan", role: "Backend Developer", image: "/team/Farhan.jpeg" },
                    ]}
                    startDirection="right"
                    speed={14}
                  />
                  <MarqueeRow 
                    items={[
                      { name: "Anoop", role: "Frontend Developer", image: "/team/Anoop.jpeg" },
                      { name: "Sai", role: "Lead Developer", image: "/team/Sai.jpeg" },
                    ]}
                    startDirection="left"
                    speed={10}
                  />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
          className="flex flex-col md:flex-row justify-center !mt-4 sm:!mt-6 md:!mt-8 gap-4 sm:gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
        >
          {/* Left column - Stats */}
          <div className="flex flex-row md:flex-col gap-4 sm:gap-6">
            {/* Stat Card 1 */}
            <div className="flex-1 md:w-60 h-32 sm:h-40 md:h-57 bg-[#D8D8E6] border-[1.79px] border-[#C2C2D6] !p-2 sm:!p-4 rounded-xl sm:rounded-2xl">
              <div className="w-full h-full flex flex-col items-center justify-center border-[1px] border-[#C3C3D6] bg-white rounded-lg sm:rounded-xl">
                <span className="text-3xl sm:text-4xl md:text-6xl font-onest font-regular text-[#38385B]">8+</span>
                <span className="text-sm sm:text-base md:text-xl font-onest text-[#38385B] !mt-2 sm:!mt-4">Specialists</span>
              </div>
            </div>
            {/* Stat Card 2 */}
            <div className="flex-1 md:w-60 h-32 sm:h-40 md:h-57 bg-[#D8D8E6] border-[1.79px] border-[#C2C2D6] !p-2 sm:!p-4 rounded-xl sm:rounded-2xl">
              <div className="w-full h-full flex flex-col items-center justify-center border-[1px] border-[#C3C3D6] bg-white rounded-lg sm:rounded-xl">
                <span className="text-3xl sm:text-4xl md:text-6xl font-onest font-regular text-[#38385B]">99%</span>
                <span className="text-sm sm:text-base md:text-xl font-onest text-[#38385B] !mt-2 sm:!mt-4">Client Retention</span>
              </div>
            </div>
          </div>
          {/* Right card - Agile Methodology */}
          <div className="w-full md:w-200 h-auto md:h-120 bg-[#D8D8E6] border-[1.79px] border-[#C2C2D6] !p-2 sm:!p-4 rounded-xl sm:rounded-2xl">
            <div className="w-full h-full flex flex-col md:flex-row border-[1px] border-[#C3C3D6] bg-[#EAEAF2] rounded-lg sm:rounded-xl overflow-hidden">
              {/* Content */}
              <div className="flex flex-col items-start justify-start !px-4 sm:!px-6 md:!px-8 !py-6 sm:!py-8 md:!py-10 w-full md:w-3/4">
                <h3 className="text-xs sm:text-sm md:text-xl font-onest text-[#38385B] tracking-wider !mb-2 sm:!mb-4">AGILE METHODOLOGY</h3>
                <h1 className="text-xl sm:text-2xl md:text-4xl font-onest font-medium text-[#38385B] !mb-3 sm:!mb-6 leading-tight">Strategy<br/>and conversion focused.</h1>
                <p className="text-sm sm:text-base md:text-xl font-onest text-[#5A5A7A] !mb-3 sm:!mb-6 leading-relaxed">
                  Product is only powerful when it moves its metrics. Everything we create is crafted to convert, retain and grow.
                </p>
                <p className="text-sm sm:text-base md:text-xl font-onest text-[#5A5A7A] leading-relaxed">
                  We&apos;re here for version 1, and version 10. Continuous progress. <span className="font-semibold text-[#38385B]">No complacency. Built to evolve.</span>
                </p>
              </div>
              {/* Dot pattern - Hidden on mobile */}
              <InteractiveDotGrid 
                count={126} 
                cols={7} 
                gap="gap-4" 
                containerClassName="hidden md:flex w-1/4 items-center justify-end" 
              />
            </div>
          </div>
        </motion.div>

        <motion.div
          className="flex justify-center !mt-4 sm:!mt-6 md:!mt-8 gap-4 sm:gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
        >
          {/* Not an agency card */}
          <div className="w-full md:w-266 bg-[#D8D8E6] border-[1.79px] border-[#C2C2D6] !p-2 sm:!p-4 rounded-xl sm:rounded-2xl">
            <div className="w-full h-full flex flex-col sm:flex-row items-center gap-4 sm:gap-6 md:gap-8 border-[1px] border-[#C3C3D6] bg-white rounded-lg sm:rounded-xl !px-3 sm:!px-4 !py-4 sm:!py-4">
              {/* Logo */}
              <div className="w-20 h-20 sm:w-28 sm:h-28 md:w-36 md:h-36 bg-[#E5E9F5] border-[1px] border-[#C2C2D6] rounded-lg sm:rounded-xl flex items-center justify-center shrink-0">
                <Image 
                  src="/levantate_logo_square.svg" 
                  alt="Levantate Logo" 
                  width={72} 
                  height={72}
                  className="w-10 h-10 sm:w-14 sm:h-14 md:w-[72px] md:h-[72px]"
                />
              </div>
              {/* Title */}
              <h2 className="text-xl sm:text-2xl md:text-3xl font-onest font-medium text-[#38385B] text-center sm:text-left whitespace-nowrap">
                We are not<br/>an agency
              </h2>
              {/* Divider - Hidden on mobile */}
              <div className="hidden sm:block h-16 md:h-20 w-[1px] bg-[#C3C3D6]" />
              {/* Description */}
              <p className="text-sm sm:text-lg md:text-2xl font-onest text-[#38385B] leading-relaxed text-center sm:text-left">
                We&apos;re a lean, independent studio doing good work for good people. Without the overhead, handoffs, or hierarchy.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="relative flex flex-col justify-center items-center !mt-16 sm:!mt-24 md:!mt-42 gap-4 sm:gap-6 !mb-8 sm:!mb-12 md:!mb-16"
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
          <h3 className="relative z-10 text-xl sm:text-2xl md:text-4xl font-onest text-black font-medium text-center !mb-2 sm:!mb-4 px-2">Let&apos;s build something sharp, strategic, and <br className="hidden sm:block"/>impossible to overlook.</h3>
          <div className="flex items-center justify-center z-10 !mt-4 sm:!mt-6 md:!mt-8 gap-2 sm:gap-3 md:gap-4">
            <Image 
              src="/logo-drawn.png" 
              alt="" 
              width={20} 
              height={20}
              className="w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4  sm:block"
            />
            <Image 
              src="/logo-drawn.png" 
              alt="" 
              width={30} 
              height={30}
              className="w-4 h-4 sm:w-5 sm:h-5 md:w-7 md:h-7  sm:block"
            />
            <Image 
              src="/logo-drawn.png" 
              alt="" 
              width={40} 
              height={40}
              className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10"
            />
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Link 
                href="#contact"
                className="h-12 sm:h-14 w-fit !px-2 !pr-3 sm:!pr-4 flex items-center gap-2 bg-black text-white rounded-xl sm:rounded-2xl hover:bg-gray-900 transition-all shrink-0 border-2 border-[#E2E4F5]"
              >
                <motion.div 
                  className="w-8 h-8 sm:w-10 sm:h-10 bg-[#C4F7D4] rounded-md sm:rounded-lg border border-white p-1 sm:p-1.5 flex items-center justify-center"
                  whileHover={{ rotate: 360 }}
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
            <Image 
              src="/logo-drawn.png" 
              alt="" 
              width={40} 
              height={40}
              className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10"
            />
            <Image 
              src="/logo-drawn.png" 
              alt="" 
              width={40} 
              height={40}
              className="w-4 h-4 sm:w-5 sm:h-5 md:w-7 md:h-7  sm:block"
            />
            <Image 
              src="/logo-drawn.png" 
              alt="" 
              width={40} 
              height={40}
              className="w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4  sm:block"
            />
          </div>
        </motion.div>
      </div>
    </Section>
  );
}

export default WhatDo;