import { HTMLAttributes } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  hover?: boolean;
}

export default function Card({
  children,
  hover = false,
  className = "",
  ...props
}: CardProps) {
  const baseStyles = "bg-white rounded-2xl p-6 shadow-lg transition-all duration-300";
  const hoverStyles = hover ? "hover:shadow-2xl hover:-translate-y-2" : "";

  return (
    <div className={`${baseStyles} ${hoverStyles} ${className}`} {...props}>
      {children}
    </div>
  );
}



