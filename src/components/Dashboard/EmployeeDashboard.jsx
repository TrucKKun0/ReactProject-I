import React from 'react'
import Header from '../../others/Header'
import TaskNumber from '../../others/TaskNumber'
import TaskList from '../Takslist/TaskList'

const EmployeeDashboard = () => {
  return (
    <div className='p-20 bg-[#1C1C1C] h-screen'>
        <Header/>
        <TaskNumber/>
        <TaskList/>
    </div>
  )
}

export default EmployeeDashboard