import { useContext,useState } from "react";
import { TodoContext } from "../context/TodoContext";


const TodoItem = (todo)=>{
    const {deleteTodo,updateTodo} = useContext(TodoContext)
    const [isEditing,setIsEditing] = useState(false)
    const [text , setText] = useState(todo.text)


    const handleUpdate = ()=>{
        updateTodo(todo.id,text)
        isEditing(false)
    }

    const handledelete = ()=>{
        const confirmation=window.confirm("Are you sure you want to delete")

        if(confirmation){
            deleteTodo(todo.id)
        }
    }

    return(
        <div>
            {isEditing?(
                <input type="text" value={text} onChange={()=>isEditing()} />
            ):(
                <span>{todo.text}</span>
            )}

            <div>
                {isEditing?(
                    <button onClick={handleUpdate}>save</button>
                ):(
                    <button onClick={()=>isEditing(true)}>Edit</button>
                )}
            </div>
            <button onClick={handledelete}>delete</button>
        </div>
    )
}