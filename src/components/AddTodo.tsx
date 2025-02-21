import { ChangeEvent, FormEvent, useState } from "react";
import { Button } from "./ui/button"
import { Input } from "./ui/input"

type addTodoProps={
    onAddTodo:(todoText:string)=>void
}
const AddTodo=({onAddTodo}:addTodoProps)=>{

    const [text,setText]=useState<string>("")

    const handler=(event:ChangeEvent<HTMLInputElement>)=>{
        
         setText(event.target.value)
    }

    const submitHandler=(e:FormEvent)=>{
        e.preventDefault()
        onAddTodo(text)
        setText("")
    }
    return(
 
        <form onSubmit={submitHandler} className="flex items-center gap-3">
            <Input onChange={handler} value={text} type="text" placeholder="write somethings.." className="w-2/5"/>
            <Button type="submit">Add Detail's</Button>
        </form>
  
    );
}
export default AddTodo