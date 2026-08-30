import React from 'react'
import Forms from "./Forms";
import TaskBox from "./TaskBox";
import { useContext ,useState} from "react";
import   { TaskShare} from "../context/TaskShare";
import {ChevronDownSquare,X ,ChevronUpSquare, FilePlus} from "lucide-react";
const Tasks=() =>
{
  const  {task}=useContext(TaskShare)
  const [form,setForm]=useState(true)
  function handleClose() {
    setForm(prev => !prev)
  }

  return (
    <div className="pt-16 px-1 h-screen w-full ">
      <div className="w-full border transition duration-500 sticky top-20 left-0 z-30 rounded py-2 h-auto bg-slate-200 cursor-pointer mb-6">
        {form ? (
          <ChevronDownSquare
            onClick={handleClose}
            className="h-10 w-10 rounded-lg text-xl "
          />
        ) : (
          <ChevronUpSquare
            onClick={handleClose}
            className="h-10 w-10 rounded-lg text-xl  flex items-center justify-end-safe"
          />
        )}
        {!form && <Forms />}
      </div>
      <>
        {task.map((task,idx) => {
          return (
            <TaskBox
              key={idx}
              id={task.id}
              title={task.title}
              created={task.createdDate}
              dueDate={task.dueDate}
              priority={task.priority}
              completed={task.completed}
            />
          );
        })}
      </>
      <div className="mx-auto mt-10 font-black text-2xl   text-center capitalize">
        {task.length <= 0 && (
          <div>
            <FilePlus className="flex mx-auto text-slate-700 fill-gray-300 h-20 w-20 " />
            <h2 className=" text-[clamp(1.4rem,2vw,2rem)] text-slate-800 uppercase font-serif">no tasks added yet !</h2>
            <p className="text-[clamp(1rem,2vw,1rem)]">
              click dropdown on the left to add task
            </p>
          </div>
        )}
      </div>
    </div>
  );
}


export default Tasks;

