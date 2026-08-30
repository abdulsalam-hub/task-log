import React, {useContext}  from 'react'
import {PlusSquareIcon} from "lucide-react";
import {Link} from "react-router-dom";
import Analitic from "../conponents/Analitic";
import {TaskShare} from "../context/TaskShare";

const Hero=() =>
{
const {completed,inprogress} =useContext(TaskShare)

  return (
    <div className="w-full h-screen   bg-stone-200 backdrop-blur-md pt-15 overflow-hidden">
      <Analitic completed={completed} inprogress={inprogress} />

      <div className="w-full flex items-center  justify-center  mt-30">
        <Link
          to="/task"
          title="add tasks"
          className="bg-gray-800 max-h-50 shadow-lg transition-colors  duration-100 ease-in-out shadow-gray-600 h-40 w-40 rounded-lg flex justify-center hover:text-black items-center cursor-pointer hover:scale-90 hover:bg-gray-400 "
        >
          <PlusSquareIcon className="text-2xl h-15 w-15 text-gray-400 hover:text-gray-800" />
        </Link>
      </div>
    </div>
  );
}

export default Hero