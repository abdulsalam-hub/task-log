import React,{useContext ,useState} from 'react'
import { TaskShare } from "../context/TaskShare";
import { Link } from "react-router-dom";
import TaskCell from "../conponents/TaskCell";
import FilterBar from "../conponents/FilterBar";

const TaskPlace=() =>
{
    const { task }=useContext(TaskShare)
  const listTasks=["all","active","completed"];
  const [filterTask,setFilterTask]=useState(task)
  const [color,setColor]=useState("all")  
  
  
  function handlefilter(param)
  {
 
    setColor(param);
    if(param==='all') {
      setFilterTask(task);

  }
    //const filt = task.filter((tasks) => (tasks.completed));
  if(param === "active") {
   
    setFilterTask(task.filter(tasks=>(!tasks.completed)))


    } 
  if(param==="completed") {
    setFilterTask(task.filter(task =>( task.completed)));

  }

    
    }
   
  return (
    <div className="w-full pt-10 scroll-smooth pb-5">
   
      <div
        className={`w-full sticky top-18.5 z-50 right-0 py-3 flex justify-center gap-x-3 bg-slate-500`}
      >
  {listTasks.map((tasks)=>(<FilterBar tasks={tasks} key={tasks} color={color===tasks && "bg-slate-800"} handlefilter={()=>handlefilter(tasks)}/>)) }
      </div>

      <div className="w-full px-auto grid place-items-center mx-auto scroll-smooth transition-all duration-500 mt-8 px-3   ">
        {filterTask.map((task, idx) => {
          return (
            <TaskCell
              key={idx}
              id={task.id}
              title={task.title}
              note={task.description}
              dueDate={task.dueDate}
              priority={task.priority}
              completed={task.completed}
            />
          );
        })}
      </div>
      <div>
        {
          filterTask.length<=0&&
          <div>
              
            <h1 className="text-2xl font-black capitalize text-center mt-20">no tasks available to show.</h1>
              <button className=" rounded-lg p-2 self-center flex mx-auto mt-3 font-bold bg-slate-200  ">
              <Link to="/task">add task</Link>
         </button>
            </div>
        }
      </div>
    </div>
  );
}



export default TaskPlace