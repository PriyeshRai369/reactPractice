import React from "react";
import style from './Container.module.css'

function Container(props) {
  return (
    <div className={style.calcContainer}>
      {props.children}
    </div>
  );
}

export default Container;
