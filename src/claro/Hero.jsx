import React  from 'react'
import Axios from "./Axios";
import {PlusSquareIcon} from "lucide-react";
import {Link} from "react-router-dom";
const Hero=() =>
{

  return (
    <div className="w-full h-screen  flex  items-center  justify-center  bg-stone-200 ">
      <Link to="/task">
        <div
          title="add tasks"
          className="bg-gray-800 max-h-50 shadow-lg shadow-gray-600 h-40 w-40 rounded-lg flex justify-center hover:text-gray-800 items-center cursor-pointer hover:scale-90 hover:bg-gray-400 "
        >
          <PlusSquareIcon className="text-2xl h-15 w-15 text-gray-400 hover:text-gray-800" />
        </div>
    
      </Link>
    </div>
  );
}

export default Hero