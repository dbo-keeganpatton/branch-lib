import SidebarClient from "@/components/sideBarClient";
import QueryDatabase from "@/components/queryDatabase";

export default function Home() {
  return (
    <div>
      <SidebarClient>
        <QueryDatabase />
      </SidebarClient>
    </div>
  );
}

