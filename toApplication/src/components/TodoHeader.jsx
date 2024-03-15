import React, { useRef } from "react";

function TodoHeader({addItems}) {
    const inputText = useRef();
    const inputDate = useRef();

    function handleClick(){
        const text = inputText.current.value;
        const date = inputDate.current.value;
        inputText.current.value ="";
        inputDate.current.value ="";
        addItems(text,date)
    }
  return( 
  <div className="container">
    <center>
        <h1>Todo Application</h1>
        <div className="row my-3">
            <div className="col-5">
                <input type="text" className="w-100"
                ref={inputText}
                />
            </div>
            <div className="col-4">
                <input type="date" className="w-100"
                ref={inputDate}
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
