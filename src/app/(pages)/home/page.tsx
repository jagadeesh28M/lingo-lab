// import { getRooms } from "@/actions/room.action";
import { syncUser } from "@/actions/user.action";
import CreateRoom from "@/components/home/CreateRoom";
// import RoomCard from "@/components/home/RoomCard";
import SearchFilter from "@/components/home/SearchFIlter";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await getServerSession();
  const user = await syncUser();
  // const rooms = await getRooms();
  if (!session) {
    return redirect("/");
  }
  if (user && "username" in user && user.username.startsWith("temporary-")) {
    return "";
  }

  return (
    <div className="bg-[#020617] w-full min-h-[calc(100vh-5rem)] text-white">
      <h2 className="text-white font-bold text-3xl text-left pt-8 pl-10">
        Language Practice Community
      </h2>
      <p className="text-xl font-normal text-gray-400 text-left pl-10 pt-4">
        Join rooms to practice speaking with native speakers and fellow learners
      </p>
      <SearchFilter></SearchFilter>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 px-4 md:px-10">
        <CreateRoom />
        {/* {rooms.map((room) => (
          <RoomCard
            key={room.id}
            id={room.id}
            topic={room.topic}
            language={room.language}
            level={room.level}
            participants={{
              // current: room.participants.length,
              current: 0,
              max: room.maxPeople,
            }}
            hostName={room.owner.name}
            isLive={true}
          />
        ))} */}

        {/* Example Room Card for testing
        <RoomCard
          id="adsfadsf"
          topic="Spanish Conversation"
          language="Spanish"
          level="All Levels"
          participants={{ current: 5, max: 10 }}
          hostName="John Doe"
          isLive={true}
        /> */}
      </div>
    </div>
  );
}
