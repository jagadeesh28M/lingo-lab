"use client";

import { useCall, useCallStateHooks } from "@stream-io/video-react-sdk";

import { Button } from "../ui/button";
import { useParams, useRouter } from "next/navigation";
import { deleteRoom } from "@/actions/room.action";

const EndCallButton = () => {
  const call = useCall();
  const router = useRouter();
  const { id } = useParams();

  if (!call)
    throw new Error(
      "useStreamCall must be used within a StreamCall component."
    );

  const { useLocalParticipant } = useCallStateHooks();
  const localParticipant = useLocalParticipant();

  const isMeetingOwner =
    localParticipant &&
    call.state.createdBy &&
    localParticipant.userId === call.state.createdBy.id;

  if (!isMeetingOwner) return null;

  const endCall = async () => {
    // Disable microphone and camera to turn off hardware
    await call.microphone.disable();
    await call.camera.disable();
    await call.endCall();
    if (typeof id === "string") {
      await deleteRoom(id);
    } else {
      throw new Error("Invalid room id");
    }
    router.push("/home");
  };

  return (
    <Button onClick={endCall} className="bg-red-500">
      End call for everyone
    </Button>
  );
};

export default EndCallButton;
