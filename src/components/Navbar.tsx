import { syncUser } from "@/actions/user.action";
import { Sigmar } from "next/font/google";
import UsernameSetup from "./UsernameSetup";
import { getServerSession } from "next-auth";
import UserIcon from "@/components/UserIcon";
import Link from "next/link";

const sigmar = Sigmar({
  subsets: ["latin"],
  weight: ["400"],
});

export default async function Navbar() {
  const session = await getServerSession();
  const user = await syncUser();
  if (user && "username" in user && user.username.startsWith("temporary-")) {
    return <UsernameSetup />;
  }
  return (
    <div className="w-auto h-20 bg-[#020617] border-b-white shadow-lg flex justify-between items-center">
      <Link
        href={"/home"}
        className={`text-[#4E8DF1] text-4xl ml-10 ${sigmar.className}`}
      >
        LINGO LAB
      </Link>
      <div className="mr-10">
        <UserIcon img={session?.user?.image} />
      </div>
    </div>
  );
}
