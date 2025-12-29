import { useContext,useState } from "react";
import { TodoContext } from "../context/TodoContext";
import TodoItem from "./TodoItem";



const TodoList = ()=>{
    const {todos} = useContext(TodoContext)

    return(
        <div>
            {todos.length == 0 && (
                <p>no todo list</p>
            )}

            {
                todos.map(todo=>
                    <TodoItem key={todo.id}  todo={todo}></TodoItem>
                )
            }
        </div>
    )
}

export default TodoList