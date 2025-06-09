"use client";
import React from "react";
import { Plus } from "lucide-react";
import { useState } from "react";
import { createRoom } from "@/actions/room.action";
import { getSession } from "next-auth/react";
import { useStreamVideoClient } from "@stream-io/video-react-sdk";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

function CreateRoom() {
  const route = useRouter();
  const [newRoom, setNewRoom] = useState(false);
  const [languages, setLanguages] = useState<string>("");
  const [topic, setTopic] = useState<string>("");
  const [level, setLevel] = useState<string>("Any Level");
  const [maxPeople, setMaxPeople] = useState<number>(0);
  const user = getSession();

  const client = useStreamVideoClient();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!client || !user) {
      console.error("Client or user session not available");
      return;
    }

    try {
      const callId = crypto.randomUUID();
      const call = client.call("default", callId);

      if (!call) throw new Error("Failed to create call");

      const createdCall = await call.create();

      if (createdCall) {
        route.push(`/room/${call.id}`);
      }
      const response = await createRoom({
        roomId: callId,
        language: languages,
        topic: topic,
        people: 0,
        maxPeople: maxPeople,
        level: level,
      });

      if (response) {
        console.log("Room created successfully", response);
        toast.success("Room created successfully!");
        setNewRoom(false);
      } else {
        console.error("createRoom returned no response");
      }
    } catch (error) {
      console.error("Error in handleSubmit:", error);
    }
  };

  return (
    <div>
      <div
        className="h-auto w-auto border-dashed border border-gray-400 rounded-lg flex items-center justify-center p-14 bg-[#0D1127] hover:bg-[#1F2E3D] transition-all duration-300 hover:scale-105 hover:cursor-pointer relative group"
        onClick={() => setNewRoom(true)}
      >
        <div
          className="absolute inset-0 rounded-lg pointer-events-none opacity-0 group-hover:opacity-100 transition-all duration-300 z-0"
          style={{
            boxShadow:
              "0 0 5px 5px rgba(59,130,246,0.4), 0 0 5px 5px rgba(59,130,246,0.2)",
            filter: "blur(8px)",
          }}
        />
        <div className="flex flex-col items-center gap-3">
          <div className="bg-indigo-600/20 p-5 rounded-full h-auto w-auto text-indigo-400">
            <Plus />
          </div>
          <h2 className="text-white text-2xl font-semibold">Create New Room</h2>
          <p className="text-gray-400">Start a new language practice room</p>
        </div>
      </div>
      {newRoom && (
        <div
          className="fixed inset-0 bg-[#111827] bg-opacity-60 flex items-center justify-center z-50"
          onClick={() => setNewRoom(false)}
        >
          <div
            className="bg-[#313f53] p-4 md:p-10 rounded-lg relative w-11/12 md:w-1/3"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-3 right-5 text-2xl text-white"
              onClick={() => setNewRoom(false)}
            >
              &times;
            </button>
            <div className="flex flex-col w-full gap-2">
              <h2 className="text-2xl font-bold text-white mb-6">
                Create New Room
              </h2>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Language
                  </label>
                  <input
                    type="text"
                    list="languages"
                    className="block w-full rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 text-white bg-[#313F53] border-blue-600 border-2 p-3"
                    placeholder="e.g., English, Spanish, French"
                    onChange={(e) => setLanguages(e.target.value)}
                    value={languages}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Topic
                  </label>
                  <input
                    className="block w-full rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 text-white bg-[#313F53] border-blue-600 border-2 p-3"
                    placeholder="Describe the focus of this room."
                    onChange={(e) => setTopic(e.target.value)}
                    value={topic}
                  ></input>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Maximum People
                  </label>
                  <select
                    className="block w-full rounded-md border-blue-600 border-2 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-3 text-white bg-[#313F53]"
                    defaultValue="any"
                    onChange={(e) => setMaxPeople(Number(e.target.value))}
                  >
                    <option value="any">Unlimited</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Level
                  </label>
                  <select
                    className="block w-full rounded-md border-blue-600 border-2 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-3 text-white bg-[#313F53]"
                    defaultValue="any"
                    onChange={(e) => setLevel(e.target.value)}
                    value={level}
                  >
                    <option value="any">Any Level</option>
                    <option value="beginner">Beginner</option>
                    <option value="intermediate">Intermediate</option>
                    <option value="advanced">Advanced</option>
                  </select>
                </div>

                <div className="flex justify-center ">
                  <button
                    type="submit"
                    className="px-4 py-2 w-full text-sm font-medium text-white bg-blue-600 rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    onClick={handleSubmit}
                  >
                    Create Room
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CreateRoom;
