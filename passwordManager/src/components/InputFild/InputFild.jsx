import React, { useState } from "react";
import style from "./InputFild.module.css";
import Popup from "../Popup/Popup";

function InputFild({ handleClicks }) {
  const [webName, setWebName] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [view, setView] = useState(true);

  function change(){
    setView(!view)
  }

  function handleChange(event) {
    const { id, value } = event.target;
    if (id === "webName") {
      setWebName(value);
    } else if (id === "userName") {
      setUserName(value);
    } else if (id === "password") {
      setPassword(value);
    }
  }


  function handleClick() {
    if (!webName.trim() || !userName.trim() || !password.trim()) {
      setShowPopup(true);
      return;
    }
    handleClicks(webName, userName, password);
    setWebName("");
    setUserName("");
    setPassword("");
  }
  function closeBtnHandler() {
    setShowPopup(false);
  }

  return (
    <div className={style.inputHolder}>
      <div
        style={{
          width: "100%",
          height: "50px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <input
          id="webName"
          type="text"
          className={style.inputFilds}
          placeholder="Website Name"
          onChange={handleChange}
          value={webName}
        />
      </div>
      <input
        id="userName"
        type="text"
        className={style.inputFilds}
        placeholder="UserName"
        onChange={handleChange}
        value={userName}
      />
      <div className={style.passInput}>
        <input
          style={{ width: "100%", padding: "0 70px 0 10px" }}
          id="password"
          type={view ? "password" : "text" }
          className={style.inputFilds}
          placeholder="Password"
          onChange={handleChange}
          value={password}
        />
        {
          view ? <img src="/view.png"  onClick={change} className={style.eye} /> : 
            <img src="/hide.png"  onClick={change} className={style.eye} />
        }
      </div>
      <div style={{ width: "100%" }}>
        <button className={style.addBtn} onClick={handleClick}>
          Add
        </button>
      </div>
      {showPopup && <Popup closeBtn={closeBtnHandler} />}
    </div>
  );
}

export default InputFild;
