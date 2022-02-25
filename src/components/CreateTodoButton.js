import React from 'react';
import "./CreateTodoButton.css";

function CreateTodoButton() {

  const onClickCreateButton=()=>{
    alert("Click");
  }


  return (
    
      <button className='CreateTodoButton' onClick={onClickCreateButton}>+</button>
    
  )
}

export default CreateTodoButton;