"use client";

import { getUsernames, updateUsername } from "@/actions/user.action";
import { useState, useEffect } from "react";

export default function UpdateUsername() {
  const [usernames, setUsernames] = useState<string[]>([]);
  const [username, setUsername] = useState<string>("");
  const containsSpaces = /\s/.test(username);
  const isDuplicate = usernames.includes(username);

  useEffect(() => {
    async function fetchUsernames() {
      const data = await getUsernames();
      if (Array.isArray(data)) {
        setUsernames(data);
      } else {
        console.error("Failed to fetch usernames:", data);
      }
    }
    fetchUsernames();
  }, []);
  console.log(usernames);

  const handleSubmit = async () => {
    const update = await updateUsername({ username });
    if (update && "success" in update && update.success) {
      window.location.reload();
    }
  };

  return (
    <div className="my-5 flex flex-col gap-3">
      <input
        type="text"
        className="p-4 rounded-lg text-black font-semibold"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter username"
      />
      {containsSpaces && (
        <div className="text-red-500 font-semibold">
          Username should not contain spaces.
        </div>
      )}
      {isDuplicate && (
        <div className="text-red-500 font-semibold">
          Username already exists.
        </div>
      )}
      <button
        className="bg-blue-600 text-white font-semibold p-3 rounded-lg hover:bg-blue-900 shadow-sm shadow-white hover:cursor-pointer"
        disabled={containsSpaces || isDuplicate}
        onClick={!containsSpaces && !isDuplicate ? handleSubmit : undefined}
      >
        Submit
      </button>
    </div>
  );
}
