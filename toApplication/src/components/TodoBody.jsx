import React from 'react'

function TodoBody({name, date, click}) {
  return (
    <div className="container my-2">
        <center>
            <div className="row">
                <div className="col-5">
                    <h4>{name}</h4>
                </div>
                <div className="col-4">
                    <h4>{date}</h4>
                </div>
                <div className="col-3">
                    <button className='btn btn-danger w-100'
                    onClick={click}
                    >Delete</button>
                </div>
            </div>
        </center>
    </div>
  )
}

export default TodoBody