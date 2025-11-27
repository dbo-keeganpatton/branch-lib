"use client";

import Image from "next/image";

export default function TopBanner({ onMenuClick }: { onMenuClick: () => void }) {
  const inboxImage = "/mail-svgrepo-com.svg";
  const friendList = "/friends-svgrepo-com.svg";
  const homeImage = "/home-1-svgrepo-com.svg";
  const menuImage = "/menu-symbol-svgrepo-com.svg";

  const userName = "TODO";

  return (
    <div className="flex justify-between items-center p-5 m-2 bg-purple-400/10 rounded-sm">
      <div onClick={onMenuClick} className="cursor-pointer">
        <Image src={menuImage} width={25} height={25} alt="menu button" />
      </div>


      {/* TODO | Add Auth greeting for user */}
      <div>Hello again {userName}</div>

      <div className="flex justify-end gap-5">
        <Image src={homeImage} width={25} height={25} alt="home" />
        <Image src={inboxImage} width={25} height={25} alt="inbox" />
        <Image src={friendList} width={25} height={25} alt="friends" />
      </div>
    </div>
  );
}

