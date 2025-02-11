import React from "react";
import { Playwrite_FR_Moderne } from "next/font/google";
import { ShimmerButton } from "./ui/shimmer-button";
import Link from "next/link";

const playwrite = Playwrite_FR_Moderne({
  weight: ["400"],
});

function DesktopNavbar() {
  return (
    <nav className="absolute top-4 left-0 w-full py-4 ">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        <Link
          href={"/"}
          className={`text-white text-2xl font-normal ${playwrite.className}`}
        >
          LingoLab
        </Link>
        <div className="flex justify-between items-center border border-[rgba(214,183,255,0.5)] rounded-full bg-gradient-to-br text-white backdrop-blur-[5px] p-3 space-x-6">
          <a
            href="#home"
            className="text-white mx-2 p-3 rounded-full transition-all duration-300 ease-in-out hover:bg-blue-500 hover:scale-105 hover:backdrop-blur-sm hover:bg-opacity-30"
          >
            Home
          </a>
          <a
            href="#features"
            className="text-white mx-2 p-3 rounded-full transition-all duration-300 ease-in-out hover:bg-blue-500 hover:scale-105 hover:backdrop-blur-sm hover:bg-opacity-30"
          >
            Features
          </a>
          <a
            href="#about"
            className="text-white mx-2 p-3 rounded-full transition-all duration-300 ease-in-out hover:bg-blue-500 hover:scale-105 hover:backdrop-blur-sm hover:bg-opacity-30"
          >
            How it works
          </a>
          <a
            href="#contact"
            className="text-white mx-2 p-3 rounded-full transition-all duration-300 ease-in-out hover:bg-blue-500 hover:scale-105 hover:backdrop-blur-sm hover:bg-opacity-30"
          >
            Contact
          </a>
        </div>
        <ShimmerButton className="shadow-sm shadow-white w-32 hover:border-blue-500 transition-colors duration-300 ease-in-out">
          <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white from-white to-slate-900/10 lg:text-lg  transition-colors duration-300 ease-in-out">
            Login
          </span>
        </ShimmerButton>
      </div>
    </nav>
  );
}

export default DesktopNavbar;
