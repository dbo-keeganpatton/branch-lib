import Sidebar from "@/components/sideBar";
import QueryDatabase from "@/components/queryDatabase";
import RichTextEditor from "@/components/editor";


export default function Home() {
  return (
    <div>

      {/* Top Nav Banner is inherited through the SideBar component */}

      <Sidebar>

        <div className="flex-row">
          <QueryDatabase />
          <div className="p-2"> <RichTextEditor /> </div>
        </div>

      </Sidebar>


    </div>
  );
}

