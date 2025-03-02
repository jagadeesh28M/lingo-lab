import LandingPage from "@/components/landing/LandingPage";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await getServerSession();

  if (session?.user) {
    return redirect("/home");
  }

  return (
    <main>
      <LandingPage />
    </main>
  );
}
