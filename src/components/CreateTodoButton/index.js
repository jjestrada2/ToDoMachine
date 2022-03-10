import React from 'react';
import "./CreateTodoButton.css";

function CreateTodoButton(props) {

  const onClickCreateButton=()=>{
    props.setOpenModal(true);
  }


  return (
    
      <button className='CreateTodoButton' onClick={onClickCreateButton}>+</button>
    
  )
}

export default CreateTodoButton;