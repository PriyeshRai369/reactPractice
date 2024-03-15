import React from "react";
import style from "./Notes.module.css";

function Notes({ data, deleteData }) {
  return (
    <>
      {data.map((value, index) => {
        return (
          <div className={style.notesContainers} key={index}>
            <p>Title</p>
            <h3 className={style.closeBtn} 
            onClick={()=>{deleteData(index)}}>
              X
            </h3>
            <div className={style.heading}>
              <h4>
                <span>{index + 1}.</span>
                {value.title}
              </h4>
            </div>
            <p>Description</p>
            <div className={style.description}>
              <h5>{value.description}</h5>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Notes;
