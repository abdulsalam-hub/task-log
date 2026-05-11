import React,{useContext} from 'react'
import { TaskShare } from "../context/TaskShare";
import {Calendar,  Trash2} from "lucide-react";


const TaskPlace=() =>
{
    const { task,handleDelete,handleComplete }=useContext(TaskShare)
    const listTasks=["all","completed","undone"]
    let filterTask;
    
    
function handlefilter(param) {
    if(param === 'all') {
        filterTask = task
    }
    if (param === "completed") {
        filterTask=task.filter((tasks) =>
        {
            return tasks.completed === true
        })
    } 
    if(param === "undone") {
         filterTask = task.filter((tasks) => {
           return tasks.completed;
         });
    }
    }
    
  return (
    <>
      <div
        className={` w-full mt-12  py-2 flex items-center justify-center gap-x-3 bg-slate-500`}
      >
        {listTasks.map((tasks) => {
          return (
            <div
              onClick={() => handlefilter(tasks)}
              key={tasks}
              className={`${task === "all" | "completed" | "undone" ? "bg-fuchsia-300" : ""} bg-gray-500  text-white rounded-full p-2 font-bold capitalize max-w-35 w-25  text-center my-1 hover:bg-fuchsia-500 cursor-pointer`}
            >
              {tasks}
            </div>
          );
        })}
      </div>

      <div className="w-full mt-4 border ">
        {/* {[filterTask].map((task) => {
          return (
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
                {" "}
                <span>
                  <strong className="mr-2">created date :</strong>{" "}
                  {task.createdDate}
                </span>
                <span>
                  <Calendar className="w-5 h-5 " /> {task.dueDate}
                </span>
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
                  <Trash2 className="h-5 w-5 font-bold text-[16px]" />
                </button>
              </div>
            </div>
          );
        })} */}
      </div>
    </>
  );
}

export default TaskPlace