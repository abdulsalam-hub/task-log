import {X} from "lucide-react";
import React,{memo} from 'react'
import { TaskShare } from '../context/TaskShare'
import { useContext } from "react";
   
const TaskBox=memo(function TaskBox({task})
{const {handleDelete, handleComplete} = useContext(TaskShare);
       return (
         <>
           <div
             className={`border font-bold border-gray-400 ${task.completed ? "border-200 text-gray-900" : " "} rounded p-2 flex items-center justify-around my-2  md:mx-4 w-full `}
           >
             <h1
               className={`font-bold py-3 px-2 text-xl font-['sans-serif',consolas] ${task.completed ? " line-through" : ""}`}
             >
               {task.title}
             </h1>

             <div
               className={` flex justify-around items-center capitalize ${task.dueDate === task.createdDate ? " text-emerald-500 " : ""} `}
             >
               <span>{task.dueDate}</span> <span>{task.createdDate}</span>
             </div>
             <div className="flex justify-around items-baseline-last my-3 w-full">
               <div
                 onClick={() => handleComplete(task.id)}
                 className={`${task.completed ? "bg-green-500 text-slate-300 " : "bg-amber-400 text-white"} rounded-full border border-black p-1`}
               >
                 {task.completed ? "unCompleted" : "Completed"}
               </div>
               <button
                 onClick={() => handleDelete(task.id)}
                 className="h-8 w-8 rounded-full bg-stone-300 text-black/700"
               >
                 {" "}
                 <X className="h-5 w-5 font-bold text-[16px]" />
               </button>
             </div>
           </div>
         </>
       );
   }) 
    


export default TaskBox