import React from "react";

function TodoHeader() {
  return( 
  <div className="container">
    <center>
        <h1>Todo Application</h1>
        <div className="row my-3">
            <div className="col-5">
                <input type="text" className="w-100"/>
            </div>
            <div className="col-4">
                <input type="date" className="w-100"/>
            </div>
            <div className="col-3">
                <button className="btn btn-info w-100">Add</button>
            </div>
        </div>
    </center>
  </div>
  );
}

export default TodoHeader;
