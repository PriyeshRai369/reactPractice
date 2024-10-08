import React, { useEffect, useState } from "react";

function Toast({ type, top, left, right, bottom, bgColour, message }) {
  const [colors, setColors] = useState("#2a7cf6d4");
  const [showToast, setShowToast] = useState(false);

  function HandleCloseBtn() {
    setShowToast(false);
  }
  useEffect(() => {
    if (type === "success") {
      setColors("#198754");
    } else if (type === "warning") {
      setColors("rgba(255, 200, 0, 0.636)");
    } else if (type === "error") {
      setColors("#DC3545");
    }
  }, [type,top,left,bottom,right]);

  return (
    <>
      <button className="btn" onClick={() => setShowToast(true)}>
        Click Me
      </button>

      <div
        className="toastContainer"
        style={{
          top: `${top}` + "px" || "0",
          left: `${left}` + "px" || "0",
          right: `${right}` + "px" || "0",
          bottom: `${bottom}` + "px" || "0",
          "--toast-after-bg": colors,
          backgroundColor: bgColour,
          display: `${showToast ? "block" : "none"}`
        }}
      >
        
        <div
          className="toastCloseBtn"
          style={{ backgroundColor: colors }}
          onClick={HandleCloseBtn}
        >
          &#10005;
        </div>
        <div className="toastContent">
          <p>{message}</p>
        </div>
      </div>
    </>
  );
}

export default Toast;
