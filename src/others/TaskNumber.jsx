import React from 'react'

const TaskNumber = () => {
  return (
    <div className='flex mt-10 justify-between gap-5 w-screen'>
        <div className=' px-10 py-5 w-[45%] bg-[#2D2D2D] rounded-xl '>
            <h1 className='text-2xl font-semibold'>0</h1>
            <h1 className='text-5xl font-semibold text-medium'>new Task</h1>
        </div>
        <div className=' px-10 py-5 w-[45%] bg-blue-400 rounded-xl '>
            <h1 className='text-2xl font-semibold'>0</h1>
            <h1 className='text-5xl font-semibold text-medium'>new Task</h1>
        </div>
        <div className=' px-10 py-5 w-[45%] bg-red-400 rounded-xl '>
            <h1 className='text-2xl font-semibold'>0</h1>
            <h1 className='text-5xl font-semibold text-medium'>new Task</h1>
        </div>
        <div className=' px-10 py-5 w-[45%] bg-yellow-400 rounded-xl '>
            <h1 className='text-2xl font-semibold'>0</h1>
            <h1 className='text-5xl font-semibold text-medium'>new Task</h1>
        </div>
    </div>
  )
}

export default TaskNumber