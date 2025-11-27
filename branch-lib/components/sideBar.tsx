export default function SideBar() {

  return (
    <div className="flex-row bg-purple-400/10 rounded-sm h-full p-2">

      <h1 className="text-md text-purple-500/50"> What&apos;s New? </h1>
      <br />

      <h1 className="text-md text-purple-500/50"> Top Categories </h1>
      <ul className="border-l border-l-gray-600/50 ml-2 p-2 w-30">
        <li className="mt-2 p-2 text-xs border border-purple-400/5 hover:border-purple-400/50 rounded-xs bg-purple-400/2"> Science Fiction </li>
        <li className="mt-2 p-2 text-xs border border-purple-400/5 hover:border-purple-400/50 rounded-xs bg-purple-400/2"> Biographies </li>
        <li className="mt-2 p-2 text-xs border border-purple-400/5 hover:border-purple-400/50 rounded-xs bg-purple-400/2"> Agriculture </li>
        <li className="mt-2 p-2 text-xs border border-purple-400/5 hover:border-purple-400/50 rounded-xs bg-purple-400/2"> Literary Fiction </li>
        <li className="mt-2 p-2 text-xs border border-purple-400/5 hover:border-purple-400/50 rounded-xs bg-purple-400/2"> Fantasy </li>
        <li className="mt-2 p-2 text-xs border border-purple-400/5 hover:border-purple-400/50 rounded-xs bg-purple-400/2"> Horror </li>
      </ul>

    </div>
  )

};
