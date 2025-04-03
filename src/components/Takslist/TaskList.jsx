import React from 'react'

const TaskList = () => {
  return (
    <div id='tasklist' className='h-[55%] overflow-x-auto w-full p-4  rounded-xl mt-10 flex justify-start items-start gap-5 flex-nowarp'>
        <div className='h-full flex-shrink-0 w-[300px] bg-[#2D2D2D] rounded-xl p-5'>
            <div className='bg-red-500 flex justify-between px-3 py-1 rounded-xl'>
                <h3>High</h3>
                <h4 className='text-sm'>20 feb 2024</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semi-bold'>Make a youtube video</h2>
            <p className='text-sm mt-3'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur tempora unde eum, earum nesciunt omnis?
            </p>
        </div>
        <div className='h-full flex-shrink-0 w-[300px] bg-yellow-400 rounded-xl p-5'>
            <div className='bg-red-500 flex justify-between px-3 py-1 rounded-xl'>
                <h3>High</h3>
                <h4 className='text-sm'>20 feb 2024</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semi-bold'>Make a youtube video</h2>
            <p className='text-sm mt-3'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur tempora unde eum, earum nesciunt omnis?
            </p>
        </div>
        <div className='h-full flex-shrink-0 w-[300px] bg-blue-400 rounded-xl p-5'>
            <div className='bg-red-500 flex justify-between px-3 py-1 rounded-xl'>
                <h3>High</h3>
                <h4 className='text-sm'>20 feb 2024</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semi-bold'>Make a youtube video</h2>
            <p className='text-sm mt-3'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur tempora unde eum, earum nesciunt omnis?
            </p>
        </div>
        <div className='h-full flex-shrink-0 w-[300px] bg-red-400 rounded-xl p-5'>
            <div className='bg-red-500 flex justify-between px-3 py-1 rounded-xl'>
                <h3>High</h3>
                <h4 className='text-sm'>20 feb 2024</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semi-bold'>Make a youtube video</h2>
            <p className='text-sm mt-3'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur tempora unde eum, earum nesciunt omnis?
            </p>
        </div>
        <div className='h-full flex-shrink-0 w-[300px] bg-zinc-400 rounded-xl p-5'>
            <div className='bg-red-500 flex justify-between px-3 py-1 rounded-xl'>
                <h3>High</h3>
                <h4 className='text-sm'>20 feb 2024</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semi-bold'>Make a youtube video</h2>
            <p className='text-sm mt-3'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur tempora unde eum, earum nesciunt omnis?
            </p>
        </div>
        
    </div>
  )
}

export default TaskList