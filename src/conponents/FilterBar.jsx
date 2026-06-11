import React from 'react'

const FilterBar = ({tasks,handlefilter,color}) => {
  return (
    <>
  
          <div
            onClick={handlefilter}
      
            style={{
              backgroundColor: color
            }}
            className={` bg-gray-500  text-white rounded-full p-2 font-bold capitalize max-w-35 w-25  text-center my-1 hover:bg-fuchsia-500 cursor-pointer`}
          >
            {tasks}
          </div>
    
    </>
  );
}

export default FilterBar