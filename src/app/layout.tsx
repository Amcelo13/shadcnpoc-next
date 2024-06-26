import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils"
import SideBar from "@/components/SideBar";
import { Header } from "@/components/Header";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex items-start justify-between`}>
        <div className="min-w-[300px] border-r min-h-screen p-4">
        <SideBar />
        </div>
       <main className="grid w-full h-full">
        <Header />
         <div className="p-8">
         {children}
         </div>
       </main>
      </body>
    </html>
  );
}
