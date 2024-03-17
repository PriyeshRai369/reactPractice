import React, { useState } from "react";
import style from "./Modal.module.css";

function Modal({ onClick, handleChange }) {
  const [inputTitle, setInputTitle] = useState("");
  const [inputDesc, setInputDesc] = useState("");
  function handleChanges(e) {
    const { id, value } = e.target;
    if (id === "title") {
      setInputTitle(value);
    } else if (id === "desc") {
      setInputDesc(value);
    }
  }
  function handleClick() {
    if (!inputTitle.trim() || !inputDesc.trim()) {
      alert("Please fill in both title and description fields.");
      return;
    }
    handleChange(inputTitle , inputDesc);
    onClick(false);
  }
  return (
    <div className={style.container}>
      <div className={style.modalContainer}>
        <h1 onClick={() => onClick(false)}>&times;</h1>
        <div className={style.heading}>
          <h2>Add Notes</h2>
        </div>
        <div className={style.modalBody}>
          <input
            type="text"
            className={style.input}
            id="title"
            placeholder="Enter Title"
            onChange={handleChanges}
          />
          <textarea
            id="desc"
            className={style.textArea}
            cols="30"
            rows="10"
            onChange={handleChanges}
          ></textarea>
          <button className={style.btn} onClick={handleClick}>
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
