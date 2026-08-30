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
      className="gap-y-3 bg-[rgba(255,255,255,0.39)] rounded-lg md:h-15 md:mt-3 flex flex-col md:flex-row  items-center md:justify-center md:gap-x-4 md:w-vw w-full "
    >
      <input
        type="text"
        value={title}
        onChange={handleTitle}
        required
        placeholder="enter task title ..."
        className="w-full h-10 bold outline-1 border-0 focus-within:border-none rounded md:h-full  capitalize  indent-2"
      />
      <textarea
        value={description}
        className="border outline-0 py-2 w-full rounded-lg h-12 md:h-full shadow-lg"
        onChange={handleDescription}
        name=""
        id=""
        placeholder="enter title description..."
      ></textarea>
     
  
        <input
          title="task end duration"
          value={dueDate}
          onChange={handleDueDate}
          type="date"
          name=""
          id=""
          required
          placeholder="end date"
          className="w-full cursor-pointer bold outline-1 rounded h-10 md:h-full capitalize  indent-2 "
        />
 
      <select
        name=""
        id=""
        value={priority}
        onChange={handlePriority}
        className="w-full h-10 bold outline-1 rounded md:h-full bg-gray-300 capitalize cursor-pointer"
      >
        <option
          value=""
          className="disabled:text-white text-white"
          disabled
          aria-disabled
        >
          select a priority
        </option>
        <option value="high">high</option>
        <option value="medium">medium</option>
        <option value="low">low</option>
      </select>
      <button
        type="submit"
        role="button"
        className="cursor-pointer h-10 bg-gray-400 my-2 md:my-0 md:h-full px-3  rounded-lg font-bold capitalize min-w-30 hover:bg-slate-400"
      >
        add task
      </button>
    </form>
  );
}

export default Forms