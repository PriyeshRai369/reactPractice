import React, { useContext } from "react";
import style from "./Main.module.css";
import { Context } from "../../context/Context";

export const Main = () => {
  const {
    onSent,
    recentPrompt,
    showResult,
    loading,
    resultData,
    setInput,
    input,
  } = useContext(Context);

  return (
    <div className={style.main}>
      <div className={style.nav}>
        <p>Gemini</p>
        <img src="../logo.png" alt="user icon" />
      </div>

      <div className={style.mainContainer}>
        {showResult ? (
          <div className={style.result}>
            <div className={style.resultTitle}>
              <img src="../logo.png" alt="User Logo" />
              <p>{recentPrompt}</p>
            </div>
            <div className={style.resultData}>
              <img src="../gemini_icon.png" alt="" />
              {loading ? (
                <div className={style.loader}>
                  <hr />
                  <hr />
                  <hr />
                  <hr />
                  <hr />
                </div>
              ) : (
                <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
              )}
            </div>
          </div>
        ) : (
          <>
            <div className={style.greet}>
              <p>
                <span>Hello, Priyesh</span>
              </p>
              <p>How I can help you today?</p>
            </div>
            <div className={style.cards}>
              <div className={style.card}>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Nihil, in.
                </p>
                <img src="../compass_icon.png" alt="" />
              </div>
              <div className={style.card}>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Nihil, in.
                </p>
                <img src="../bulb_icon.png" alt="" />
              </div>
              <div className={style.card}>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Nihil, in.
                </p>
                <img src="../message_icon.png" alt="" />
              </div>
              <div className={style.card}>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Nihil, in.
                </p>
                <img src="../code_icon.png" alt="" />
              </div>
            </div>
          </>
        )}

        <div className={style.mainBottom}>
          <div className={style.searchBox}>
            <input
              onChange={(e) => setInput(e.target.value)}
              value={input}
              type="text"
              placeholder="Enter a prompt here"
            />
            <div>
              <img src="../gallery_icon.png" alt="" />
              <img src="../mic_icon.png" alt="" />
              {input && (
                <img src="../send_icon.png" alt="" onClick={() => onSent()} />
              )}
            </div>
          </div>

          <p className={style.bottomInfo}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam
            iste eligendi saepe molestias possimus, est illum ipsam similique
            dolor porro?
          </p>
        </div>
      </div>
    </div>
  );
};
