import { useState } from "react";
import "./App.css";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import { TodoType } from "./types/todoType";
function App() {
  const [todo,setTodo]=useState<TodoType[]>([])

  const addHandler=(text:string)=>{
    const id=Math.random().toString()
     setTodo([...todo,{id,text}])
     console.log(todo);
     
  }
  const removeTodo=(id:string)=>{
      const newTodo=todo.filter((t:TodoType)=>{
        return t.id!=id
      })
      setTodo(newTodo)
  }

  return (
    <>
      <div>
        <div className="flex items-center p-3">
          <h2 className="text-xl subpixel-antialiased font-bold slashed-zero">
            Add our Details
          </h2>
        </div>
        <div>
          <AddTodo onAddTodo={addHandler} />
        </div>
        <div className="flex items-center p-3">
          <TodoList items={todo}  deleteTodo={removeTodo}/> {/* ✅ Passing props correctly */}
        </div>
      </div>
    </>
  );
}

export default App;
