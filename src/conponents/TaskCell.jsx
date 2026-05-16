import {useContext} from "react";
import {TaskShare} from "../context/TaskShare";
import {  CalendarCheck,  Trash} from "lucide-react";
function TaskCell({task})
{
  const {handleDelete, handleComplete} = useContext(TaskShare);
  return (
    <div key={task.id} className="w-full shadow-lg transition-all duration-500 border p-2 rounded-lg relative">
      <span
        onClick={() => handleDelete(task.id)}
        className="w-10 h-10 cursor-pointer rounded-full hover:bg-stone-400 bg-slate-200 border flex justify-center items-center absolute right-0 mr-5"
      >
        <Trash className="hover:text-white" />
      </span>
      <h1 className="font-black font-[arial,consolas] capitalize py-3 ">
        {task.title}
      </h1>
      <p className="line-clamp-1 py-1  font-[consolas,arial] font-medium ">
        {task.description}{" "}
      </p>
      <div className="my-3 w-full flex gap-x-2">
        <CalendarCheck className="text-sky-200" /> <span>{task.dueDate}</span>
      </div>
      <div className="flex items-center justify-between mx-3 my-3 ">
        <button
          onClick={() => handleComplete(task.id)}
          className="border rounded-xl px-3 text-center uppercase font-bold transition-all duration-300 cursor-pointer"
        >
          {task.completed ? "on" : "done "}
        </button>
        <div>{task.priority}</div>
      </div>
    </div>
  );
}
export default TaskCell