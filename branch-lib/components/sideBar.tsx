"use client";

import { useState } from "react";
import TopBanner from "./topBanner";


function SideBar({ open }: { open: boolean }) {
  return (
    <div
      className={`
        flex-row bg-purple-400/10 rounded-sm p-2
        transition-transform duration-200 h-full 
        ${open ? "translate-x-0" : "-translate-x-full"}
      `}
    >
      <h1 className="text-sm text-purple-500/50"> What&apos;s New? </h1>
      <br />

      <h1 className="text-sm text-purple-500/50">  Categories </h1>
      <ul className="border-l border-l-gray-600/50 pl-2">
        <li className="mt-1 p-1 text-xs border border-purple-400/5 hover:border-purple-400/50 rounded-xs bg-purple-400/2"> Science Fiction </li>
        <li className="mt-1 p-1 text-xs border border-purple-400/5 hover:border-purple-400/50 rounded-xs bg-purple-400/2"> Biographies </li>
        <li className="mt-1 p-1 text-xs border border-purple-400/5 hover:border-purple-400/50 rounded-xs bg-purple-400/2"> Agriculture </li>
        <li className="mt-1 p-1 text-xs border border-purple-400/5 hover:border-purple-400/50 rounded-xs bg-purple-400/2"> Literary Fiction </li>
        <li className="mt-1 p-1 text-xs border border-purple-400/5 hover:border-purple-400/50 rounded-xs bg-purple-400/2"> Fantasy </li>
        <li className="mt-1 p-1 text-xs border border-purple-400/5 hover:border-purple-400/50 rounded-xs bg-purple-400/2"> Horror </li>
      </ul>

    </div>
  )
};



export default function SidebarClient({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(true);

  return (
    <>
      <TopBanner onMenuClick={() => setOpen(!open)} />

      <div className="flex pl-2 pr-2">
        <div className="overflow-hidden w-md"> <SideBar open={open} /> </div>
        {children}
      </div>
    </>
  );
}
