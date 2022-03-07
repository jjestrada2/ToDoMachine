import React from "react";
import AppUI from "./AppUI";
//import './App.css';

/*
const =[
  {text:"hablar con mama", completed:false},
  {text:"Curso Platzi", completed:true},
  {text:"Ir al Gym", completed:false},
]*/

//custom Hook
function useLocalStorage(itemName,initialValue){
  const [error,setError]=React.useState(false);
  const [loading,setLoading]=React.useState(true);
  const [item,setItem]=React.useState(initialValue);

  React.useEffect(()=>{
    setTimeout(()=>{
      try{
        //localStorageTodos is a text "STRING"
        const localStorageItem=localStorage.getItem(itemName);
        //ParseItem is the array to send for default 
        let parsedItem;
        //If the user is new 
        if(!localStorageItem){
        //establish a empty array for Item_V1 
          localStorage.setItem(itemName,JSON.stringify(initialValue));
        //so parseItem that is our deafult Todo List is empty
          parsedItem=initialValue;
        }else{
          parsedItem=JSON.parse(localStorageItem);
        }
        setItem(parsedItem);
        setLoading(false);
      }catch(error){
        setError(error);
      }
    },1000);
  });


const saveItem =(newItem)=>{

try{
  //Transform array in text
  const stringfiedItem=JSON.stringify(newItem);
  //save in local storage
  localStorage.setItem(itemName,stringfiedItem);
  //update the estate of the todoArray
  setItem(newItem);
}catch(error){
  setError(error);
}
};


return {
  item,
  saveItem,
  loading,
  error,
};
}



function App() {
  
  //Coonsume custom hook
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage('TODOS_V1', []);

  

  //Create state to save va;ue of the input
  const[searchValue,setSearchValue]=React.useState('');

  //ceate state for Tdods
 

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
    loading={loading}
    error={error}
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
