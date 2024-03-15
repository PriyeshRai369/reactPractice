import React, { useState } from "react";
import style from "./Header.module.css";
import Buttons from "../Button/Buttons";

function Header({ onClick }) {
  return (
    <div className={style.container}>
      <div className={style.logoContainer}>
      <img src="./notes.png" style={{width:"40px",marginRight:"5px"}} /><h1>Keep Notes </h1>
      </div>
      <div className={style.buttonContainer}>
        <Buttons name="Add Notes" onClick={onClick} />
      </div>
    </div>
  );
}

export default Header;
