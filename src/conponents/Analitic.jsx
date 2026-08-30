import React from "react";
import {memo} from "react";

const Analitic = memo(function Analitic({completed, inprogress}) {
  return (
    <div className="w-screen border-b-2 bg-gray-300 border-slate-800 flex justify-between md:justify-around  items-center mt-4 ">
      <div className="w-1/2  p-4 flex-1 border-r  uppercase text-[clamp(1.2rem,2vw,2.3rem)] font-bold font-[arial,sans,consolas] text-center">
        <h2>completed</h2>
        <p>{completed}</p>
      </div>
      <div className="w-1/2 p-4 flex-1  border-l uppercase text-[clamp(1.2rem,2vw,2.3rem)]  font-bold font-[arial,sans,consolas] text-center">
        {" "}
        <h2>inprogress</h2>
        <p>{inprogress}</p>
      </div>
    </div>
  );
});

export default Analitic;
