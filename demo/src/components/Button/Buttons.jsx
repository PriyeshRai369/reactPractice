import React from "react";
import style from "./Button.module.css";

function Buttons({ name, onClick }) {
  return (
    <>
      <button className={style.btn} onClick={()=>onClick(true)}>
        {name}
      </button>
    </>
  );
}

export default Buttons;
