import React from 'react'

const CreateTask = () => {
  return (
    <div className="p-5 bg-[#1c1c1c] mt-7 rounded">
        <form className="flex flex-wrap items-start justify-between ">
          <div className="w-1/2">
            <div>
              <h3 className="text-sm text-gary-300 mb-0.5">Create Task</h3>
              <input className="text-sm  py-2 px-2 w-4/5 rounded outline-none bg-transparent" type="text" placeholder="UI DESIGN" />
            </div>
            
            <div>
              <h4 className="text-sm text-gary-300 mb-0.5">Date</h4>
              <input className="text-sm  py-2 px-2 w-4/5 rounded outline-none bg-transparent" type="date" />
            </div>
            <div>
              <h3 className="text-sm text-gary-300 mb-0.5">AssignTo:</h3>
              <input className="text-sm  py-2 px-2 w-4/5 rounded outline-none bg-transparent" type="text" placeholder="employee name" />
            </div>
          <div>
            <h3 className="text-sm text-gary-300 mb-0.5">Categeory</h3>
            <input className="text-sm  py-2 px-2 w-4/5 rounded outline-none bg-transparent" type="text" placeholder="design, dev,etc" />
          </div>
          </div>
          <div className="w-1/2 flex flex-col itmes-start">
              <h4 className="text-sm text-gary-300 mb-0.5">Description</h4>
              <textarea className="w-full h-44 py-2 px-2 rounded outline-none bg-transparent" type="text"
                cols="30"
                rows="10"
                placeholder="Description of the task"
              />
          <button className="bg-emerald-500 py-5 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full">Create Task</button>
            </div>
        </form>
      </div>
  )
}

export default CreateTask