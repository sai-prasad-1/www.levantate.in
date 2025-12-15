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
      className={`hover:bg-[#D8D8E6] hover:border-[1.79px] border-[#C2C2D6] !p-4 rounded-4xl transition-colors duration-300 ${isHovered ? 'bg-[#C8C8DA]' : ''} ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <div className="w-full h-full border-[1px] border-[#C3C3D6] bg-white rounded-3xl">
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
    offset: ["start end", "center center"]
  });
  
  // Animate clouds: start at edges, move outward as scroll progresses
  const cloudLeftX = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);
  const cloudRightX = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const logoOpacity = useTransform(scrollYProgress, [0.3, 0.8], [0, 1]);
  const logoScale = useTransform(scrollYProgress, [0.3, 0.8], [0.5, 1]);

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
    <Section showGlassDecor className="!py-30 flex items-center justify-center">
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
            LET'S GET STARTED
          </motion.h1>
        </motion.div>

        {/* Process Cards */}
        <motion.div 
          className="flex justify-center gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          {/* Card 1 - Let's have a chat */}
          <motion.div variants={itemVariants} transition={{ duration: 0.5, ease: "easeOut" }}>
            <ProcessCard className="w-80 h-100">
              <div className="flex flex-col h-full !p-6">
                {/* Header */}
                <div className="flex justify-between items-start !mb-0">
                  <span className="text-sm font-agile text-[#38385B] tracking-wider">NOW</span>
                  <div className="w-10 h-10 bg-[#C4F7D4] border-[1px] border-[#C2C2D6] rounded-lg flex items-center justify-center">
                    <Image 
                      src="/levantate_logo_square.svg" 
                      alt="Logo" 
                      width={24} 
                      height={24}
                    />
                  </div>
                </div>
                {/* Content */}
                <h2 className="text-2xl font-onest font-semibold text-[#38385B] !mb-4">Let's have a chat</h2>
                <p className="text-base font-onest text-[#5A5A7A] !mb-6 leading-relaxed">
                  We'll talk through your goals, blockers and what you actually need. No fluff. No 10-page briefs
                </p>
                {/* CTA Button */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="!mt-auto"
                >
                  <Link 
                    href="#contact"
                    className="w-full h-12 flex items-center justify-center bg-black text-white rounded-xl hover:bg-gray-900 transition-all font-onest font-medium"
                  >
                    Book an intro call
                  </Link>
                </motion.div>
                <p className="text-xs font-onest text-black !mt-4 text-center">
                  Only 20-30 min<br/>Friendly chat, no pressure
                </p>
              </div>
            </ProcessCard>
          </motion.div>

          {/* Card 2 - Receive your proposal */}
          <motion.div variants={itemVariants} transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}>
            <ProcessCard className="w-80 h-100">
              <div className="flex flex-col h-full !p-6 !pb-0">
                {/* Header */}
                <div className="flex justify-between items-start !mb-6">
                  <span className="text-sm font-agile text-[#38385B] tracking-wider">1-2 DAYS</span>
                </div>
                {/* Content */}
                <h2 className="text-2xl font-onest font-semibold text-[#38385B] !mb-2">Receive your proposal</h2>
                <p className="text-base font-onest text-[#5A5A7A] !mb-6 leading-relaxed">
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
          <motion.div variants={itemVariants} transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}>
            <ProcessCard className="w-80 h-100">
              <div className="flex flex-col h-full !p-6 !pb-0">
                {/* Header */}
                <div className="flex justify-start items-start !mb-6">
                    <Image 
                      src="/tick.svg" 
                      alt="Tick" 
                      width={32} 
                      height={32}
                    />
                  </div>
                {/* Content */}
                <h2 className="text-2xl font-onest font-semibold text-[#38385B] !mb-4">Kick off your project</h2>
                <p className="text-base font-onest text-[#5A5A7A] !mb-6 leading-relaxed">
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

        {/* Cloud reveal animation */}
        <div 
          ref={cloudRef}
          className="relative flex justify-center items-center !mt-100 h-[600px]"
        >
          {/* Left cloud - starts at left edge, goes further left */}
          <motion.div 
            className="absolute left-0 z-10"
            style={{ x: cloudLeftX }}
          >
            <Image 
              src="/images/cloud-left.png" 
              alt="Cloud" 
              width={1200} 
              height={1000}
              className="object-contain min-w-[60vw]"
            />
          </motion.div>
          
          {/* Right cloud - starts at right edge, goes further right */}
          <motion.div 
            className="absolute right-0 z-10"
            style={{ x: cloudRightX }}
          >
            <Image 
              src="/images/cloud-right.png" 
              alt="Cloud" 
              width={1200} 
              height={1000}
              className="object-contain min-w-[60vw]"
            />
          </motion.div>
          
          {/* Logo in center */}
          <motion.div 
            className="z-0"
            style={{ opacity: logoOpacity, scale: logoScale }}
          >
            <Image 
              src="/levantate_logo_square.svg" 
              alt="Logo" 
              width={80} 
              height={80}
            />
          </motion.div>
        </div>
        
      </div>
    </Section>
  );
}

export default OurWork;