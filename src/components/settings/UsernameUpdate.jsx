"use client";

import { getUsernames, updateUsername } from "@/actions/user.action";
import { useState, useEffect } from "react";
import { toast } from "sonner";

export default function UsernameUpdate() {
  const [usernames, setUsernames] = useState([]);
  const [username, setUsername] = useState("");
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

  const handleSubmit = async () => {
    const update = await updateUsername({ username });
    if (update && "success" in update && update.success) {
      setUsername("");
      toast("Username Updated Successfully 🎉");
    } else {
      toast("Failed to Update Username ⚠️");
    }
  };

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <label htmlFor="username" className="text-gray-300">
          Username
        </label>
        <input
          id="username"
          className="w-full rounded-md border border-gray-600 bg-gray-700 px-3 py-2 text-white placeholder:text-gray-400 focus:border-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-500"
          placeholder="Enter your username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <p className="text-sm text-gray-400">
          This is your unique username that others will see. You can change this
          at any time.
        </p>

        {/* Error Messages */}
        {containsSpaces && (
          <p className="text-sm text-red-500">
            Username should not contain spaces
          </p>
        )}
        {isDuplicate && (
          <p className="text-sm text-red-500">Username is already taken</p>
        )}
      </div>

      <div className="flex justify-end">
        <button
          className="bg-blue-600 text-white hover:bg-blue-700 rounded-lg p-3 disabled:opacity-50 disabled:cursor-not-allowed"
          onClick={handleSubmit}
          disabled={containsSpaces || isDuplicate || username === ""}
        >
          Save username
        </button>
      </div>
    </div>
  );
}
