import {LibraryBigIcon, PlusSquare} from "lucide-react";
import React from 'react'
import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <div className="w-full gap-x-2 py-2 fixed  left-0 top-0 flex justify-around items-center border-b-2 border-b-slate-700 overflow-hidden text-slate-400 bg-stone-100 backdrop-blur-2xl">
      <Link to="/">
        {" "}
        <div className=" text-xl font-bold capitalize flex items-center  justify-start px-2">
          {" "}
          <LibraryBigIcon />
          <h1 className="block">task log</h1>
        </div>
      </Link>
      <div className=" font-bold capitalize font-mono flex  mx-3 items-center justify-between gap-x-3 text-2xl">
        <div className="flex gap-x-2 text-xl">
          <Link
            title="add tasks"
            to="/task"
            className="flex items-center h-10 w-10 rounded-full border-sky-200 bg-gray-200 hover:text-gray-800 justify-center hover:bg-stone-500"
          >
            {" "}
            <PlusSquare className="w-8 h-8 text-neutral-600 text-xl font-bold hover:text-gray-800 " />
          </Link>
        </div>
        <button
      
          className="cursor-pointer text-xl font-bold  text-stone-600 rounded-lg bg-gray-200 capitalize p-1 transition-opacity duration-200 hover:bg-stone-300"
        >
          <Link to="/taskplace">tasks</Link>
        </button>
      </div>
    </div>
  );
};

export default Nav