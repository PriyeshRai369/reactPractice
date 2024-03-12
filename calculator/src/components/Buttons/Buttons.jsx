import React from "react";
import style from './Buttons.module.css'

function Buttons() {
  const btn= ['c','1','2','+','3','4','-','5','6','*','7','8','/','9','=','0','.',]
  return (
    <div className={style.btns}>
      {btn.map((value, index)=>{
        return <button key={index} className={style.button}>{value}</button>
      })}
    </div>
  );
}

export default Buttons;
