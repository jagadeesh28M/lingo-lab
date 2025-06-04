import Navbar from "@/components/Navbar";
import StreamVideoProvider from "../../../providers/StreamClientProvider";

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
