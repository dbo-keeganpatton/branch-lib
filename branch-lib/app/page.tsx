import QueryDatabase from "@/components/queryDatabase";
import TopBanner from "@/components/topBanner";
import SideBar from "@/components/sideBar";


export default function Home() {
  return (
    <div>
      <TopBanner />
      <br />
      <div className="flex justify-between items-center p-3 h-full pt-10">
        <div className="w-md h-screen"><SideBar /></div>
        <div className="h-screen"><QueryDatabase /></div>
      </div>
    </div>
  );
}
