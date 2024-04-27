export default function NavBar({ loadDebate }) {
  return (
    <div className="bg-slate-200 pl-20 pr-20">
      <ul className=" flex justify-center ">
        <li className="pr-14">
          <button
            className="  px-10 py-2 hover:bg-slate-50"
            onClick={() => loadDebate("swimming")}
          >
            SWIMMING
          </button>
        </li>
        <li>
          <button
            className="  px-10 py-2 hover:bg-slate-50"
            onClick={() => loadDebate("running")}
          >
            RUNNING
          </button>
        </li>
        <li className="pl-14">
          <button
            className="  h-full px-10 py-2 hover:bg-slate-50"
            onClick={() => loadDebate("cycling")}
          >
            CYCLING
          </button>
        </li>
      </ul>
    </div>
  );
}
