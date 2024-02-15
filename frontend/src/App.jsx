import { useState } from 'react'
import { CreateTodo } from './components/Createtodo'
import { Todos } from './components/Todos'



function App() {
  
  const [todos,setTodos]=useState([]);

  fetch("http://localhost:3000/todos")
  .then(async (res)=>{
   const json=await res.json();
   setTodos(json.todos);
  })
  

  return (
     <div>
      <CreateTodo></CreateTodo>
      <Todos todos={todos}> </Todos>
     </div>
  )
}

export default App
