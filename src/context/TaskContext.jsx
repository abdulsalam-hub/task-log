import React from "react";
import {TaskShare} from "./TaskShare";
import {useState,useEffect} from "react";

const TaskContext=({children}) =>
{
  const [task,setTask]=useState(() =>
  {
    const saved=window.localStorage.getItem("task");
    return saved? JSON.parse(saved):[];
  });
  const [title,setTitle]=useState("");
  const [dueDate,setDueDate]=useState("");
  const [description, setDescription] = useState("");
  const [priority,setPriority]=useState("");
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
      id: new Date().getSeconds(),
      title,
      description,
      createdDate: new Date().toLocaleString().trimEnd().split("",10).join(""),
      dueDate,
      completed: false,
      priority
    };
    setTask([tasks,...task]);
    ev.preventDefault();
    setTitle(""); setPriority(""); setDueDate("");
  };
  function handleDelete(id)
  {

    const filtered=task.filter((tasks) => {
    return tasks.id !== id  
    });
   
    setTask(filtered);
    
      
  }

  function handleComplete(id)
  {
    const complete=task.map((tasks) =>
{
 tasks.id === id ? {...tasks, complete: true  } : tasks
})
      
    setTask(complete)
  }
    useEffect(() =>
    {
      window.localStorage.setItem("task",JSON.stringify(task));
    },[task]);

    return (
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
    );
  }

export default TaskContext;
