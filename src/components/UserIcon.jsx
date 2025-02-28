"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { signOut } from "next-auth/react";
import Image from "next/image";

function UserIcon({ img }) {
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
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuItem>Billing</DropdownMenuItem>
          <DropdownMenuItem>Team</DropdownMenuItem>
          <DropdownMenuItem
            className="text-red-500 font-semibold"
            onSelect={() => signOut({ callbackUrl: "/" })}
          >
            Logout
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

export default UserIcon;
