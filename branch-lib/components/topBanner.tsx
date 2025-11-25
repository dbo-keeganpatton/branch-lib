import Image from "next/image"

export default function TopBanner() {

  const inboxImage = "/inbox-message-mail-svgrepo-com.svg"
  const friendList = "/friends-svgrepo-com.svg"
  const homeImage = "/home-svgrepo-com.svg"
  const menuImage = "/menu-symbol-svgrepo-com.svg"

  return (
    <div className="flex justify-between items-center w-full p-5 bg-purple-400/10">
      <Image
        src={menuImage}
        width={25}
        height={25}
        alt="Button for menu expander"
      />

      <Image
        src={homeImage}
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

      <Image
        src={inboxImage}
        width={25}
        height={25}
        alt="Button for menu expander"
      />



    </div>
  );

}
