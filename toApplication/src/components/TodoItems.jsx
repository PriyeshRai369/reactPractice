import React from "react";
import TodoBody from "./TodoBody";

function TodoItems({ data, handleClick }) {
  return (
    <>
      {data.map((value,index)=>{
        return(
            <TodoBody 
            key={index} 
            name={value.name} 
            date={value.date} 
            click={()=>handleClick(index)}
            />
        );
      })}
    </>
  );
}

export default TodoItems;
