import { cn } from "@/lib/utils";
import "@/styles/globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sage",
  description: "Video call and collaboration platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={cn("antialiased", inter.className)}>
      <body className="h-screen bg-slate-50 dark:bg-slate-900 antialiased">
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
