import React from 'react';
import './TodoSearch.css';

function TodoSearch() {
//Create state to save va;ue of the input
const[searchValue,setSearchValue]=React.useState('');
  
  
  const onSearchValueChange=(event)=>{
    console.log(event.target.value);
    setSearchValue(event.target.value);
  };

  return [

      <input 
      className="TodoSearch" 
      placeholder="Enter Task" 
      value={searchValue}
      onChange={onSearchValueChange}/>
  ,

  <p>{searchValue}</p>
]
  
}

export default TodoSearch;