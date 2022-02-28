import React from "react";
import TodoCounter from "./components/TodoCounter";
import TodoSearch from "./components/TodoSearch";
import TodoList from "./components/TodoList";
import CreateTodoButton from "./components/CreateTodoButton";
import TodoItem from "./components/TodoItem";
//import './App.css';


const defaultTodos=[
  {text:"hablar con mama", completed:false},
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
  //function to check Todos
  const onCompletTodos=(text)=>{
    //search the index of the todo 
    const todoIndex=todos.findIndex(todo=>todo.text===text);
    //create a new array of todos that storage a copy of the original array of todos
    const newTodos=[...todos];
    //modifi the new array to a cmoplete todo
    newTodos[todoIndex].completed=true;
    //rerender the new todoArray with the changes 
    setTodos(newTodos);
  }


  //function to delete todos is almost the same function of onCompleteTodos
  const onDeleteTodos=(text)=>{
    const todoindex=todos.findIndex(todo=>todo.text===text);
    const newTodos=[...todos];
    newTodos.splice(todoindex,1)
    setTodos(newTodos);
  }

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
    
  );
}

export default App;
