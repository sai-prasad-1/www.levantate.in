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
    <Section className="min-h-[70vh] sm:min-h-[80vh] md:min-h-screen !mt-20 flex items-center justify-center px-4 sm:px-6">
      <motion.div 
        className="text-center h-full w-full"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 
          className="text-[10px] sm:text-sm md:text-lg lg:text-xl font-agile !mb-2 text-[#38385B]"
          variants={itemVariants}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          RISE ABOVE THE NOISE <span className="relative -top-0.5 sm:-top-1">.</span> OWN YOUR CATEGORY
        </motion.h1>
        
        <motion.p 
          className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl text-black font-onest"
          variants={headlineVariants}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Become the <br className="hidden sm:block"/>
          <span className="sm:hidden"> </span>obvious choice.
        </motion.p>
        
        <motion.p 
          className="text-sm sm:text-base md:text-lg text-gray-600 font-onest !mb-6 sm:!mb-10 md:!mb-15 !mt-6 sm:!mt-10 md:!mt-15 px-2 sm:px-0"
          variants={itemVariants}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Sharpen your positioning, look enterprise-ready, and ship a high-converting<span className="hidden md:inline"><br/></span><span className="md:hidden"> </span>website that sells, builds trust in seconds and moves your pipeline now.
        </motion.p>
        
        {/* Box with fading border */}
        <motion.div 
          className="relative inline-block !p-1.5 sm:!p-2 !mb-6 sm:!mb-10 md:!mb-15"
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
          <h1 className="text-[10px] sm:text-sm md:text-base lg:text-lg font-agile text-[#38385B]">FUNDED STARTUPS + B2B TECH</h1>
        </motion.div>

        <motion.div 
          className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-6"
          variants={itemVariants}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {/* CTA Button */}
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
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <Link 
              href="#work" 
              className="text-sm sm:text-base md:text-lg font-medium font-onest underline text-[#38385B]"
            >
              Explore Our Work
            </Link>
          </motion.div>
        </motion.div>
        
        <motion.p 
          className="text-[10px] sm:text-xs md:text-sm text-[#38385B] !mt-3 sm:!mt-4 md:!mt-6 font-onest px-4 sm:px-0"
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