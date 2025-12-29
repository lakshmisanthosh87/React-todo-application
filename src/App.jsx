import Header from "./components/Header"
import Footer from "./components/Footer"
import TodoForm from "./components/TodoForm"
import TodoList from "./components/TodoList"
import { TodoProvider } from "./context/TodoContext"





function App() { 
  return (
    <TodoProvider>
      <div>
        <Header/>
        <Footer/>
        <TodoForm/>
        <TodoList/>
      </div>
    </TodoProvider>
  )
}

 

   
export default App
