import React, { useState } from 'react'
import { FaRegCircle } from "react-icons/fa";
import { IoTrashOutline } from "react-icons/io5";
import { FaRegCircleCheck } from "react-icons/fa6";
const TodoItem = ({todo , toggle, deleteTodo}) => {
  return (
    <div className="w-full flex items-center p-2 pb-6 gap-2 
    rounded-lg cursor-pointer " onClick={() => toggle(todo.id)}>

      {todo.isComplete ? (
  <FaRegCircleCheck className='text-[#00ADB5] size-5'/>
) : ( 
  <FaRegCircle className='text-[#00ADB5] size-5' /> 
)}


      
      <p className={`flex-1 ${todo.isComplete ? "line-through" :""}`}>{todo.text}</p>
      
      <IoTrashOutline onClick={()=>deleteTodo(todo.id)} className='text-[#E43636] size-5 hover:scale-110 transition-all ' />
      </div>
  )
}

export default TodoItem