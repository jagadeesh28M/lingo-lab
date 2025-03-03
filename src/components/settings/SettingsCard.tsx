import { Lock } from "lucide-react";
import Image from "next/image";
import UsernameUpdate from "../../components/settings/UsernameUpdate";
import { getServerSession } from "next-auth";
export default async function SettingsCard() {
  const session = await getServerSession();
  return (
    <div className="h-auto w-auto bg-[#1F2937] p-6 rounded-lg">
      <h3 className="text-white font-bold text-2xl tracking-tight">
        Profile Information
      </h3>
      <p className="text-gray-400 text-base">
        Update your display name and username.
      </p>
      <div className="flex items-center space-x-6 p-3 my-2">
        <Image
          src={
            session?.user?.image ||
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDAW3c4VeojGKTpXQCtoLQG0_VWjzJwVdAEQ&s"
          }
          alt="User profile image"
          width={80}
          height={56}
          className="rounded-full border-2 border-blue-400"
        />
        <div>
          <h3 className="text-lg font-medium text-gray-200">
            {session?.user?.name}
          </h3>
          <p className="text-sm text-gray-400">{session?.user?.email}</p>
          <a
            href="https://myaccount.google.com/profile"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 text-sm text-blue-400 hover:text-blue-300 inline-flex items-center gap-1"
          >
            Manage in Google Account
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
        </div>
      </div>

      <div className="space-y-6">
        <div className="space-y-4">
          <div className="flex items-center gap-2 rounded-md border border-gray-600/50 bg-gray-700/50 px-3 py-2">
            <Lock className="h-4 w-4 text-gray-400" />
            <div>
              <p className="text-sm font-medium text-gray-300">Full Name</p>
              <p className="text-sm text-gray-400">Managed by Google Account</p>
            </div>
          </div>
          <div className="flex items-center gap-2 rounded-md border border-gray-600/50 bg-gray-700/50 px-3 py-2">
            <Lock className="h-4 w-4 text-gray-400" />
            <div>
              <p className="text-sm font-medium text-gray-300">Avatar</p>
              <p className="text-sm text-gray-400">Managed by Google Account</p>
            </div>
          </div>
          <UsernameUpdate />
        </div>
      </div>
    </div>
  );
}
