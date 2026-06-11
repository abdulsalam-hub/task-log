import {memo, useContext} from "react";
import {TaskShare} from "../context/TaskShare";
import { CalendarCheck, Trash2Icon} from "lucide-react";

const TaskCell = memo(function TaskCell( { id,title,note,dueDate,completed,priority}) {
 const {handleDelete, handleComplete} = useContext(TaskShare);
 return (
   <div className="w-full md:max-w-150 shadow-lg transition-all duration-100 border p-2 md:p-4 rounded-lg relative my-4 mr-2">
     <div className="flex items-center justify-between mx-2">
       <h1 title="task" className="font-black font-[arial,consolas] capitalize py-3 ">
         {title}
       </h1>
       <span
         title="delete task"
         onClick={() => handleDelete(id)}
         className="w-10 h-10 cursor-pointer rounded-full hover:bg-stone-400 bg-slate-200 border flex justify-center items-center "
       >
         <Trash2Icon className="text-[#f01f0c] hover:text-red-500" />
       </span>
     </div>

     <p title="task description" className=" py-1  font-[trebuchet Ms,consolas,arial,sans-serif] font-[400] ">{note} </p>
     <div className="my-3 w-full flex gap-x-2">
       <CalendarCheck className="text-sky-200" /> <span>{dueDate}</span>
     </div>
     <div className="flex items-center justify-between mx-3 my-3 ">
       <button
         onClick={() => handleComplete(id)}
         className="border rounded-xl px-3 text-center uppercase font-bold transition-all duration-300 cursor-pointer"
       >
         {!completed ? "active" : "done"}
       </button>
       <div> {priority}</div>
       
     </div>
   </div>
 );
});

export default TaskCell