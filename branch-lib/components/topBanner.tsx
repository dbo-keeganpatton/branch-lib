import Image from "next/image"

export default function TopBanner() {

  const inboxImage = "/mail-svgrepo-com.svg"
  const friendList = "/friends-svgrepo-com.svg"
  const homeImage = "/home-1-svgrepo-com.svg"
  const menuImage = "/menu-symbol-svgrepo-com.svg"

  const userName = "TODO"

  return (
    <div className="flex justify-between items-center w-full/2 p-5 m-2 bg-purple-400/10 rounded-sm">

      <div>
        <Image
          src={menuImage}
          width={25}
          height={25}
          alt="Button for menu expander"
        />
      </div>

      {/* TODO: Add username auth personal greeting flow */}
      <div>Hello again {userName}</div>
      {/* END TODO */}

      <div className="flex justify-end gap-5">
        <Image
          src={homeImage}
          width={25}
          height={25}
          alt="Button for menu expander"
        />

        <Image
          src={inboxImage}
          width={25}
          height={25}
          alt="Button for menu expander"
        />

        <Image
          src={friendList}
          width={25}
          height={25}
          alt="Button for menu expander"
        />

      </div>

    </div>
  );

}
