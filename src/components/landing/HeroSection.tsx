import React from "react";
import { Spotlight } from "@/components/ui/Spotlight";
import { Poppins } from "next/font/google";
import Navbar from "./Navbar";
import LoginButton from "../ui/LoginButton";

const poppin = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function HeroSection() {
  return (
    <div
      className={`h-[98vh] w-full flex flex-col items-center justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden ${poppin.className}`}
    >
      {/* Navbar */}
      <Navbar />

      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="#4F47E5"
      />

      {/* Hero Section */}
      <div className="flex flex-col justify-center items-center h-1/2 mt-10 md:mt-20 px-4">
        <div className="p-4 max-w-7xl mx-auto relative z-10 w-full">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
            LingoLab <br />
            <div className="md:text-5xl">Talk to Learn. Learn to Talk.</div>
          </h1>
          <p className="mt-4 font-normal text-base sm:text-lg md:text-xl text-neutral-300 w-4/5 sm:w-3/5 text-center mx-auto leading-relaxed sm:leading-normal">
            Lingo Lab is your go-to platform for learning languages through
            real-time conversations with native speakers. No more boring
            lessons—just live practice and cultural exchange!
          </p>
        </div>

        {/* Login Button */}
        <div className="flex justify-center items-center mt-4">
          <LoginButton />
        </div>
      </div>
    </div>
  );
}
