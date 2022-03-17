import React from 'react';
import { TodoContext } from '../TodoContext';
import TodoCounter from "../components/TodoCounter";
import TodoSearch from "../components/TodoSearch";
import TodoList from "../components/TodoList";
import CreateTodoButton from "../components/CreateTodoButton";
import TodoItem from "../components/TodoItem";
import Modal from '../Modal';
import TodoForm from '../components/TodoForm';
import EmptyTodo from '../components/EmptyTodo';
import TodoError from '../components/TodoError';
import TodoLoading from '../components/TodoLoading'

export default function AppUI() {

  const{
    error,
    loading,
    searchedTodos,
    onCompletTodos,
    onDeleteTodos,
    openModal,
    setOpenModal,
}=React.useContext(TodoContext);

  return (
       //ReactFragment lo utilizo para envolver todos los componentes ya que react solo permite pasar un componenete componente
       <React.Fragment>
       <TodoCounter/>
       <TodoSearch/>

       
            <TodoList >
            {error&&<TodoError error={error}/>}
            {loading && new Array(3).fill(1).map((a, i) => <TodoLoading key={i} />)}
            {(!loading && !searchedTodos.length )&&<EmptyTodo/>}
  
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
       { openModal && 
       (<Modal>
         <TodoForm/>
       </Modal>)}
       
       <CreateTodoButton
       setOpenModal={setOpenModal}/>
          
     </React.Fragment>
     
  )
}
export { AppUI };