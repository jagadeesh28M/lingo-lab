import { syncUser } from "@/actions/user.action";
import UsernameSetup from "@/components/UsernameSetup";

export default async function Home() {
  const user = await syncUser();
  if (user && "username" in user && user.username == "") {
    return <UsernameSetup />;
  }

  return <div>HOME</div>;
}
