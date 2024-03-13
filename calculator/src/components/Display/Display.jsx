import React from "react";
import style from './Display.module.css'

function Display({value}) {
  return (
    <div>
      <input type="text" className={style.input} readOnly value={value} />
    </div>
  );
}

export default Display;
