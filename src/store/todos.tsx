"use client"
import { createContext, ReactNode, useContext, useState } from "react";

export type Todo ={
    id:string;
    task:string;
    completed:boolean;
    createdAt:Date;
}
export type TodosContext = {
    todos:Todo[];
    handleAddTodo:(task:string)=>void;
    toggleAsCompleted:(id:string)=>void;
    handleDelete:(id:string)=>void;
}
export const todosContext = createContext<TodosContext | null>(null);

export const TodosProvider = ({children}:{children:ReactNode}) => {

    const [todos,setTodos] = useState<Todo[]>(()=>{
        const newTodos = localStorage.getItem("todos") || "[]" 
        return JSON.parse(newTodos) as Todo[];
    });

    const handleAddTodo = (task:string) => {
        
        setTodos( (prev) => {
            const newTodos:Todo[] = [
                {
                id: Math.random().toString(),
                task,
                completed: false,
                createdAt: new Date()
            },
            ...prev
       ] 
       localStorage.setItem("todos",JSON.stringify(newTodos))
       return newTodos;
        })
    }

//if the task is completed 

    const toggleAsCompleted=(id:string)=>{
        setTodos((prev)=>{
                const newTodos = prev.map((task)=>{
                    if(task.id===id){
                        return{...task,completed:!task.completed}
                    }
                    return task;
                }); localStorage.setItem("todos",JSON.stringify(newTodos))
        return newTodos;
    })
    }

//if task deleted

const handleDelete=(id:string)=>{
    setTodos((prev)=>{
        const newTodos = prev.filter((task)=>task.id!=id)
        localStorage.setItem("todos",JSON.stringify(newTodos))
        return newTodos
    })
}


    return (
        <todosContext.Provider value={{todos,handleAddTodo,toggleAsCompleted,handleDelete}}>
            {children}
        </todosContext.Provider>
    )
}



export function useTodos(): TodosContext {
    const todosContextValue = useContext(todosContext)
    if(!todosContextValue){
        throw new Error('UseTodos used outside of provider')
    }  return todosContextValue;
}