"use server";
import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function syncUser() {
  const session = await getServerSession();
  if (!session) {
    return {
      redirect: {
        destination: "/signin",
        permanent: false,
      },
    };
  }
  const userExist = await prisma.user.findUnique({
    where: {
      email: session.user?.email ?? undefined,
    },
  });
  if (userExist == null && session.user?.email) {
    const createUser = await prisma.user.create({
      data: {
        username: "",
        email: session.user?.email,
        image: session.user?.image,
      },
    });
    return createUser;
  }
  return userExist;
}

export async function getUsernames() {
  try {
    const users = await prisma.user.findMany({
      select: {
        username: true,
      },
    });
    const usernames = users.map((user) => user.username);
    return usernames;
  } catch {
    return NextResponse.json({
      status: 400,
      msg: "Unable to fetch the usernames",
    });
  }
}

export async function fetchUser() {
  const session = await getServerSession();
  if (!session) {
    return {
      redirect: {
        destination: "/signin",
        permanent: false,
      },
    };
  }
  const userExist = await prisma.user.findUnique({
    where: {
      email: session.user?.email ?? undefined,
    },
  });
  return userExist;
}

export async function updateUsername({ username }: { username: string }) {
  const session = await getServerSession();
  if (!session) {
    return {
      redirect: {
        destination: "/signin",
        permanent: false,
      },
    };
  }
  try {
    if (session && session.user?.email) {
      const update = await prisma.user.update({
        where: {
          email: session.user?.email,
        },
        data: {
          username: username,
        },
      });
      return { success: true, update };
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      status: 404,
      msg: "Error updating the username",
    });
  }
}
