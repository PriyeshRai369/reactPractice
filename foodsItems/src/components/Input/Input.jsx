import React from "react";
import style from './Input.module.css'

function Input({handleKeyDown}) {
  return (
    <div className={style.inputContainer} >
      <input type="text" className={style.input} 
      onKeyDown={handleKeyDown} />
    </div>
  );
}

export default Input;
