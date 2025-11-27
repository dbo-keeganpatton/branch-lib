import QueryDatabase from "@/components/queryDatabase";
import TopBanner from "@/components/topBanner";
import SideBar from "@/components/sideBar";


export default function Home() {
  return (
    <div>
      <TopBanner />
      <div className="flex pl-2 pr-2">
        <div className="w-sm h-screen"><SideBar /></div>
        <div className="h-screen"><QueryDatabase /></div>
      </div>
    </div>
  );
}
