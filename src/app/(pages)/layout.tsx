import Navbar from "@/components/Navbar";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="en">
        <body>
          <div className="min-h-screen">
            <Navbar />
            {children}
          </div>
        </body>
      </html>
    </>
  );
}
