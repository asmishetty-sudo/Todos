import React from 'react'

const Todo = (props) => {
  
  
  return (
    <div>
      <div className="todo flex justify-between items-center m-1.5">
            <div className='flex gap-2 text-amber-900'>
              <input type="checkbox" onChange={props.onCheck} checked={props.complete} />
              <p className={`break-all ${props.complete ? "line-through opacity-60" : ""}`} >{props.todo}</p>
            </div>
            <div className="btns flex gap-1">
              <button onClick={props.onEdit} className='bg-amber-900 text-sm hover:bg-amber-950 text-amber-200 cursor-pointer p-1 px-1.5 rounded-md'>Edit</button>
              <button onClick={props.onDelete} className='bg-amber-900 text-sm hover:bg-amber-950 text-amber-200 cursor-pointer p-1 px-1.5 rounded-md'>Delete</button>
            </div>
          </div>
    </div>
  )
}

export default Todo
