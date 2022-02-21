import React from 'react';
import './TodoItem.css';

function TodoItem(props) {
  return (
  <section>
    
    <p>{props.text}</p>
  </section>
  )
}

export default TodoItem;