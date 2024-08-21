"use client"
import React, { useState } from 'react'

export default function AddToDo() {

  const [todo,setTodo] = useState("")
 const handleFormSubmit = (e)=>{
  e.preventDefault()
 }
  return (
    <form onSubmit={handleFormSubmit}>
      <input type="text" placeholder='Write your Todo' name='' value={todo} onChange={(event)=>setTodo(event.target.value)} />
      <button type='submit'>ADD</button>
    </form>
  )
} 

