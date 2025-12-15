import { HTMLAttributes, ReactNode } from "react";
import NextImage from "next/image";
import GlassDecor from "./GlassDecor";

interface SectionProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  background?: "default" | "white" | "black" | "custom";
  customBg?: string;
  fullWidth?: boolean;
  noPadding?: boolean;
  noBackgroundImage?: boolean;
  showGlassDecor?: boolean;
}

export default function Section({
  children,
  background = "default",
  customBg,
  fullWidth = false,
  noPadding = false,
  noBackgroundImage = false,
  showGlassDecor = false,
  className = "",
  ...props
}: SectionProps) {
  const backgrounds = {
    default: "bg-[#EAEAF1]",
    white: "bg-white",
    black: "bg-black text-white",
    custom: customBg || "bg-white",
  };

  const paddingClass = noPadding ? "" : "py-20";

  return (
    <section
      className={`${paddingClass} ${backgrounds[background]} ${className} relative`}
      style={background === "custom" && customBg ? { backgroundColor: customBg } : undefined}
      {...props}
    >
      {showGlassDecor && (
        <>
          <GlassDecor position="left" />
          <GlassDecor position="right" />
        </>
      )}
      {fullWidth ? (
        children
      ) : (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          {!noBackgroundImage && (
          <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none">
            <NextImage 
              src="/images/section-gradient.svg" 
              alt="Section Background" 
              width={1000} 
              height={1000}
              className="object-contain"
            />
          </div>
          )}
          <div className="relative z-10">
            {children}
          </div>
        </div>
      )}
    </section>
  );
}

