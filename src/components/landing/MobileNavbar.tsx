import React from "react";
import { Playwrite_FR_Moderne, Poppins } from "next/font/google";
import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import MobileSigninButton from "../ui/MobileSigninButton";

const playwrite = Playwrite_FR_Moderne({ weight: ["400"] });
const poppin = Poppins({ subsets: ["latin"], weight: ["400", "700"] });

const NAV_LINKS = [
  { href: "/Home", label: "Home" },
  { href: "/Features", label: "Features" },
  { href: "/How-to-use", label: "How it works" },
  { href: "/Contact", label: "Contact" },
];

function MobileNavbar() {
  return (
    <nav className="flex md:hidden justify-between items-center fixed top-0 left-0 w-full py-4 px-4 z-50 bg-gradient-to-b from-black/80 to-transparent">
      <Link
        href="/"
        className={`text-white text-2xl font-normal ml-2 tracking-wide ${playwrite.className}`}
        aria-label="LingoLab Home"
      >
        LingoLab
      </Link>

      <Sheet>
        <SheetTrigger
          className="text-white p-3 rounded-md hover:bg-gray-800 transition focus:outline-none focus:ring-2 focus:ring-white"
          aria-label="Open navigation menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </SheetTrigger>

        <SheetContent
          className={`bg-black flex flex-col text-white rounded-lg p-6 border-none bg-opacity-95 backdrop-blur-lg ${poppin.className}`}
          side="right"
        >
          <div className="flex flex-col items-center space-y-6 my-8">
            {NAV_LINKS.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="text-2xl md:text-3xl hover:text-gray-300 w-full text-center py-2 transition-colors"
                tabIndex={0}
              >
                {label}
              </Link>
            ))}
            <div className="w-3/4 max-w-xs mt-6">
              <MobileSigninButton />
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </nav>
  );
}

export default MobileNavbar;
