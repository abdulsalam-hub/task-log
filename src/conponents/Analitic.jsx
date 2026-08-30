import React from 'react'
import {memo} from "react";

const Analitic =memo( function Analitic({completed,inprogress}) {
  return (
    <div className="w-full border-b-2 bg-gray-300 border-slate-800 flex justify-between md:justify-around  items-center ">
      <div className="  p-4  uppercase text-[clamp(1.5rem,2vw,2.3rem)] font-bold font-[arial,sans,consolas] text-center">
        <h2>completed</h2>
        <p>{completed}</p>
      </div>
      <div className=" p-4  border-l uppercase text-[clamp(1.5rem,2vw,2.3rem)] font-bold font-[arial,sans,consolas] text-center">
        {" "}
        <h2>inprogress</h2>
        <p>{inprogress}</p>
      </div>
    </div>
  );
})

export default Analitic