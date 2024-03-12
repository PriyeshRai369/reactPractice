import React from "react";
import TodoBody from "./TodoBody";

function TodoItems({ data }) {
  return (
    <>
      {data.map((value,index)=>{
        return(
            <TodoBody 
            key={index} 
            name={value.name} 
            date={value.date} />
        );
      })}
    </>
  );
}

export default TodoItems;
