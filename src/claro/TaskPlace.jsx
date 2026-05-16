import React,{useContext ,useState} from 'react'
import { TaskShare } from "../context/TaskShare";

import TaskCell from "../conponents/TaskCell";

const TaskPlace=() =>
{
    const { task }=useContext(TaskShare)
  const listTasks=["all","completed","undone"];
  const [filterTask,setFilterTask]=useState(task)
    
  let bgColor;
   
function handlefilter(param) {
    if(param === 'all') {
      setFilterTask(task);
      bgColor=" purple"
  }
    const filt = task.filter((tasks) => (!tasks.completed));
  if(param === "completed") {
    
    setFilterTask(filt)
    bgColor = "rgba(255,100,128,0.4)";

    } 
  if(param==="undone") {
    setFilterTask((tasks) => tasks.filter((task) => task.completed));
    bgColor ="bg-fuchsia-500 text-white";
  }

    
    }
   
  return (
    <>
      <div
        className={`w-full mt-18 sticky top-13  right-0 py-3 flex justify-center gap-x-3 bg-slate-500`}
      >
        {listTasks.map((tasks) => {
          return (
            <div
              onClick={() => handlefilter(tasks)}
              key={tasks}
              style={{
  backgroundColor:bgColor
}}
              className={` ${bgColor} bg-gray-500  focus:${bgColor} text-white rounded-full p-2 font-bold capitalize max-w-35 w-25  text-center my-1 hover:bg-fuchsia-500 cursor-pointer`}
            >
              {tasks}
            </div>
          );
        })}
      
      </div>

      <div className="w-full mt-4 px-2 ">
        {filterTask.map((task) =>
        {
          return (
          <TaskCell task={task} key={task}/>
          );
      })}
      </div>
    </>
  );
}



export default TaskPlace