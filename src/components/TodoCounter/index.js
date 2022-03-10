import React from 'react';
import { TodoContext } from '../../TodoContext';
import './TodoCounter.css';

function TodoCounter() {
  const {completedTodos,totalTodos}=React.useContext(TodoContext);
  return (
     <h2 className='TodoCounter'>You done {completedTodos} of {totalTodos}</h2>
  );
}

export default TodoCounter;