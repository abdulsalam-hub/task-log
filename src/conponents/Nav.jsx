import {LibraryBigIcon, PlusSquare} from "lucide-react";
import React from 'react'
import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <div className="w-full z-50 bg-white gap-x-2 py-2 fixed font-bold  left-0 top-0 flex justify-around items-center border-b-2 border-b-slate-700  text-slate-800  backdrop-blur-xs">
      <Link
        to="/"
        className="capitalize flex items-center font-[consolas,arial,sans-serif] "
      >
        <LibraryBigIcon className="h-5 w-6" />
        <h1 className="text-[clamp(1rem,2vw,2rem)]">task log</h1>
      </Link>
      <div className="font-bold capitalize flex items-center justify-between gap-x-8 ">
        <Link
          title="add tasks"
          to="/task"
          className="h-10 w-10 flex items-center justify-center rounded-full  bg-gray-200 text-slate-600 hover:text-white hover:bg-gray-600"
        >
          {" "}
          <PlusSquare className="w-6 h-6  text-neutral-600 hover:text-gray-800 " />
        </Link>

        <button className="cursor-pointer text-[clamp(1rem,2vw,2rem)] text-center grid place-items-center rounded-xl bg-gray-300 inset-shadow-black inset-shadow-[2px_1px_5px] capitalize  h-9 w-17  transition-all duration-300 hover:bg-slate-700 hover:text-gray-300">
          <Link to="/taskplace" className="text-[clamp(1rem,2vw,1rem)] ">
            tasks
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Nav