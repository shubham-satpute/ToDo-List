import React from 'react'
import AddToDo from '../components/AddToDo'
import Todos from '@/components/Todos';
import Navbar from '@/components/Navbar';

const page = () => {
  return (
    <main> 
        <h2>TODO NEXT + TypeScript</h2>
        <Navbar/>
        <AddToDo/>
        <Todos/>
    </main>
  )
}

export default page ;