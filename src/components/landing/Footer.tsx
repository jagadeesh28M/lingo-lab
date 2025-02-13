"use client";
import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer
      id="contact"
      className="w-full bg-black/[0.96] text-white py-8 px-4 md:px-16"
    >
      <div className="container mx-auto flex flex-col md:flex-row justify-around items-center mb-8">
        <div className="flex flex-col items-start mb-8 md:mb-0">
          <h2 className="font-bold text-5xl mb-4">LingoLab</h2>
          <p className="text-gray-300">
            Lingo Lab is your go-to platform for learning languages through
            real-time conversations with native speakers.
          </p>
        </div>
        <div className="flex flex-col items-start ml-4 mb-8 md:mb-0 md:ml-8 w-full md:w-auto">
          <h3 className="font-semibold text-lg mb-4">Links:</h3>
          <ul className="list-none p-0">
            <li className="mb-2 text-gray-300 hover:text-blue-500">
              <Link href="#home">Home</Link>
            </li>
            <li className="mb-2 text-gray-300 hover:text-blue-500">
              <Link href="#features">Features</Link>
            </li>
            <li className="mb-2 text-gray-300 hover:text-blue-500">
              <Link href="#about">How it works</Link>
            </li>
            <li className="mb-2 text-gray-300 hover:text-blue-500">
              <Link href="#">Login</Link>
            </li>
          </ul>
        </div>
      </div>
      <hr />
      <div className="text-center mt-3 font-semibold">
        © 2025 LingoLab | All Rights Reserved
      </div>
      <div
        className="text-center mt-3 font-semibold hover:text-blue-300 hover:cursor-pointer"
        onClick={() => window.open("https://x.com/Jagadeesh28M", "_blank")}
      >
        Designed and developed by Jagadeesh Muthangi
      </div>
    </footer>
  );
};

export default Footer;
