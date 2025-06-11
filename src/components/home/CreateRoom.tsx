"use client";
import React, { useState, useEffect } from "react";
import { Plus } from "lucide-react";
import { createRoom } from "@/actions/room.action";
import { getSession } from "next-auth/react";
import { useStreamVideoClient } from "@stream-io/video-react-sdk";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

function CreateRoom() {
  const router = useRouter();
  const [newRoom, setNewRoom] = useState(false);
  const [languages, setLanguages] = useState("");
  const [topic, setTopic] = useState("");
  const [level, setLevel] = useState("any");
  const [maxPeople, setMaxPeople] = useState(10);
  const [user, setUser] = useState<import("next-auth").Session | null>(null);
  const client = useStreamVideoClient();

  useEffect(() => {
    async function fetchSession() {
      const session = await getSession();
      setUser(session);
    }
    fetchSession();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate required fields
    if (!languages.trim()) {
      toast.error("Please enter a language.");
      return;
    }
    if (!topic.trim()) {
      toast.error("Please enter a topic.");
      return;
    }

    if (!client || !user) {
      toast.error("User session or video client not available.");
      return;
    }

    try {
      const callId = crypto.randomUUID();
      const call = client.call("default", callId);

      if (!call) throw new Error("Failed to create call");

      const createdCall = await call.create();

      if (createdCall) {
        // Create room in your backend
        const response = await createRoom({
          roomId: callId,
          language: languages,
          topic: topic,
          people: 0,
          maxPeople: maxPeople,
          level: level,
        });

        if (response) {
          toast.success("Room created successfully!");
          setNewRoom(false);
          router.push(`/room/${call.id}`);
        } else {
          toast.error("Failed to create room.");
        }
      }
    } catch (error) {
      console.error("Error creating room:", error);
      toast.error("Error creating room.");
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
            <form
              className="flex flex-col w-full gap-6"
              onSubmit={handleSubmit}
            >
              <h2 className="text-2xl font-bold text-white mb-6">
                Create New Room
              </h2>

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
                  required
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
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Maximum People
                </label>
                <select
                  className="block w-full rounded-md border-blue-600 border-2 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-3 text-white bg-[#313F53]"
                  value={maxPeople}
                  onChange={(e) => setMaxPeople(Number(e.target.value))}
                >
                  {/* Removed "Unlimited" option, default 10 */}
                  {[...Array(10)].map((_, i) => (
                    <option key={i + 1} value={i + 1}>
                      {i + 1}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Level
                </label>
                <select
                  className="block w-full rounded-md border-blue-600 border-2 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-3 text-white bg-[#313F53]"
                  value={level}
                  onChange={(e) => setLevel(e.target.value)}
                >
                  <option value="any">Any Level</option>
                  <option value="beginner">Beginner</option>
                  <option value="intermediate">Intermediate</option>
                  <option value="advanced">Advanced</option>
                </select>
              </div>

              <div className="flex justify-center">
                <button
                  type="submit"
                  className="px-4 py-2 w-full text-sm font-medium text-white bg-blue-600 rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Create Room
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default CreateRoom;
