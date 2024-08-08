import React, { useEffect, useRef, useState } from "react";

export default function Slider() {
  const containerRef = useRef();
  const [showLeftButton, setShowLeftButton] = useState(false);
  const [showRightButton, setShowRightButton] = useState(true);

  const handleScroll = (direction) => {
    const scrollAmount = 300;
    if (direction === "left") {
      containerRef.current.scrollLeft -= scrollAmount;
    } else {
      containerRef.current.scrollLeft += scrollAmount;
    }
    setTimeout(() => handleIcons(), 50);
  };

  const handleIcons = () => {
    const scrollVal = containerRef.current.scrollLeft;
    const maxValue = containerRef.current.scrollWidth - containerRef.current.clientWidth;
    setShowLeftButton(scrollVal > 0);
    setShowRightButton(scrollVal < maxValue);
  };

  useEffect(() => {
    handleIcons(); 
    containerRef.current.addEventListener("scroll", handleIcons);
    return () => {
      containerRef.current.removeEventListener("scroll", handleIcons);
    };
  }, []);

  return (
    <section className="wraper">
      {showLeftButton && (
        <div className="icons">
          <i
            id="left"
            className="fa-solid fa-angle-left"
            onClick={() => handleScroll("left")}
          ></i>
        </div>
      )}
      <div className="container" ref={containerRef}>
        <div className="imageContainer">
          <img src="images/01.jpg" alt="Image 1" />
        </div>
        <div className="imageContainer">
          <img src="images/02.jpg" alt="Image 2" />
        </div>
        <div className="imageContainer">
          <img src="images/03.jpg" alt="Image 3" />
        </div>
        <div className="imageContainer">
          <img src="images/04.webp" alt="Image 4" />
        </div>
        <div className="imageContainer">
          <img src="images/05.jpg" alt="Image 5" />
        </div>
      </div>
      {showRightButton && (
        <div className="icons">
          <i
            id="right"
            className="fa-solid fa-angle-right"
            onClick={() => handleScroll("right")}
          ></i>
        </div>
      )}
    </section>
  );
}
