import React,{useContext ,useState} from 'react'
import { TaskShare } from "../context/TaskShare";

import TaskCell from "../conponents/TaskCell";

const TaskPlace=() =>
{
    const { task }=useContext(TaskShare)
  const listTasks=["all","active","completed"];
  const [filterTask,setFilterTask]=useState(task)
    
  var bgColor;
   
  function handlefilter(param)
  {
  bgColor = "purple";
    if(param === 'all') {
      setFilterTask(task);
      bgColor="purple"
  }
    //const filt = task.filter((tasks) => (tasks.completed));
  if(param === "active") {
   
    setFilterTask((prev)=>prev.filter(tasks=>(!tasks.completed)))
    bgColor = "rgba(255,100,128,0.4)";

    } 
  if(param==="completed") {
    setFilterTask((tasks) => tasks.filter(task =>( task.completed)));
    bgColor ="violet";
  }

    
    }
   
  return (
    <div className="w-full pt-18 scroll-smooth ">
      <div
        className={`w-full  sticky top-13 z-50  right-0 py-3 flex justify-center gap-x-3 bg-slate-500`}
      >
        {listTasks.map((tasks) => {
          return (
            <div
              onClick={() => handlefilter(tasks)}
              key={tasks}
              style={{
                backgroundColor: bgColor,
              }}
              className={` bg-gray-500  text-white rounded-full p-2 font-bold capitalize max-w-35 w-25  text-center my-1 hover:bg-fuchsia-500 cursor-pointer`}
            >
              {tasks}
            </div>
          );
        })}
      </div>

      <div className="w-full mt-4 px-3 flex justify-center items-center flex-col  ">
        {filterTask.map((task,idx) => {
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
    </div>
  );
}



export default TaskPlace