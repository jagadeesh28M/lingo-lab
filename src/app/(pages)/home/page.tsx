import { syncUser } from "@/actions/user.action";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await getServerSession();
  const user = await syncUser();
  if (!session) {
    return redirect("/");
  }
  if (user && "username" in user && user.username.startsWith("temporary-")) {
    return "";
  }

  return <div>HOME</div>;
}
