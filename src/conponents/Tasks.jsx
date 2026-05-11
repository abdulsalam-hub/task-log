import React from 'react'
import Forms from "./Forms";
import TaskBox from "./TaskBox";
import { useContext ,useState} from "react";
import   { TaskShare} from "../context/TaskShare";
import {ChevronDownSquare, File ,ChevronUpSquare, FilePlus} from "lucide-react";
const Tasks=() =>
{
  const { task,handleComplete,handleDelete }=useContext(TaskShare)
  const [form,setForm]=useState(false)
  function handleClose() {
    setForm(prev => !prev)
  }
  return (
    <div className="pt-13  h-screen w-full px-3 ">
      <div className="w-full border rounded h-auto mt-2">
        {form ? (
          <ChevronDownSquare
            onClick={handleClose}
            className="h-10 w-10 rounded-lg text-xl relative left-[80%] "
          />
        ) : (
          <ChevronUpSquare
            onClick={handleClose}
            className="h-10 w-10 rounded-lg text-xl relative left-[80%] "
          />
        )}
        {!form && <Forms />}
      </div>
      <div className="">
        {task > 0 ? (
          task.map((task) =>
          {
            return (
            <div
              key={task.id}
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
          );})
        ) : (
          <div className="text-center flex justify-center flex-col items-center text-3xl capitalize font-black mt-9">
            <FilePlus className="text-2xl h-20 w-20 text-amber-400 fill-neutral-50 text-center my-6" />
            <h2>no task added yet ! </h2>
          </div>
        )}
      </div>
      
    </div>
  );
}

export default Tasks