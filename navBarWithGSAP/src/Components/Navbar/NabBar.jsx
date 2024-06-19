import React, { useState } from "react";
import style from "./NabBar.module.css";

function NabBar() {
  const [clicked, setClicked] = useState(false);
  return (
    <nav className={style.nav}>
      <div className={style.logo}></div>
      <div className={style.menuBtn} onClick={() => setClicked(!clicked)}>
        <span className={clicked ? style.closeBtn : style.openBtn}></span>
        <span className={clicked ? style.closeBtn : style.openBtn}></span>
        <span className={clicked ? style.closeBtn : style.openBtn}></span>
      </div>
      <div className={`${style.links}  ${clicked && style.open}`}>
        <div>Home</div>
        <div>About</div>
        <div>Services</div>
        <div>Contact</div>
      </div>
    </nav>
  );
}

export default NabBar;
