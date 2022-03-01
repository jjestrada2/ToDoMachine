import React from 'react'
import TodoCounter from "../components/TodoCounter";
import TodoSearch from "../components/TodoSearch";
import TodoList from "../components/TodoList";
import CreateTodoButton from "../components/CreateTodoButton";
import TodoItem from "../components/TodoItem";

export default function AppUI(
    {
    completedTodos,
    totalTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    onCompletTodos,
    onDeleteTodos,
    }
    ) {
  return (
       //ReactFragment lo utilizo para envolver todos los componentes ya que react solo permite pasar un componenete componente
       <React.Fragment>
       <TodoCounter
       completedTodos={completedTodos}
       totalTodos={totalTodos}
       
       />
        
       <TodoSearch 
       searchValue={searchValue}
       setSearchValue={setSearchValue}
       />
         
       <TodoList >
         {searchedTodos.map(todo =>(
           <TodoItem 
           key={todo.text}
           text={todo.text}
           completed={todo.completed}
           onComplete={()=>onCompletTodos(todo.text)}
           onDelete={()=>onDeleteTodos(todo.text)}
           />
         ))}
       
       </TodoList> 
       <CreateTodoButton/>
          
     </React.Fragment>
     
  )
}
export { AppUI };