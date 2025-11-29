import Sidebar from "@/components/sideBar";
import QueryDatabase from "@/components/queryDatabase";

export default function Home() {
  return (
    <div>

      {/* Top Nav Banner is inherited through the SideBar component */}
      <Sidebar>
        <QueryDatabase />
      </Sidebar>


    </div>
  );
}

