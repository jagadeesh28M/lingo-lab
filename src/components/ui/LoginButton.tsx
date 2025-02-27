"use client";
import { useRouter } from "next/navigation";

function LoginButton() {
  const router = useRouter();
  return (
    <button
      className="font-normal text-xl text-center bg-white dark:bg-white rounded-full h-14 w-48 text-black dark:text-black px-4 py-3 hover:bg-[#0A0A0A] hover:text-white hover:border-[#4F47E5] hover:border-2 flex items-center justify-center transition-colors duration-300 ease-in-out group"
      onClick={() => router.push("/signin")}
    >
      Get Started
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2.0}
        stroke="currentColor"
        className="h-5 w-5 ml-2 transition-transform duration-500 ease-out group-hover:rotate-45"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
        />
      </svg>
    </button>
  );
}

export default LoginButton;
