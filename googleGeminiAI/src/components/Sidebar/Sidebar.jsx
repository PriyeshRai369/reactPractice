import React, { useContext, useState } from "react";
import style from "./Sidebar.module.css";
import { Context } from "../../context/Context";

const Sidebar = () => {
  const [extended, setExtended] = useState(false);
  const { onSent, prevPrompt, setRecentPrompt,newChat } = useContext(Context);

  const loadPrompt = async (prompt)=>{
    setRecentPrompt(prompt)
    await onSent(prompt)
  }

  return (
    <div className={style.sidebar}>
      <div className={style.top}>
        <img
          src="../menu_icon.png"
          alt="Menu Icon"
          className={style.menu}
          onClick={() => setExtended(!extended)}
        />
        <div className={style.newChat} onClick={()=>newChat()}>
          <img src="../plus_icon.png" alt="plus_icon" />
          {extended && <p>New Chat</p>}
        </div>
        {extended && (
          <div className={style.recent}>
            <p className={style.recentTitle}>Recent</p>
            {prevPrompt.map((item, index) => {
              return (
                <div className={style.recentEntry} onClick={()=>{loadPrompt(item)}}>
                  <img src="../message_icon.png" alt="Recent Message" />
                  <p>{item.slice(0, 15)}...</p>
                </div>
              );
            })}
          </div>
        )}
      </div>

      <div className={style.bottom}>
        <div
          className={`${style.bottomItem} 
            ${style.recentEntry}`}
        >
          <img src="../question_icon.png" alt="About" />
          {extended && <p>Help</p>}
        </div>
        <div
          className={`${style.bottomItem} 
            ${style.recentEntry}`}
        >
          <img src="../history_icon.png" alt="About" />
          {extended && <p>History</p>}
        </div>
        <div
          className={`${style.bottomItem} 
            ${style.recentEntry}`}
        >
          <img src="../setting_icon.png" alt="About" />
          {extended && <p>Setting</p>}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
