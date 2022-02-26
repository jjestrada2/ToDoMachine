import React from "react";
import TodoCounter from "./components/TodoCounter";
import TodoSearch from "./components/TodoSearch";
import TodoList from "./components/TodoList";
import CreateTodoButton from "./components/CreateTodoButton";
import TodoItem from "./components/TodoItem";
//import './App.css';


const defaultTodos=[
  {text:"hablar con mama", completed:true},
  {text:"Curso Platzi", completed:true},
  {text:"Ir al Gym", completed:false},
]

function App() {

  //Create state to save va;ue of the input
  const[searchValue,setSearchValue]=React.useState('');

  //ceate state for Tdods
  const [todos,setTodos]=React.useState(defaultTodos);

  //constant of completed todos
  const completedTodos= todos.filter(todo=>todo.completed).length;
  //constant of total todos
  const totalTodos= todos.length;
  //variable that save the array of searched todos
  let searchedTodos=[];
  //conditional to filter searchTodos
 
  searchedTodos = todos.filter(todo => {
    const todoText = todo.text.toLowerCase();
    const searchText = searchValue.toLowerCase();
    return todoText.includes(searchText);
  });
  


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
          />
        ))}
      
      </TodoList> 
      <CreateTodoButton/>
         
    </React.Fragment>
    
  );
}

export default App;
