import Link from "next/link";
import { ShimmerButton } from "./shimmer-button";

function DesktopSiginButton() {
  return (
    <Link href="/signin" passHref>
      <ShimmerButton className="shadow-sm shadow-white w-32 hover:border-blue-500 transition-colors duration-300 ease-in-out">
        <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white from-white to-slate-900/10 lg:text-lg transition-colors duration-300 ease-in-out">
          Login
        </span>
      </ShimmerButton>
    </Link>
  );
}

export default DesktopSiginButton;
