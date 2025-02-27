"use client";
import { useRouter } from "next/navigation";
import { ShimmerButton } from "./shimmer-button";

function MobileSigninButton() {
  const router = useRouter();
  return (
    <ShimmerButton
      className="w-full py-3 text-xl"
      onClick={() => router.push("/signin")}
    >
      <span className="text-white">Login</span>
    </ShimmerButton>
  );
}

export default MobileSigninButton;
