import React from "react";
import style from './Buttons.module.css'

function Buttons({handleClick}) {
  const btn= ['C','1','2','+','3','4','-','5','6','*','7','8','/','9','=','0','.',]
  return (
    <div className={style.btns}>
      {btn.map((value, index)=>{
        return <button key={index}
        onClick={(event)=>handleClick(value)}
        className={style.button}>{value}</button>
      })}
    </div>
  );
}

export default Buttons;
