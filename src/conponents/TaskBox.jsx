import {X} from "lucide-react";
import React,{memo} from 'react'
import { TaskShare } from '../context/TaskShare'
import { useContext } from "react";
   
const TaskBox = memo(function TaskBox({
  id,
  title,
 
  dueDate,
  completed,
  priority,created
}) {
  const {handleComplete, handleDelete} = useContext(TaskShare);

  return (
    <>
      <div
        className={`border border-black font-bold capitalize shadow-lg transition-transform hover:translate-1 shadow-stone-300  font-[arial,consolas] ${completed && "border-gray-100 text-gray-400"} ${dueDate === new Date().toLocaleDateString() && "border-gray-100 text-gray-400"} rounded-lg p-3 my-3 md:my-5 md:mx-auto w-full md:max-w-150`}
      >
        <div className="flex justify-around gap-x-5 items-center my-2">
          <div className={`line-clamp-1 flex  items-center`}>
            <button
              title="delete"
              
              onClick={() => handleDelete(id)}
              className="h-8 w-8 rounded-full hover:bg-stone-300 text-black/900 font-black   flex justify-center items-center cursor-pointer hover:scale-105 transition"
            >
              {" "}
              <X className="h-8 w-5 font-bold text-[16px] " />
            </button>{" "}
            <h1 className={` text-[clamp(1vw,1rem,3rem)]  ${completed && " line-through "}`}>
              {title}
            </h1>
          </div>
          <button
            type="button"
            title={`click to mark: ${!completed ? "complete" : "incomplete"}`}
            onClick={() => handleComplete(id)}
            className={`${!completed ? "bg-blue-400  hover:bg-[blue] hover:scale-3d font-bold  " : "bg-[#09df09c7] hover:bg-[#0db70d] font-bold  hover:scale-105"} capitalize text-white shadow-lg cursor-pointer transition-all duration-300 rounded-full font-medium  p-2`}
          >
            {!completed ? "in progress" : "completed"}
          </button>{" "}
        </div>

        <div className="flex items-center justify-around  gap-x-3 my-4">
          <div title="priorities" className={` `}>
            {priority}
          </div>
          <details className="flex gap-x-3 transition-opacity details-content:transition-discrete duration-500 ease-in cursor-pointer">
            <summary>date: </summary>
            <div className={`capitalize  ${dueDate ? " " : ""} `}>
              <span>{dueDate}</span>~<span>{created}</span>
            </div>
          </details>
        </div>
      </div>
    </>
  );
}); 
    


export default TaskBox