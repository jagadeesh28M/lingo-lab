"use client";
import { tokenProvider } from "@/actions/stream.action";
import { fetchUser } from "@/actions/user.action";
import Loader from "@/components/Loder";
import { StreamVideo, StreamVideoClient } from "@stream-io/video-react-sdk";
import { ReactNode, useEffect, useState } from "react";

interface UserInfo {
  id: string;
  username: string;
  name: string;
  email: string;
  image: string | null;
  createdAt: Date;
  modifiedAt: Date;
}

const apiKey = process.env.NEXT_PUBLIC_STREAM_API_KEY;

const StreamVideoProvider = ({ children }: { children: ReactNode }) => {
  const [videoClient, setVideoClient] = useState<StreamVideoClient | null>(
    null
  );
  const [userData, setUserData] = useState<UserInfo | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const userDataFromDb = async () => {
      try {
        const user = await fetchUser();
        if (!user || typeof user !== "object" || "redirect" in user) {
          console.warn("No user data found or user is a redirect object");
          return;
        } else {
          setUserData(user as UserInfo);
        }
        setLoading(false);
      } catch (error) {
        console.error("Error fetching user data:", error);
        setLoading(false);
      }
    };

    userDataFromDb();
  }, []);

  useEffect(() => {
    if (!userData || loading) return;
    if (!apiKey) {
      throw new Error("Stream API key is missing");
    }

    const validApiKey = apiKey as string;

    const client = new StreamVideoClient({
      apiKey: validApiKey,
      user: {
        id: userData.id,
        name: userData.username || userData.id,
        image: userData.image || undefined,
      },
      tokenProvider,
    });

    setVideoClient(client);
  }, [userData, loading]);

  if (loading) {
    return <Loader />;
  }
  return videoClient ? (
    <StreamVideo client={videoClient}>{children}</StreamVideo>
  ) : null;
};

export default StreamVideoProvider;
