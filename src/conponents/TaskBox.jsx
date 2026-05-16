import {X} from "lucide-react";
import React,{memo} from 'react'
import { TaskShare } from '../context/TaskShare'
import { useContext } from "react";
   
const TaskBox=memo(function TaskBox({task})
{
  const {handleComplete,handleDelete}=useContext(TaskShare);
 


  return (
    <>
      <div
        title={task.id}
        className={`border font-bold  shadow-lg transition-transform hover:translate-1.5 shadow-stone-300 border-gray-600 font-[arial,consolas] ${task.completed ? "border-gray-200 text-gray-900" : ""} rounded-lg p-3 my-2  md:mx-1 w-full `}
      >
        <button
          onClick={() => handleDelete(task.id)}
          className="h-8 w-8 rounded-full bg-stone-300 text-black/700   flex justify-center items-center cursor-pointer hover:scale-105 transition hover:bg-slate-300"
        >
          {" "}
          <X className="h-5 w-5 font-bold text-[16px] " />
        </button>
        <div
          className={`font-bold my-3 ${task.completed && " line-through "} `}
        >
          <h2 className="text-xl ">{task.title}</h2>
        </div>

        <details>
          <summary>dates</summary>
          <div
            className={`capitalize flex-col flex  ${task.dueDate === task.createdDate ? " text-emerald-500 " : ""} `}
          >
            <span>
              {" "}
              <strong>starts: </strong>
              {task.dueDate}
            </span>
            <span>
              <strong>due: </strong>
              {task.createdDate}
            </span>
          </div>
        </details>

        <div className="flex items-center justify-around  gap-x-3 my-4">
          <button
            type="button"
            title="click to mark: 'completed'"
            aria-controls="delete"
            onClick={() => handleComplete(task.id)}
            className={`${task.completed ? "bg-amber-500  " : "bg-emerald-500 "} text-white shadow-lg cursor-pointer transition-all duration-300 rounded-full border border-black p-2`}
          >
            {task.completed ? "unCompleted" : "Completed"}
          </button>
          <div title="priorities" className={` `}>{task.priority}</div>
        </div>
      </div>
    </>
  );
   }) 
    


export default TaskBox