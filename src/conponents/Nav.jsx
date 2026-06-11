import {LibraryBigIcon, PlusSquare} from "lucide-react";
import React from 'react'
import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <div className="w-full z-50 bg-white gap-x-2 py-2 fixed font-bold  left-0 top-0 flex justify-around items-center border-b-2 border-b-slate-700  text-slate-800 text-2xl backdrop-blur-xs">
      <Link to="/">
        {" "}
        <div className="  capitalize flex items-center font-[consolas,arial,sans-serif] justify-start px-2">
          {" "}
          <LibraryBigIcon />
          <h1 className="">task log</h1>
        </div>
      </Link>
      <div className="text-2xl font-bold capitalize flex items-center justify-between gap-x-8 ">
        <div className="">
          <Link
            title="add tasks"
            to="/task"
            className="h-12 w-12 rounded-full  bg-gray-400 text-slate-600 hover:text-gray-800 hover:bg-gray-600"
          >
            {" "}
            <PlusSquare className="w-10 h-full  text-neutral-600 hover:text-gray-800 " />
          </Link>
        </div>
        <button className="cursor-pointer  rounded-xl bg-gray-300 inset-shadow-black inset-shadow-[2px_1px_5px] capitalize py-2 px-3  transition-all duration-300 hover:bg-slate-700 hover:text-gray-300">
          <Link to="/taskplace">tasks</Link>
        </button>
      </div>
    </div>
  );
};

export default Nav