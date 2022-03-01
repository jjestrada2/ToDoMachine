import React from 'react';
import './TodoList.css';


function TodoList(props) {
  return (
    <section>
      <ul>
        {/*props. children va ser todolist*/}
        {props.children}
      </ul>
    </section>
  )
}

export default TodoList;