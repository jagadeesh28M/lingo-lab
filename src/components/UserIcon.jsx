"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Settings, LogOut } from "lucide-react";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

function UserIcon({ img }) {
  const session = useSession();
  return (
    <div className="relative flex justify-center items-center">
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Image
            src={
              img ||
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDAW3c4VeojGKTpXQCtoLQG0_VWjzJwVdAEQ&s"
            }
            alt="User profile image"
            width={80}
            height={56}
            className="h-auto w-auto mr-10 hover:cursor-pointer  rounded-full border-2 border-blue-400"
          />
        </DropdownMenuTrigger>
        <DropdownMenuContent
          style={{ backgroundColor: "#1E272D" }}
          className="text-white"
        >
          <DropdownMenuLabel className="flex items-center justify-around gap-4 p-2">
            <Image
              src={
                img ||
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDAW3c4VeojGKTpXQCtoLQG0_VWjzJwVdAEQ&s"
              }
              alt="User profile image"
              width={80}
              height={56}
              className="h-auto w-auto hover:cursor-pointer  rounded-full border-2 border-blue-400"
            />
            <div className="flex flex-col items-left">
              <div className="font-bold text-xl">
                {session?.data?.user?.name}
              </div>
              <div className="text-pink-600 text-sm font-normal">
                {session?.data?.user?.email}
              </div>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <Link href="/settings">
            <DropdownMenuItem className="flex items-center p-2 gap-2 cursor-pointer">
              <Settings />

              <div className="font-semibold">Settings</div>
            </DropdownMenuItem>
          </Link>
          <DropdownMenuItem
            className="text-red-500 flex items-center p-2 cursor-pointer"
            onSelect={() => signOut({ callbackUrl: "/" })}
          >
            <LogOut />

            <div className="font-semibold">Logout</div>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

export default UserIcon;
