import React from 'react';
import './TodoCounter.css';

function TodoCounter({completedTodos,totalTodos}) {
  return (
     <h2 className='TodoCounter'>You done {completedTodos} of {totalTodos}</h2>
  )
}

export default TodoCounter;