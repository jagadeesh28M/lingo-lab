import React from "react";
import { Playwrite_FR_Moderne, Poppins } from "next/font/google";
import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ShimmerButton } from "./ui/shimmer-button";

const playwrite = Playwrite_FR_Moderne({
  weight: ["400"],
});

const poppin = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
});

function MobileNavbar() {
  return (
    <div className="flex md:hidden justify-between items-center absolute top-4 left-0 w-full py-4 px-4 z-50">
      <Link
        href={"/"}
        className={`text-white text-2xl font-normal ml-4 ${playwrite.className}`}
      >
        LingoLab
      </Link>

      <Sheet>
        <SheetTrigger
          className="text-white p-3 rounded-md hover:bg-gray-800 transition-all duration-300"
          aria-label="Open navigation menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </SheetTrigger>

        <SheetContent
          className={`bg-black flex flex-col text-white rounded-lg p-6 border-none bg-opacity-95 backdrop-blur-lg ${poppin.className}`}
          side="right"
        >
          <div className="flex flex-col items-center space-y-6 my-8">
            <Link
              href="/Home"
              className="text-2xl md:text-3xl hover:text-gray-300 w-full text-center py-2 transition-colors"
            >
              Home
            </Link>
            <Link
              href="/Features"
              className="text-2xl md:text-3xl hover:text-gray-300 w-full text-center py-2 transition-colors"
            >
              Features
            </Link>
            <Link
              href="/How-to-use"
              className="text-2xl md:text-3xl hover:text-gray-300 w-full text-center py-2 transition-colors"
            >
              How it works
            </Link>
            <Link
              href="/Contact"
              className="text-2xl md:text-3xl hover:text-gray-300 w-full text-center py-2 transition-colors"
            >
              Contact
            </Link>
            <div className="w-3/4 max-w-xs mt-6">
              <ShimmerButton className="w-full py-3 text-xl">
                <span className="text-white">Login</span>
              </ShimmerButton>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}

export default MobileNavbar;
