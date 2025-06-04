"use client";
import React, { useMemo } from "react";
import { Users, Languages, Mic, User, Sparkles } from "lucide-react";
import { motion } from "motion/react";
import Button from "../ui/JoinButton";
import { toast } from "sonner";

export interface RoomProps {
  id: string;
  topic: string;
  language: string;
  level: string;
  participants: {
    current: number;
    max: number;
  };
  hostName: string;
  isLive: boolean;
}

// Utility to pick a random gradient
const getRandomGradient = () => {
  const gradients = [
    "from-pink-500 to-yellow-500",
    "from-blue-500 to-teal-500",
    "from-green-500 to-emerald-500",
    "from-purple-600 to-pink-600",
    "from-orange-500 to-red-500",
    "from-indigo-600 to-cyan-600",
    "from-teal-500 to-lime-500",
    "from-amber-600 to-rose-500",
    "from-red-600 to-purple-600",
    "from-fuchsia-500 to-indigo-500",
  ];
  return gradients[Math.floor(Math.random() * gradients.length)];
};

const RoomCard: React.FC<RoomProps> = ({
  id,
  topic,
  language,
  level,
  participants,
  hostName,
  isLive,
}) => {
  const randomGradient = useMemo(() => getRandomGradient(), []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative group"
    >
      {/* Glow effect */}
      <div
        className={`absolute -inset-0.5 bg-gradient-to-r ${randomGradient} rounded-2xl opacity-0 group-hover:opacity-30 blur transition-all duration-500`}
      />

      {/* Card content */}
      <div className="relative bg-slate-900/80 backdrop-blur-sm border border-slate-800/50 rounded-2xl overflow-hidden hover:border-slate-700/50 transition-all duration-300">
        {/* Language banner */}
        <div className="relative h-20 overflow-hidden">
          <div
            className={`absolute inset-0 bg-gradient-to-r ${randomGradient} opacity-20`}
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(0,0,0,0)_30%,rgba(0,0,0,0.8)_100%)]" />

          {/* Live indicator */}
          {isLive && (
            <div className="absolute top-4 right-4 flex items-center gap-1.5">
              <span className="flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500"></span>
              </span>
              <span className="text-xs font-medium text-red-400">LIVE</span>
            </div>
          )}

          {/* Language info */}
          <div className="absolute bottom-4 left-4">
            <div className="flex items-center gap-2 text-white/90">
              <Languages size={16} className="text-white/70" />
              <span className="font-medium">{language}</span>
              <span className="w-1 h-1 rounded-full bg-white/30" />
              <span className="text-sm text-white/70">{level}</span>
            </div>
          </div>
        </div>

        <div className="p-5">
          {/* Room name */}
          <h3 className="text-lg font-semibold text-white mb-4 line-clamp-2">
            {topic}
          </h3>

          {/* Participants */}
          <div className="space-y-2 mb-4">
            <div className="flex items-center justify-between text-sm text-slate-300">
              <div className="flex items-center gap-1.5">
                <Users size={14} />
                <span>
                  {participants.current}/{participants.max} Participants
                </span>
              </div>
              {isLive && (
                <span className="text-emerald-400 text-xs font-medium">
                  Room Active
                </span>
              )}
            </div>
            <div className="h-1.5 rounded-full bg-slate-800 overflow-hidden">
              <div
                className="h-full bg-indigo-500 rounded-full transition-all duration-300"
                style={{
                  width: `${(participants.current / participants.max) * 100}%`,
                }}
              />
            </div>
          </div>

          {/* Host info */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 p-0.5">
                <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center">
                  <User size={14} className="text-indigo-300" />
                </div>
              </div>
              <div>
                <p className="text-sm font-medium text-slate-200">{hostName}</p>
              </div>
            </div>

            <Button
              variant={isLive ? "primary" : "outline"}
              size="sm"
              glowing={isLive}
              className="gap-1.5"
              onClick={() => {
                toast.success("Joined the room!");
              }}
            >
              {isLive ? (
                <>
                  <Mic size={14} />
                  <span>Join Now</span>
                </>
              ) : (
                <>
                  <Sparkles size={14} />
                  <span>Join</span>
                </>
              )}
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default RoomCard;
