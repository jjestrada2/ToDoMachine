import React from "react";
import AppUI from "./AppUI";
import {TodoProvider} from '../TodoContext';
//import './App.css';

/*
const =[
  {text:"hablar con mama", completed:false},
  {text:"Curso Platzi", completed:true},
  {text:"Ir al Gym", completed:false},
]*/




function App() {

  return (
    <TodoProvider>
    <AppUI/>
    </TodoProvider>
  )
}

export default App;
