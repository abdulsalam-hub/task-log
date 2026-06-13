import React from 'react'

const FilterBar = ({tasks,handlefilter,color}) => {
  return (
    <>
  
          <div
            onClick={handlefilter}
      
            style={{
              backgroundColor: color
            }}
            className={` bg-gray-500 border ${color} border-slate-200 backdrop:blur-md text-white rounded-full p-2 font-bold capitalize max-w-35 w-25  text-center  hover:bg-stone-400 cursor-pointer`}
          >
            {tasks}
          </div>
    
    </>
  );
}

export default FilterBar