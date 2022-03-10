import React from 'react';
import {useLocalStorage} from './useLocalStorage'

const TodoContext= React.createContext();

function TodoProvider(props){
      //Coonsume custom hook
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage('TODOS_V1', []);

  

  //Create state to save va;ue of the input
  const[searchValue,setSearchValue]=React.useState('');

//Create State for Modal

  const[openModal,setOpenModal]=React.useState(false);

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
    return(

        <TodoContext.Provider value={{
            loading,
            error,
            completedTodos,
            totalTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            onCompletTodos,
            onDeleteTodos,
            openModal,
            setOpenModal,

        }}>
            {props.children}
        </TodoContext.Provider>
    );

}

export {TodoContext , TodoProvider} ;