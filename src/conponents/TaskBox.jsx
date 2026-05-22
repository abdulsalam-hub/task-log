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
        className={`border font-bold  shadow-lg transition-transform hover:translate-1.5 shadow-stone-300 border-gray-600 font-[arial,consolas] ${completed === true && "border-gray-200 text-gray-900"} rounded-lg p-3 my-3  md:mx-auto w-full md:max-w-200`}
      >
        <div className="flex justify-between mx-5 items-center">
          <button
            onClick={() => handleDelete(id)}
            className="h-8 w-8 rounded-full bg-stone-300 text-black/700   flex justify-center items-center cursor-pointer hover:scale-105 transition hover:bg-slate-300"
          >
            {" "}
            <X className="h-5 w-5 font-bold text-[16px] " />
          </button>
          <button
            type="button"
            title="click to mark: 'completed'"
            onClick={() => handleComplete(id)}
            className={`${!completed ? "bg-amber-500  " : "bg-emerald-500 "} w-20 capitalize text-white shadow-lg cursor-pointer transition-all duration-300 rounded-full border border-black p-2`}
          >
            {!completed ? "active" : "done"}
          </button>
        </div>

        <div className={`font-bold my-3 ${completed && " line-through "} `}>
          <h1 className="text-2xl ">{title}</h1>
        </div>

        <div className="flex items-center justify-around  gap-x-3 my-4">
          <div title="priorities" className={` `}>
            {priority}
          </div>
          <details>
            <summary>dates</summary>
            <div
              className={`capitalize flex-col flex  ${dueDate ? " text-emerald-500 " : ""} `}
            >
              <span>
                {" "}
                <strong>starts: </strong>
                {dueDate}
              </span>
              <span>
                <strong>due: </strong>
                {created}
              </span>
            </div>
          </details>
        </div>
      </div>
    </>
  );
}); 
    


export default TaskBox