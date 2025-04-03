import React from 'react'

const Header = () => {
  return (
    <div className='flex justify-between items-end'>
      <h1 className='text-3xl'>Hello<br /><span className='text-5xl font-semibold'>Bishow 😊</span></h1>
      <button className='bg-red-500 px-5 py-2 rounded-sm text-lg'>Logout</button>
    </div>
  )
}

export default Header