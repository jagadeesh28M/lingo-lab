import Navbar from "@/components/Navbar";
import StreamVideoProvider from "../../../providers/StreamClientProvider";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lingo Lab",
  description:
    "A go-to platform for learning languages through real-time conversations",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <StreamVideoProvider>
        <div className="min-h-screen">
          <Navbar />
          {children}
        </div>
      </StreamVideoProvider>
    </main>
  );
}
