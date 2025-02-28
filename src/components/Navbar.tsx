import { syncUser } from "@/actions/user.action";
import { Sigmar } from "next/font/google";
import UsernameSetup from "./UsernameSetup";
import { getServerSession } from "next-auth";
import UserIcon from "@/components/UserIcon";

const sigmar = Sigmar({
  subsets: ["latin"],
  weight: ["400"],
});

export default async function Navbar() {
  const session = await getServerSession();
  const user = await syncUser();
  if (user && "username" in user && user.username == session?.user?.name) {
    return <UsernameSetup />;
  }
  return (
    <div className="w-auto h-20 bg-gray-800 border-b-white shadow-lg flex justify-between items-center">
      <div className={`text-[#4E8DF1] text-4xl ml-10 ${sigmar.className}`}>
        LINGO LAB
      </div>
      <div className="mr-10">
        <UserIcon img={session?.user?.image} />
      </div>
    </div>
  );
}
