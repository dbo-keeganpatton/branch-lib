import QueryDatabase from "@/components/queryDatabase";
import TopBanner from "@/components/topBanner";


export default function Home() {
  return (
    <div>
      <TopBanner />
      <h1>Hello from the app</h1>
      <br />
      <QueryDatabase />
    </div>
  );
}
