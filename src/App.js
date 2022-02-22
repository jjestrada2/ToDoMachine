import React from "react";
import TodoCounter from "./components/TodoCounter";
import TodoSearch from "./components/TodoSearch";
import TodoList from "./components/TodoList";
import CreateTodoButton from "./components/CreateTodoButton";
import TodoItem from "./components/TodoItem";
//import './App.css';


const todos=[
  {text:"hablar con mama", completed:true},
  {text:"Curso Platzi", completed:false},
  {text:"Ir al Gym", completed:false},
]

function App() {
  return (
    //ReactFragment lo utilizo para envolver todos los componentes ya que react solo permite pasar un componenete componente
    <React.Fragment>
      <TodoCounter/>
       
      <TodoSearch/>
        
      <TodoList >
        {todos.map(todo =>(
          <TodoItem 
          key={todo.text}
          text={todo.text}
          completed={todo.completed}
          />
        ))}
      
      </TodoList> 
      <CreateTodoButton/>
         
    </React.Fragment>
    
  );
}

export default App;
