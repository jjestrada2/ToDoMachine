import React from "react";
import AppUI from "./AppUI";
//import './App.css';

/*
const =[
  {text:"hablar con mama", completed:false},
  {text:"Curso Platzi", completed:true},
  {text:"Ir al Gym", completed:false},
]*/

//localStorageTodos is a text "STRING"
const localStorageTodos=localStorage.getItem('TODOS_V1');
//ParseTodos is the array to send for default 
let parsedTodos;
//If the user is new 
if(!localStorageTodos){
//establish a empty array for TODOS_V1 
  localStorage.setItem('TODOS_V1','[]');
//so parseTodos that is our deafult Todo List is empty
  parsedTodos=[];
}else{
  parsedTodos=JSON.parse(localStorageTodos);
}


function App() {

  //Create state to save va;ue of the input
  const[searchValue,setSearchValue]=React.useState('');

  //ceate state for Tdods
  const [todos,setTodos]=React.useState(parsedTodos);

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

  const saveTodos =(newTodos)=>{
    //Transform array in text
    const stringfiedTodos=JSON.stringify(newTodos);
    //save in local storage
    localStorage.setItem('TODOS_V1',stringfiedTodos);
    //update the estate of the todoArray
    setTodos(newTodos)

  }

  //function to check Todos
  const onCompletTodos=(text)=>{
    //search the index of the todo 
    const todoIndex=todos.findIndex(todo=>todo.text===text);
    //create a new array of todos that storage a copy of the original array of todos
    const newTodos=[...todos];
    //modifi the new array to a cmoplete todo
    newTodos[todoIndex].completed=true;
    //rerender the new todoArray with the changes 
    saveTodos(newTodos);
  }


  //function to delete todos is almost the same function of onCompleteTodos
  const onDeleteTodos=(text)=>{
    const todoindex=todos.findIndex(todo=>todo.text===text);
    const newTodos=[...todos];
    newTodos.splice(todoindex,1)
    saveTodos(newTodos);
  }

  return (
    <AppUI
    completedTodos={completedTodos}
    totalTodos={totalTodos}
    searchValue={searchValue}
    setSearchValue={setSearchValue}
    searchedTodos={searchedTodos}
    onCompletTodos={onCompletTodos}
    onDeleteTodos={onDeleteTodos}
    
    />
  )
}

export default App;
