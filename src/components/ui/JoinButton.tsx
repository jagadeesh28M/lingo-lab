import React from "react";
import { cn } from "../../utils/cn";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
  glowing?: boolean;
  children: React.ReactNode;
}

const JoinButton = ({
  variant = "primary",
  size = "md",
  glowing = false,
  className,
  children,
  ...props
}: ButtonProps) => {
  const baseStyle =
    "font-medium rounded-full transition-all duration-300 flex items-center justify-center";

  const variants = {
    primary:
      "bg-gradient-to-r from-indigo-600 to-violet-500 text-white hover:from-indigo-500 hover:to-violet-400",
    secondary: "bg-slate-800 text-indigo-300 hover:bg-slate-700",
    ghost: "bg-transparent hover:bg-slate-800/50 text-indigo-300",
    outline:
      "bg-transparent border border-indigo-500/50 text-indigo-300 hover:bg-indigo-500/10",
  };

  const sizes = {
    sm: "text-xs px-3 py-1.5",
    md: "text-sm px-4 py-2",
    lg: "text-base px-6 py-2.5",
  };

  const glowEffect = glowing
    ? "shadow-[0_0_15px_rgba(79,70,229,0.45)] hover:shadow-[0_0_25px_rgba(79,70,229,0.6)]"
    : "";

  return (
    <button
      className={cn(
        baseStyle,
        variants[variant],
        sizes[size],
        glowEffect,
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default JoinButton;
