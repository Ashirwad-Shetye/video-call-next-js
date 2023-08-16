import Image from "next/image";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sage | Home",
  description: "Free and open-source video calling application",
};

export default function Home() {
  return (
    <main className="relative flex flex-col h-screen">
      <div className="h-20"></div>
      <div className="relative flex-1 grid">
        <div className="mx-10 mb-10 rounded-3xl bg-slate-800"></div>
      </div>
    </main>
  );
}
