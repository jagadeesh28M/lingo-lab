import LandingPage from "@/components/LandingPage";
import HeroVideoDialog from "@/components/ui/HeroVideoDialog";
import { WorldMap } from "@/components/ui/world-map";
import { Poppins } from "next/font/google";
import { AnimatedBeamDemo } from "@/components/MatchingBeam";
import Image from "next/image";
import communicate from "../assets/communication-Photoroom.jpg";
import Footer from "@/components/Footer";

const poppin = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Home() {
  return (
    <main className="w-full h-full">
      <div>
        <LandingPage />
      </div>

      <div className="relative h-auto w-full px-4 sm:px-6 md:px-12 lg:px-52 flex flex-col items-center justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02]">
        <HeroVideoDialog
          className="dark:hidden block"
          animationStyle="from-center"
          videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
          thumbnailSrc="https://startup-template-sage.vercel.app/hero-light.png"
          thumbnailAlt="Hero Video"
        />
        <HeroVideoDialog
          className="hidden dark:block"
          animationStyle="from-center"
          videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
          thumbnailSrc="https://startup-template-sage.vercel.app/hero-dark.png"
          thumbnailAlt="Hero Video"
        />
      </div>

      <div className="w-full h-auto bg-black/[0.96] dark:bg-white text-white dark:text-black flex flex-col items-center justify-center py-12 text-5xl">
        <h1
          className={`text-4xl sm:text-5xl md:text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 mb-6 ${poppin.className}`}
        >
          Features
        </h1>
        <div className="w-full px-4 sm:px-6 md:px-12 lg:px-52">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div className="p-4 rounded-lg text-xl font-semibold text-white border border-white/[0.5] shadow-lg">
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z"
                  />
                </svg>
                Real-time Communication
              </div>
              <div className="text-base text-white mt-2 font-normal">
                High-quality video and voice calls for natural conversations
              </div>
              <Image
                src={communicate}
                alt="Communication"
                className="w-full h-auto"
              />
            </div>
            <div className="p-4 rounded-lg text-xl font-semibold text-white border border-white/[0.5] shadow-lg">
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 0 1-.659 1.591l-5.432 5.432a2.25 2.25 0 0 0-.659 1.591v2.927a2.25 2.25 0 0 1-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 0 0-.659-1.591L3.659 7.409A2.25 2.25 0 0 1 3 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0 1 12 3Z"
                  />
                </svg>
                Smart Matching
              </div>
              <div className="text-base text-white mt-2 font-normal">
                Find partners based on language level and interests
              </div>
              <AnimatedBeamDemo />
            </div>
            <div className="p-4 rounded-lg text-xl font-semibold text-white border border-white/[0.5] shadow-lg">
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
                  />
                </svg>
                Global Community
              </div>
              <div className="text-base text-white mt-2 font-normal mb-2">
                Connect with learners and native speakers worldwide
              </div>
              <div className="w-full h-full">
                <WorldMap
                  dots={[
                    {
                      start: {
                        lat: 64.2008,
                        lng: -149.4937,
                      }, // Alaska (Fairbanks)
                      end: {
                        lat: 34.0522,
                        lng: -118.2437,
                      }, // Los Angeles
                    },
                    {
                      start: { lat: 64.2008, lng: -149.4937 }, // Alaska (Fairbanks)
                      end: { lat: -15.7975, lng: -47.8919 }, // Brazil (Brasília)
                    },
                    {
                      start: { lat: -15.7975, lng: -47.8919 }, // Brazil (Brasília)
                      end: { lat: 38.7223, lng: -9.1393 }, // Lisbon
                    },
                    {
                      start: { lat: 51.5074, lng: -0.1278 }, // London
                      end: { lat: 28.6139, lng: 77.209 }, // New Delhi
                    },
                    {
                      start: { lat: 28.6139, lng: 77.209 }, // New Delhi
                      end: { lat: 43.1332, lng: 131.9113 }, // Vladivostok
                    },
                    {
                      start: { lat: 28.6139, lng: 77.209 }, // New Delhi
                      end: { lat: -1.2921, lng: 36.8219 }, // Nairobi
                    },
                  ]}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`w-full h-auto bg-black/[0.96] dark:bg-white text-white dark:text-black flex flex-col items-center justify-center py-4 text-5xl ${poppin.className}`}
      >
        <h1 className="mb-10 text-4xl sm:text-5xl md:text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          How it Works
        </h1>
        <div className="w-full px-4 sm:px-6 md:px-12 lg:px-52">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div className="p-4 rounded-lg text-xl font-semibold text-white border border-white/[0.5] shadow-lg">
              <h2 className="text-center">Step 1</h2>
              <h4 className="text-center text-xl text-white mt-2 font-bold">
                Choose Your Language
              </h4>
              <p className="text-base text-center text-white mt-2 font-normal">
                Select from over 30 languages and find native speakers ready to
                practice with you
              </p>
            </div>
            <div className="p-4 rounded-lg text-xl font-semibold text-white border border-white/[0.5] shadow-lg">
              <h2 className="text-center">Step 2</h2>
              <h4 className="text-center text-xl text-white mt-2 font-bold">
                Join a Practice Room
              </h4>
              <p className="text-base text-center text-white mt-2 font-normal">
                Enter live practice rooms or schedule sessions with language
                partners
              </p>
            </div>
            <div className="p-4 rounded-lg text-xl font-semibold text-white border border-white/[0.5] shadow-lg">
              <h2 className="text-center">Step 3</h2>
              <h4 className="text-center text-xl text-white mt-2 font-bold">
                Start Speaking
              </h4>
              <p className="text-base text-center text-white mt-2 font-normal">
                Practice through natural conversations and receive instant
                feedback
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
