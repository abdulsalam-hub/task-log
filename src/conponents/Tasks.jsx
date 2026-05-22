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

  const NoTask = () => {
    return (
      <div>
        <FilePlus className="text-amber-500 fill-slate-300 h-20 w-20" />
        <h2>no tasks added yet !</h2>
        <p className="text-[20px]">click dropdown on the right to add task</p>
      </div>
    );
  };
  return (
    <div className="pt-16 mb-2  h-screen w-full px-3 ">
      <div className="w-full border transition duration-500  rounded py-2 h-auto mt-3 cursor-pointer">
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
            <FilePlus className=" flex mx-auto text-amber-400 fill-slate-200 h-20 w-20" />
            <h2>no tasks added yet !</h2>
            <p className="text-[20px]">
              click dropdown on the right to add task
            </p>
          </div>
        )}
      </div>
    </div>
  );
}


export default Tasks;

