import React from "react";
import {TaskShare} from "./TaskShare";
import {useState,useEffect} from "react";

const TaskContext = ({children}) => {
  const [task, setTask] = useState([]);
  const [title, setTitle] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [priority, setPriority] = useState("");
  function handleTitle(ev) {
    setTitle(ev.target.value);
  }
  function handleDueDate(ev) {
    setDueDate(ev.target.value);
  }
  function handlePriority(ev) {
    setPriority(ev.target.value);
  }
  const handleAddTasks = (ev) => {
      ev.preventdefault();
      const tasks={
      id: title,
      title,
      createdDate: new Date().toLocaleString().trimEnd().split("", 10).join(""),
      dueDate,
      completed: false,
      priority
    };
    setTask([tasks,...task]);

  console.log([...task,tasks])
  };
  const handleDelete = (id) => {
    return task.filter((tasks) => {
      return tasks.id !== id;
    });
  };

  const handleComplete = (id) => {
    setTask((prev) => {
      prev.map((task) => {
        task.id === id ? {...prev, completed: !task.completed} : prev;
      });
    });
  };
  useEffect(() =>
  {
    window.localStorage.setItem("tasks", task)
  },[task])
  useEffect(() =>
  {
    localStorage.getItem("tasks")
  },[task])
  return (
    <TaskShare.Provider
      value={{
        task,
        title,
        dueDate,
        priority,
        handleTitle,
        handleDueDate,
        handlePriority,
        handleAddTasks,
        handleDelete,
        handleComplete
      }}
    >
      {children}
    </TaskShare.Provider>
  );
};
export default TaskContext;
