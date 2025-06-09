"use client";

import { useEffect, useState } from "react";
import { StreamCall, StreamTheme } from "@stream-io/video-react-sdk";
import { useParams } from "next/navigation";

import { useGetCallById } from "@/../hooks/useGetCallById";
import MeetingSetup from "@/components/room/MeetingSetup";
import MeetingRoom from "@/components/room/MeetingRoom";
import Loader from "@/components/Loader";
import { getRoomById } from "@/actions/room.action";

interface RoomData {
  people: number;
  maxPeople: number;
}

const MeetingPage = () => {
  const { id } = useParams();
  const [roomData, setRoomData] = useState<RoomData | null>(null);

  useEffect(() => {
    const fetchRoomData = async () => {
      const response = await getRoomById(typeof id === "string" ? id : "");
      if (response) {
        setRoomData(response);
      }
    };
    fetchRoomData();
  }, [id]);

  const { call, isCallLoading } = useGetCallById(id ?? "");

  const [isSetupComplete, setIsSetupComplete] = useState(false);

  if (isCallLoading) return <Loader />;

  if (!call || !roomData) {
    return (
      <p className="text-center text-3xl font-bold text-white">
        The meeting room was not found or has been closed.
      </p>
    );
  }

  if (roomData.people >= roomData.maxPeople) {
    return (
      <p className="text-center text-3xl font-bold text-white">
        The meeting room is full.
      </p>
    );
  }

  return (
    <main className="h-screen w-full">
      <StreamCall call={call}>
        <StreamTheme>
          {!isSetupComplete ? (
            <MeetingSetup setIsSetupComplete={setIsSetupComplete} />
          ) : (
            <MeetingRoom />
          )}
        </StreamTheme>
      </StreamCall>
    </main>
  );
};

export default MeetingPage;
