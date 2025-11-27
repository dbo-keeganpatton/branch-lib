"use client";

import { useState } from "react";
import SideBar from "./sideBar";
import TopBanner from "./topBanner";

export default function SidebarClient({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(true);

  const toggleSideBar = () => setOpen(!open);

  return (
    <>
      <TopBanner onMenuClick={toggleSideBar} />

      <div className="flex pl-2 pr-2">
        {open && <SideBar />}
        {children}
      </div>
    </>
  );
}

