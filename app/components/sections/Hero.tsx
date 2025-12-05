"use client";

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Section from '../ui/Section';

type Props = {}

const Hero = (props: Props) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
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

  const headlineVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  const borderVariants = {
    hidden: { opacity: 0, scaleX: 0 },
    visible: {
      opacity: 1,
      scaleX: 1,
    },
  };

  return (
    <Section className="min-h-screen !mt-10 flex items-center justify-center">
      <motion.div 
        className="text-center h-full"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 
          className="text-xl font-agile !mb-2 text-[#38385B]"
          variants={itemVariants}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          RISE ABOVE THE NOISE <span className="relative -top-1">.</span> OWN YOUR CATEGORY
        </motion.h1>
        
        <motion.p 
          className="text-7xl text-black font-onest"
          variants={headlineVariants}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Become the <br/>obvious choice.
        </motion.p>
        
        <motion.p 
          className="text-lg text-gray-600 font-onest !mb-15 !mt-15"
          variants={itemVariants}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Sharpen your positioning, look enterprise-ready, and ship a high-converting<br/> website that sells, builds trust in seconds and moves your pipeline now.
        </motion.p>
        
        {/* Box with fading border */}
        <motion.div 
          className="relative inline-block !p-2 !mb-15"
          variants={itemVariants}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <motion.div 
            className="absolute top-0 left-0 right-0"
            style={{
              height: '2px',
              background: 'linear-gradient(to right, transparent 0%, rgba(231, 230, 239, 0.3) 10%, rgba(231, 230, 239, 0.6) 30%, #C3C3D6 50%, rgba(231, 230, 239, 0.6) 70%, rgba(231, 230, 239, 0.3) 90%, transparent 100%)',
              transformOrigin: 'left',
            }}
            variants={borderVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
          ></motion.div>
          <motion.div 
            className="absolute top-0 left-[25%] w-[50%]"
            style={{
              height: '1px',
              background: 'linear-gradient(to right, rgba(231, 230, 239, 0.6) 0%, #C3C3D6 50%, rgba(231, 230, 239, 0.6) 100%)',
              boxShadow: '0 1px 3px rgba(255, 255, 255, 0.5), 0 0 6px rgba(255, 255, 255, 0.4)',
              filter: 'drop-shadow(0 0 4px rgba(255, 255, 255, 0.5))',
              transformOrigin: 'left',
            }}
            variants={borderVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
          ></motion.div>
          <motion.div 
            className="absolute bottom-0 left-0 right-0"
            style={{
              height: '2px',
              background: 'linear-gradient(to right, transparent 0%, rgba(231, 230, 239, 0.3) 10%, rgba(231, 230, 239, 0.6) 30%, #C3C3D6 50%, rgba(231, 230, 239, 0.6) 70%, rgba(231, 230, 239, 0.3) 90%, transparent 100%)',
              transformOrigin: 'left',
            }}
            variants={borderVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
          ></motion.div>
          <motion.div 
            className="absolute bottom-0 left-[25%] w-[50%]"
            style={{
              height: '1px',
              background: 'linear-gradient(to right, rgba(231, 230, 239, 0.6) 0%, #C3C3D6 50%, rgba(231, 230, 239, 0.6) 100%)',
              boxShadow: '0 3px 8px rgba(255, 255, 255, 0.7), 0 1px 4px rgba(255, 255, 255, 0.5), 0 0 10px rgba(255, 255, 255, 0.4)',
              filter: 'drop-shadow(0 2px 6px rgba(255, 255, 255, 0.6))',
              transformOrigin: 'left',
            }}
            variants={borderVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
          ></motion.div>
          <h1 className="text-lg font-agile text-[#38385B]">FUNDED STARTUPS + B2B TECH</h1>
        </motion.div>

        <motion.div 
          className="flex justify-center items-center gap-6"
          variants={itemVariants}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {/* CTA Button - Desktop */}
          {/*TODO: Make this button mobile friendly*/}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Link 
              href="#contact"
              className="h-14 w-fit !px-2 !mr-2 lg:flex items-center gap-2 bg-black text-white rounded-2xl hover:bg-gray-900 transition-all shrink-0 border-2 border-[#E2E4F5]"
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
                <span className="text-xs sm:text-sm font-medium font-onest">Book an intro call</span>
                <span className="text-[10px] sm:text-xs text-gray-300 font-onest">Friendly chat, no pressure</span>
              </div>
            </Link>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <Link 
              href="#work" 
              className="text-lg font-medium font-onest underline text-[#38385B]"
            >
              Explore Our Work
            </Link>
          </motion.div>
        </motion.div>
        
        <motion.p 
          className="text-sm text-[#38385B] !mt-6 font-onest"
          variants={itemVariants}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          First impressions are everything lets get yours right
        </motion.p>
      </motion.div>
    </Section>
  )
}

export default Hero