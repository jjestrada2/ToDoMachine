import React from "react";
//custom Hook
function useLocalStorage(itemName,initialValue){
    const [error,setError]=React.useState(false);
    const [loading,setLoading]=React.useState(true);
    const [item,setItem]=React.useState(initialValue);
  
    React.useEffect(()=>{
      setTimeout(()=>{
        try{
          //localStorageTodos is a text "STRING"
          const localStorageItem=localStorage.getItem(itemName);
          //ParseItem is the array to send for default 
          let parsedItem;
          //If the user is new 
          if(!localStorageItem){
          //establish a empty array for Item_V1 
            localStorage.setItem(itemName,JSON.stringify(initialValue));
          //so parseItem that is our deafult Todo List is empty
            parsedItem=initialValue;
          }else{
            parsedItem=JSON.parse(localStorageItem);
          }
          setItem(parsedItem);
          setLoading(false);
        }catch(error){
          setError(error);
        }
      },4000);
    });
  
  
  const saveItem =(newItem)=>{
  
  try{
    //Transform array in text
    const stringfiedItem=JSON.stringify(newItem);
    //save in local storage
    localStorage.setItem(itemName,stringfiedItem);
    //update the estate of the todoArray
    setItem(newItem);
  }catch(error){
    setError(error);
  }
  };
  
  
  return {
    item,
    saveItem,
    loading,
    error,
  };
  }
  
  export {useLocalStorage};