"use server";
import { StreamClient } from "@stream-io/node-sdk";
import { fetchUser } from "./user.action";

const apiKey = process.env.NEXT_PUBLIC_STREAM_API_KEY;
const apiSecret = process.env.STREAM_SECRECT_KEY;

export const tokenProvider = async () => {
  const user = await fetchUser();

  if (!user) {
    throw new Error("user not logged in");
  }

  if ("id" in user) {
    if (!apiKey) throw new Error("Api key is missing");
    if (!apiSecret) throw new Error("No api secret");

    const client = new StreamClient(apiKey, apiSecret);
    const validity = 60 * 60;
    const token = client.generateUserToken({
      user_id: user.id,
      validity_in_seconds: validity,
    });
    return token;
  } else {
    throw new Error("User is not logged in");
  }
};
