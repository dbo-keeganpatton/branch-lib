"use client";

import Image from "next/image";
import { useState } from "react";



export default function TopBanner({ onMenuClick }: { onMenuClick: () => void }) {
  const inboxImage = "/mail-svgrepo-com.svg";
  const friendList = "/friends-svgrepo-com.svg";
  const homeImage = "/home-1-svgrepo-com.svg";
  const menuImage = "/menu-symbol-svgrepo-com.svg";

  const userName = "TODO";

  // Handles the Image animation for the menu hamburger icon when 
  // a user clicks to toggle the side bar component
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked(true);
    onMenuClick();
    setTimeout(() => setClicked(false), 300);
  };


  return (

    <div className="flex justify-between items-center p-5 m-2 bg-purple-400/10 rounded-sm">

      {/* First Child Div applies image animation for toggling the sidebar  */}
      <div onClick={handleClick} className={`cursor-pointer ${clicked ? "animate-spin" : ""}`}>
        <Image src={menuImage} width={25} height={25} alt="menu button" />
      </div>


      {/* TODO | Add Auth greeting for user */}
      <div>Hello again {userName}</div>

      <div className="flex justify-end gap-5">
        <div className="transition-transform duration-200 hover:scale-120"><Image src={homeImage} width={25} height={25} alt="home" /></div>
        <div className="transition-transform duration-200 hover:scale-120"><Image src={inboxImage} width={25} height={25} alt="inbox" /></div>
        <div className="transition-transform duration-200 hover:scale-120"><Image src={friendList} width={25} height={25} alt="friends" /></div>
      </div>
    </div>
  );
}

