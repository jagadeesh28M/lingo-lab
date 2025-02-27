import { CircleUserRound } from "lucide-react";
import UpdateUsername from "./UpdateUsername";

export default function UsernameSetup() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <div className="flex justify-center">
            <CircleUserRound className="h-12 w-12 text-[#4E46E4]" />
          </div>
          <h2 className="mt-6 text-2xl font-bold text-white">
            Set up your username to proceed
          </h2>
          <UpdateUsername />
        </div>
      </div>
    </div>
  );
}
