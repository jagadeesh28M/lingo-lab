import LandingPage from "@/components/LandingPage";
import HeroVideoDialog from "@/components/ui/HeroVideoDialog";

export default function Home() {
  return (
    <main>
      <LandingPage />
      <div className="relative h-3/4 w-full px-52 flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02]">
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
    </main>
  );
}
