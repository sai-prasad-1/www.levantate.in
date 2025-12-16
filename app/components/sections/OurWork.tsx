"use client";

import Section from "../ui/Section";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { useRef, useState } from "react";

// Process card component with hover effect
const ProcessCard = ({ 
  children, 
  className = "" 
}: { 
  children: React.ReactNode; 
  className?: string;
}) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div 
      className={`hover:bg-[#D8D8E6] hover:border-[1.79px] border-[#C2C2D6] !p-2 sm:!p-3 md:!p-4 rounded-2xl sm:rounded-3xl md:rounded-4xl transition-colors duration-300 ${isHovered ? 'bg-[#C8C8DA]' : ''} ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <div className="w-full h-full border-[1px] border-[#C3C3D6] bg-white rounded-xl sm:rounded-2xl md:rounded-3xl">
        {children}
      </div>
    </motion.div>
  );
};


const OurWork = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cloudRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: cloudRef,
    offset: ["start end", "end start"]
  });
  
  // Animate clouds: start at edges, move outward as scroll progresses
  const cloudLeftX = useTransform(scrollYProgress, [0, 0.4], ["0%", "-50%"]);
  const cloudRightX = useTransform(scrollYProgress, [0, 0.4], ["0%", "50%"]);
  // Logo fades in, then dissolves out
  const logoOpacity = useTransform(scrollYProgress, [0.15, 0.35, 0.6, 0.8], [0, 1, 1, 0]);
  const logoScale = useTransform(scrollYProgress, [0.15, 0.35, 0.6, 0.8], [0.5, 1, 1, 1.2]);

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
    <Section showGlassDecor className="!py-12 sm:!py-20 md:!py-30 flex items-center justify-center px-4 sm:px-6 md:px-0">
      <div ref={sectionRef} className="w-full">
        
        {/* Cloud reveal animation - Now first */}
        <div 
          ref={cloudRef}
          className="relative flex justify-center items-center h-[200px] sm:h-[350px] md:h-[600px] overflow-hidden md:overflow-visible !mb-16 sm:!mb-24 md:!mb-32"
        >
          {/* Left cloud - starts at left edge, goes further left */}
          <motion.div 
            className="absolute left-[-5%] sm:left-[-10%] md:left-[-20%] z-10"
            style={{ x: cloudLeftX }}
          >
            <Image 
              src="/images/cloud-left.png" 
              alt="Cloud" 
              width={2000} 
              height={2000}
              className="object-contain w-[45vw] sm:w-[55vw] md:min-w-[75vw]"
            />
          </motion.div>
          
          {/* Right cloud - starts at right edge, goes further right */}
          <motion.div 
            className="absolute right-[-5%] sm:right-[-10%] md:right-[-20%] z-10"
            style={{ x: cloudRightX }}
          >
            <Image 
              src="/images/cloud-right.png" 
              alt="Cloud" 
              width={2000} 
              height={2000}
              className="object-contain w-[45vw] sm:w-[55vw] md:min-w-[75vw]"
            />
          </motion.div>
          
          {/* Logo in center - fades in then dissolves out */}
          <motion.div 
            className="z-0"
            style={{ opacity: logoOpacity, scale: logoScale }}
          >
            <Image 
              src="/levantate_logo_square.svg" 
              alt="Logo" 
              width={100} 
              height={100}
              className="w-10 h-10 sm:w-16 sm:h-16 md:w-[100px] md:h-[100px]"
            />
          </motion.div>
        </div>

        {/* Title section */}
        <motion.div 
          className="flex flex-col items-center justify-center gap-3 sm:gap-4 md:gap-6 !mb-8 sm:!mb-10 md:!mb-15"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <Image 
            src="/logo-drawn.png" 
            alt="" 
            width={40} 
            height={40}
            className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10"
          />
          <h1 className="text-xs sm:text-sm md:text-lg font-agile text-[#38385B]">
            LET&apos;S GET STARTED
          </h1>
        </motion.div>

        {/* Process Cards */}
        <motion.div 
          className="flex flex-col md:flex-row justify-center items-center gap-4 sm:gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          {/* Card 1 - Let's have a chat */}
          <motion.div variants={itemVariants} transition={{ duration: 0.5, ease: "easeOut" }} className="w-full md:w-auto">
            <ProcessCard className="w-full md:w-80 h-auto md:h-100">
              <div className="flex flex-col h-full !p-4 sm:!p-6">
                {/* Header */}
                <div className="flex justify-between items-start !mb-4 sm:!mb-6">
                  <span className="text-xs sm:text-sm font-agile text-[#38385B] tracking-wider">NOW</span>
                </div>
                {/* Content */}
                <h2 className="text-lg sm:text-xl md:text-2xl font-onest font-semibold text-[#38385B] !mb-2 sm:!mb-4">Let&apos;s have a chat</h2>
                <p className="text-sm sm:text-base font-onest text-[#5A5A7A] !mb-4 sm:!mb-6 leading-relaxed">
                  We&apos;ll talk through your goals, blockers and what you actually need. No fluff. No 10-page briefs
                </p>
                {/* CTA Button */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="!mt-auto"
                >
                    <div className="w-full flex justify-center items-center">
                    <button 
                      onClick={() => {}}
                      className="h-10 sm:h-12 md:h-14 w-fit !px-2 flex items-center justify-center sm:justify-start gap-2 bg-black text-white rounded-xl sm:rounded-2xl hover:bg-gray-900 transition-all shrink-0 border-2 border-[#E2E4F5] cursor-pointer"
                    >
                      <div className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 bg-[#C4F7D4] rounded-md sm:rounded-lg border border-white p-1 sm:p-1.5 flex items-center justify-center">
                        <Image 
                          src="/levantate_logo_square.svg" 
                          alt="" 
                          width={20} 
                          height={20}
                          className="w-4 h-4 sm:w-5 sm:h-5"
                        />
                      </div>
                      <div className="flex flex-col text-left leading-tight">
                        <span className="text-xs sm:text-sm font-medium">Book an intro call</span>
                      </div>
                    </button>
                  </div>
                </motion.div>
                <p className="text-[10px] sm:text-xs font-onest text-black !mt-3 sm:!mt-4 text-center">
                  Only 20-30 min<br/>Friendly chat, no pressure
                </p>
              </div>
            </ProcessCard>
          </motion.div>

          {/* Card 2 - Receive your proposal */}
          <motion.div variants={itemVariants} transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }} className="w-full md:w-auto">
            <ProcessCard className="w-full md:w-80 h-auto md:h-100">
              <div className="flex flex-col h-full !p-4 !pb-0 sm:!p-6 sm:!pb-0">
                {/* Header */}
                <div className="flex justify-between items-start !mb-4 sm:!mb-6">
                  <span className="text-xs sm:text-sm font-agile text-[#38385B] tracking-wider">1-2 DAYS</span>
                </div>
                {/* Content */}
                <h2 className="text-lg sm:text-xl md:text-2xl font-onest font-semibold text-[#38385B] !mb-2">Receive your proposal</h2>
                <p className="text-sm sm:text-base font-onest text-[#5A5A7A] !mb-4 sm:!mb-6 leading-relaxed">
                  Get a clear, strategic plan within 1-2 days. No jargon. No guesswork. Just a clear path forward.
                </p>
                {/* Placeholder UI */}
                <div className="!mt-auto">
                  <Image 
                    src="/Frame1.svg" 
                    alt="Proposal preview" 
                    width={259} 
                    height={70}
                    className="w-full"
                  />
                </div>
              </div>
            </ProcessCard>
          </motion.div>

          {/* Card 3 - Kick off your project */}
          <motion.div variants={itemVariants} transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }} className="w-full md:w-auto">
            <ProcessCard className="w-full md:w-80 h-auto md:h-100">
              <div className="flex flex-col h-full !p-4 sm:!p-6 !pb-0 sm:!pb-0">
                {/* Header */}
                <div className="flex justify-start items-start !mb-4 sm:!mb-6">
                    <Image 
                      src="/tick.svg" 
                      alt="Tick" 
                      width={32} 
                      height={32}
                      className="w-6 h-6 sm:w-8 sm:h-8"
                    />
                  </div>
                {/* Content */}
                <h2 className="text-lg sm:text-xl md:text-2xl font-onest font-semibold text-[#38385B] !mb-2 sm:!mb-4">Kick off your project</h2>
                <p className="text-sm sm:text-base font-onest text-[#5A5A7A] !mb-4 sm:!mb-6 leading-relaxed">
                  We get moving fast with weekly checkins, async updates, and zero black holes
                </p>
                {/* Placeholder UI */}
                <div className="!mt-auto bottom-0">
                  <Image 
                    src="/Frame2.svg" 
                    alt="Project preview" 
                    width={259} 
                    height={70}
                    className="w-full"
                  />
                </div>
              </div>
            </ProcessCard>
          </motion.div>
        </motion.div>
        
      </div>
    </Section>
  );
}

export default OurWork;