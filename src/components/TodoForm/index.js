import React from 'react'
import { TodoContext } from '../../TodoContext';
import './TodoForm.css';

export default function TodoForm() {

    //state for textare
    const[newTodoValue,setNewTodoValue]=React.useState('');
    const {
        addTodo,
        setOpenModal,
    }=React.useContext(TodoContext);


const onChange=(event)=>{
setNewTodoValue(event.target.value);
}

const onCancel=()=>{
    setOpenModal(false);
}

const onSubmit=(event)=>{
    //evitar que se recargue la pagina
    event.preventDefault();
    addTodo(newTodoValue);
    setOpenModal(false);

}


  return (
   <form onSubmit={onSubmit}>
       <label>👉🏻 Do all with 💜 👈🏻</label>
       <textarea
       value={newTodoValue}
       onChange={onChange}
       placeholder='Write your next To Do'/>
       <div className='buttonContainer'>
       <button 
           className='todoButtonAdd'
           onClick={onSubmit}>
               Add
           </button>
           
           <button className='todoButtonCancel'
           type='button'
           onClick={onCancel}>
               Cancel
           </button>
       </div>
   </form>
  )
}
