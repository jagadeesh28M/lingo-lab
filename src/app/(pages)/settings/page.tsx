import SettingsCard from "@/components/settings/SettingsCard";
import { Info } from "lucide-react";

export default function Settings() {
  return (
    <div className="min-h-[calc(100vh-5rem)] w-full bg-[#020617] p-4 md:p-10 text-white space-y-6">
      <div className="flex flex-col space-y-2 ">
        <h2 className="text-white font-bold text-5xl tracking-tight">
          Profile Settings
        </h2>
        <p className="text-gray-400 text-base">
          Manage your profile information.
        </p>
      </div>
      <div className="border-blue-900/50 bg-blue-900/20 text-blue-300 p-4 rounded-lg flex items-center gap-2">
        <Info className="h-6 w-6" />
        <div>
          Most profile information is managed through your Google Account. Only
          your username can be changed here.
        </div>
      </div>
      <div>
        <SettingsCard />
      </div>
    </div>
  );
}
