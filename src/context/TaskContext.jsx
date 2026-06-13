import React from "react";
import {TaskShare} from "./TaskShare";
import {useState,useEffect} from "react";

const TaskContext=({children}) =>
{
  const [task,setTask]=useState(() =>
  {
    const saved=window.localStorage.getItem("task");
    return saved ? JSON.parse(saved):[];
  });
  const [title,setTitle]=useState("");
  const [dueDate,setDueDate]=useState("");
  const [description, setDescription] = useState("");
  const [priority,setPriority]=useState("high");
  function handleTitle(ev)
  {
    setTitle(ev.target.value);
  }
    function handleDescription(ev) {
      setDescription(ev.target.value);
    }
  function handleDueDate(ev)
  {
    setDueDate(ev.target.value);
  }
  function handlePriority(ev)
  {
    setPriority(ev.target.value);
  }
  useEffect(() =>
  {
    if(dueDate===new Date().toLocaleDateString()) {
      Notification.requestPermission().then((permission) =>
      {
        if(Notification.permission==='granted') {
          new Notification(`your task is due today`, {
            body: " 🚀congratulation on your successful task completed! 🎉👏🏻",
            icon: "src/assets/react.svg",
            vibrate:[200,100,200]
          });
          Notification.onclick=() =>
          {
            window.location.pathname="/taskplace"
          }
           console.log(permission,new Notification);
        }
        else {
          alert("permission not granted")
}
       
      })}
  },[dueDate])
  function handleAddTasks(ev)
  {
    const tasks={
         id:new Date().getSeconds()
,         title,
         description,
         createdDate: new Date().toLocaleDateString(),
         dueDate,
         completed: false,
         priority
       };
  ev.preventDefault();
   setTask([tasks,...task]);
    setTitle("");
    setDescription("");
    setPriority("high");
    setDueDate("");
  };
  function handleDelete(id)
  {
 const filtered=task.filter((tasks) => ( tasks.id !== id  ));
   const firm= window.confirm(`Are you sure to delete this task ?
    
    deleted task cannot be undone.  `)
    firm && setTask(filtered) ;
  }

  function handleComplete(id)
  {
    
    const complete=task.map((tasks) =>
{
return tasks.id === id ? {...tasks, completed: !tasks.completed} : tasks;
})
 
    setTask(complete)
  }
    useEffect(() =>
    {
      window.localStorage.setItem("task",JSON.stringify(task));
    },[task]);
  console.log(task.find((tasks) =>{return (
    tasks.dueDate === new Date().toLocaleDateString().toString().split('-').reverse().join("-")
  )}))
  return (
    <>
      <TaskShare.Provider
        value={{
          task,
          title,
          dueDate,
          priority,
          description,
          handleTitle,
          handleDueDate,
          handlePriority,
          handleDescription,
          handleAddTasks,
          handleDelete,
          handleComplete
        }}
      >
        {children}
      </TaskShare.Provider>
    </>
  );
  }

export default TaskContext;
