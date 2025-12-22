"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

type CTAButtonProps = {
  href?: string;
  type?: "link" | "button" | "submit";
  title?: string;
  subtitle?: string;
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
};

const sizeClasses = {
  sm: {
    container: "h-10 sm:h-12 md:h-14 !px-1.5 sm:!px-2 !pr-2 sm:!pr-3 md:!pr-4 gap-1.5 sm:gap-2 rounded-lg sm:rounded-xl md:rounded-2xl",
    logo: "w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-md sm:rounded-lg p-0.5 sm:p-1 md:p-1.5",
    logoImg: "w-4 h-4 sm:w-4 sm:h-4 md:w-5 md:h-5",
    title: "text-[10px] sm:text-xs md:text-sm",
    subtitle: "text-[8px] sm:text-[10px] md:text-xs",
  },
  md: {
    container: "h-12 sm:h-14 !px-2 !pr-3 sm:!pr-4 gap-2 rounded-xl sm:rounded-2xl",
    logo: "w-8 h-8 sm:w-10 sm:h-10 rounded-md sm:rounded-lg p-1 sm:p-1.5",
    logoImg: "w-4 h-4 sm:w-5 sm:h-5",
    title: "text-xs sm:text-sm",
    subtitle: "text-[10px] sm:text-xs",
  },
  lg: {
    container: "h-14 !px-2 !pr-4 gap-2 rounded-2xl",
    logo: "w-10 h-10 rounded-lg p-1.5",
    logoImg: "w-5 h-5",
    title: "text-sm",
    subtitle: "text-xs",
  },
};

export default function CTAButton({
  href = "/contact",
  type = "link",
  title = "Book an intro call",
  subtitle = "Friendly chat, no pressure",
  size = "md",
  className = "",
  onClick,
}: CTAButtonProps) {
  const sizes = sizeClasses[size];

  const innerContent = (
    <>
      <motion.div
        className={`${sizes.logo} bg-[#C4F7D4] border border-white flex items-center justify-center`}
        variants={{
          hover: { rotate: 360 },
        }}
        transition={{ duration: 0.6 }}
      >
        <Image
          src="/levantate_logo_square.svg"
          alt=""
          width={20}
          height={20}
          className={sizes.logoImg}
        />
      </motion.div>
      <div className="flex flex-col text-left leading-tight">
        <span className={`${sizes.title} font-medium font-onest`}>{title}</span>
        <span className={`${sizes.subtitle} text-gray-300 font-onest`}>{subtitle}</span>
      </div>
    </>
  );

  const baseClasses = `${sizes.container} w-fit flex items-center bg-black text-white hover:bg-gray-900 transition-all shrink-0 border-2 border-[#E2E4F5] cursor-pointer ${className}`;

  if (type === "link") {
    return (
      <motion.div
        whileHover="hover"
        whileTap={{ scale: 0.98 }}
        variants={{
          hover: { scale: 1.05 },
        }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        <Link href={href} className={baseClasses} onClick={onClick}>
          {innerContent}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      type={type === "submit" ? "submit" : "button"}
      whileHover="hover"
      whileTap={{ scale: 0.98 }}
      variants={{
        hover: { scale: 1.05 },
      }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      className={baseClasses}
      onClick={onClick}
    >
      {innerContent}
    </motion.button>
  );
}

