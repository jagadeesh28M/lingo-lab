"use server";
import prisma from "@/lib/prisma";
import { fetchUser } from "./user.action";

interface Room {
  roomId: string;
  language: string;
  topic: string;
  people: number;
  maxPeople: number;
  level: string;
}

export async function createRoom({
  roomId,
  language,
  topic,
  maxPeople,
  level,
}: Room) {
  const user = await fetchUser();
  if (!user || !("id" in user)) {
    throw new Error("User not found or redirected");
  }
  const { id } = user;
  const room = await prisma.room.create({
    data: {
      id: roomId,
      language,
      topic,
      people: 0,
      maxPeople,
      level,
      ownerId: id,
    },
  });
  return room;
}

export async function updatePeopleCount(roomId: string, increment: boolean) {
  const room = await prisma.room.update({
    where: {
      id: roomId,
    },
    data: {
      people: {
        increment: increment ? 1 : -1,
      },
    },
  });
  return room;
}

export async function getRoomById(roomId: string) {
  const room = await prisma.room.findUnique({
    where: {
      id: roomId,
    },
    select: {
      maxPeople: true,
      people: true,
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

export async function deleteRoom(roomId: string) {
  const closeRoom = await prisma.room.delete({
    where: {
      id: roomId,
    },
  });
  return closeRoom;
}
