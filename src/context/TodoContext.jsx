import { Children, createContext,useEffect,useState } from "react";

export const TodoContext = createContext();

export const TodoProvider = ({Children})=>{
    const [todos,setTodos] = useState(()=>{
        const save = localStorage.getItem("todos")
        return save ? JSON.parse(save) : []
    }) 


    useEffect(()=>{
        localStorage.setItem("todos",JSON.stringify(todos))
    })


    const addTodo = (text)=>{
        setTodos([...todos,{id:Date.now(),text}])
    }


    const deleteTodo = (id)=>{
        setTodos(todos.filter(todo=>todo.id!==id))
    }

    const updateTodo = (id,newText)=>{
        setTodos(todos.map(todo=>todo.id==id?{...todo,text:newText}:text))

    }

    return(
        <TodoContext.Provider value={{todos,addTodo,deleteTodo,updateTodo}}>
            {Children}
        </TodoContext.Provider>
    )


}
