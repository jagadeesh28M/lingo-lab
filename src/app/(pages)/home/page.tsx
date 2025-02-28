import { syncUser } from "@/actions/user.action";
import UsernameSetup from "@/components/UsernameSetup";
import { getServerSession } from "next-auth";

export default async function Home() {
  const session = await getServerSession();
  const user = await syncUser();
  if (user && "username" in user && user.username == session?.user?.name) {
    return <UsernameSetup />;
  }

  return <div>HOME</div>;
}
