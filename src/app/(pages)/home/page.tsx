import { getRooms } from "@/actions/room.action";
import RoomListClient from "@/components/home/RoomListClient";

export default async function Home() {
  const rooms = await getRooms();
  return (
    <>
      <div className="bg-[#020617] w-full min-h-[calc(100vh-5rem)] text-white over">
        <h2 className="text-white font-bold text-3xl text-left pt-8 pl-10">
          Language Practice Community
        </h2>
        <p className="text-xl font-normal text-gray-400 text-left pl-10 pt-4">
          Join rooms to practice speaking with native speakers and fellow
          learners
        </p>
        <RoomListClient rooms={rooms} />
      </div>
    </>
  );
}
