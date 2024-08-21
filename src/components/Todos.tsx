"use client"

import { useTodos } from "@/store/todos"
import { useSearchParams } from "next/navigation";

export default function Todos() {


    const {todos,toggleAsCompleted,handleDelete} = useTodos();
    const searchParams = useSearchParams();
    const todosFilter = searchParams.get('todos');
    console.log(todos)

    let filterTodos = todos;

    if(todosFilter==="active"){
        filterTodos=filterTodos.filter((task)=>!task.completed)
    }else if(todosFilter==="completed"){
        filterTodos=filterTodos.filter((task)=>task.completed)
    }
  return (
    <ul>
        {
            filterTodos.map((todo)=>{
                return <li key={todo.id}>
                  
                    <input type="checkbox" id={`todo-${todo.id}`} checked={todo.completed} onChange={()=>toggleAsCompleted(todo.id)} />
                    <label htmlFor={`todo-${todo.id}`}>{todo.task}</label>
                    &nbsp;{
                            todo.completed && (
                                <button type="button" onClick={()=>handleDelete(todo.id)}> Delete </button>
                            )
                    }
                    
                </li>
            })
        }


    </ul>
  )
}

