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

  function handleAddTasks(ev)
  {
    const tasks={
         id:new Date().getSeconds()
,         title,
         description,
         createdDate: new Date().toISOString().slice(0,10),
         dueDate,
         completed: false,
         priority
       };
    ev.preventDefault();
    if(tasks.title=="") return;
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
   useEffect(() =>
  {
    const found=task.find((item) =>
    {
    return item.dueDate === item.createdDate;
    })
     
    if (found) {
      Notification.requestPermission().then((permission) => {
        if (Notification.permission === "granted") {
          new Notification(`Something was done to your tasks!`, {
            body: " 🚀congratulation on your successful task added/completed! 🎉👏🏻",
            icon: "src/assets/react.svg",
            vibrate: [200, 100, 200]
          });
          Notification.onclick = () => {
            window.location.href = "http://tasklog-place.vercel.app/taskplace";
          };
          console.log(permission);
        } else {
          alert("permission to send 'notification' not granted");
        }
      });
      console.log(found , "they are equal")
    }
   },[task])

  const com=task.filter((item) =>
  {
    return item.completed
  })
  const completed=com.length
  const inp = task.filter((item) => {
    return !item.completed;
  });
  const inprogress=inp.length
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
          handleComplete,
          completed,inprogress
        }}
      >
        {children}
      </TaskShare.Provider>
    </>
  );
  }

export default TaskContext;
