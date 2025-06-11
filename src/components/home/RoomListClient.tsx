"use client";

import React, { useState, useMemo } from "react";
import SearchFilter from "./SearchFIlter";
import RoomCard from "./RoomCard";
import CreateRoom from "./CreateRoom";

interface Room {
  id: string;
  topic: string;
  language: string;
  level: string;
  people: number;
  maxPeople: number;
  owner: { name: string };
}

interface RoomListClientProps {
  rooms: Room[];
}

const RoomListClient: React.FC<RoomListClientProps> = ({ rooms }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFilters, setSelectedFilters] = useState<
    Record<string, string[]>
  >({
    level: [],
    time: [],
    participants: [],
  });

  // Categorize current participants count to size category string
  const getParticipantCategory = (num: number) => {
    if (num <= 3) return "small";
    if (num <= 6) return "medium";
    return "large";
  };

  // Filter rooms based on search query and selected filters
  const filteredRooms = useMemo(() => {
    return rooms.filter((room) => {
      // Match search query on language or topic (case-insensitive)
      const matchesSearch =
        room.language.toLowerCase().includes(searchQuery.toLowerCase()) ||
        room.topic.toLowerCase().includes(searchQuery.toLowerCase());

      if (!matchesSearch) return false;

      // Filter by level if any selected
      if (
        selectedFilters.level.length > 0 &&
        !selectedFilters.level.includes(room.level)
      ) {
        return false;
      }

      // Filter by participants if any selected
      if (selectedFilters.participants.length > 0) {
        const category = getParticipantCategory(room.people);
        if (!selectedFilters.participants.includes(category)) {
          return false;
        }
      }

      return true;
    });
  }, [rooms, searchQuery, selectedFilters]);

  return (
    <div>
      <SearchFilter
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        selectedFilters={selectedFilters}
        setSelectedFilters={setSelectedFilters}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 px-4 md:px-10">
        <CreateRoom />
        {filteredRooms.map((room) => (
          <RoomCard
            key={room.id}
            id={room.id}
            topic={room.topic}
            language={room.language}
            level={room.level}
            participants={{ current: room.people, max: room.maxPeople }}
            hostName={room.owner.name}
            isLive={true}
          />
        ))}
      </div>
    </div>
  );
};

export default RoomListClient;
