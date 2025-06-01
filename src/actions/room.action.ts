"use server";
import prisma from "@/lib/prisma";
import { fetchUser } from "./user.action";

interface Room {
  language: string;
  topic: string;
  maxPeople: number;
  level: string;
}

export async function createRoom({ language, topic, maxPeople, level }: Room) {
  const user = await fetchUser();
  if (!user || !("id" in user)) {
    throw new Error("User not found or redirected");
  }
  const { id } = user;
  const room = await prisma.room.create({
    data: {
      language,
      topic,
      maxPeople,
      level,
      ownerId: id,
    },
  });
  return room;
}

export async function getRooms() {
  const rooms = await prisma.room.findMany({
    include: {
      owner: {
        select: {
          id: true,
          name: true,
          username: true,
        },
      },
    },
    orderBy: {
      createdAt: "desc",
    },
  });
  return rooms;
}
