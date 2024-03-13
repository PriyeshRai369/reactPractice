import React, { useState } from "react";

function TodoHeader({addItems}) {
    const [inputText,setInputText] = useState("")
    const [inputDate,setInputDate] = useState("")
    function handleTextChange(event){
        const textValue = event.target.value;
        setInputText(textValue)
    }
    function handleDateChange(event){
        const dateValue = event.target.value;
        setInputDate(dateValue)
    }

    function handleClick(){
        addItems(inputText,inputDate)
        setInputDate("")
        setInputText("")
    }
  return( 
  <div className="container">
    <center>
        <h1>Todo Application</h1>
        <div className="row my-3">
            <div className="col-5">
                <input type="text" className="w-100"
                onChange={handleTextChange} 
                value={inputText}
                />
            </div>
            <div className="col-4">
                <input type="date" className="w-100"
                onChange={handleDateChange}
                value={inputDate}
                />
            </div>
            <div className="col-3">
                <button className="btn btn-info w-100"
                onClick={handleClick}
                >Add</button>
            </div>
        </div>
    </center>
  </div>
  );
}

export default TodoHeader;
