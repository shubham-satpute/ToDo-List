"use client"
import React, { FormEvent, useState } from 'react'
import { useTodos } from '../store/todos'

export default function AddToDo() {

  const [todo,setTodo] = useState("")

  const {handleAddTodo} = useTodos()

  const handleFormSubmit = (e:FormEvent<HTMLFormElement>)=>{
  e.preventDefault();
  handleAddTodo(todo);
  setTodo("")
 }

  return (
    <form onSubmit={handleFormSubmit}>
      <input type="text" placeholder='Write your Todo' name='' value={todo} onChange={(event)=>setTodo(event.target.value)} />
      &nbsp;
      <button type='submit'>ADD</button>
    </form>
  )
} 

