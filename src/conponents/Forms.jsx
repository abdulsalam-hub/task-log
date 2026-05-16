import React from 'react'
import {TaskShare} from "../context/TaskShare";
import  { useContext} from 'react'
const Forms=() =>
{
  const {
    title,description,
    dueDate,
    priority,
    handleTitle,handleDescription,
    handleDueDate,
    handlePriority,
    handleAddTasks
  } = useContext(TaskShare);

  return (
    <form
      onSubmit={handleAddTasks}
      action=""
  
      className="gap-y-3 bg-slate-100 rounded-lg md:h-10 md:mt-3 flex flex-col md:flex-row items-center md:justify-center md:gap-x-4 md:w-vw w-full "
    >
      <input
        type="text"
        value={title}
        onChange={handleTitle}
        placeholder="enter task title ..."
        className="w-full h-10 bold outline-1 rounded md:h-full  capitalize  indent-2"
      />
      <textarea value={description} className="border p-2 w-full overflow-y-auto rounded-lg h-15 shadow-lg shadow-blue-300/50" onChange={handleDescription} name="" id="" placeholder=" enter title description"></textarea>
      <input
        value={dueDate}
        onChange={handleDueDate}
        type="date"
        name=""
        id=""
        className="w-full bold outline-1 rounded md:h-full h-10  capitalize  indent-2"
      />
      <select
        name=""
        id=""
        value={priority}
        onChange={handlePriority}
        className="w-full h-10 bold outline-1 rounded md:h-full  capitalize cursor-pointer"
      >
        <option  disabled aria-readonly={true} role="option">
          choose priorities
        </option>
        <option value="high">high</option>
        <option value="medium">medium</option>
        <option value="low">low</option>
      </select>
      <button
        type="submit"
        role="button"
        className="cursor-pointer h-10 bg-gray-400 my-2 md:my-0 md:h-full px-3  rounded-lg font-bold capitalize w-30"
      >
        task
      </button>
    </form>
  );
}

export default Forms