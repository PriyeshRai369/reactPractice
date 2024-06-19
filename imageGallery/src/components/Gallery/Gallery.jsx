import React, { useState } from "react";
import style from "./Gallery.module.css";

function Gallery() {
  const [fullScreen, setFullScreen] = useState(false);
  const [imageClicked, setImageClicked] = useState(0);
  const imageSrc = [
    {
      src: "../images/gridOne.jpg",
    },
    {
      src: "../images/gridTwo.jpg",
    },
    {
      src: "../images/gridThree.jpg",
    },
    {
      src: "../images/gridFour.jpg",
    },
    {
      src: "../images/gridFive.png",
    },
    {
      src: "../images/gridSix.jpg",
    },
    {
      src: "../images/gridSeven.jpg",
    },
    {
      src: "../images/gridEight.jpg",
    },
    {
      src: "../images/gridNine.jpg",
    },
    {
      src: "../images/gridTen.jpg",
    },
    {
      src: "../images/gridEleven.jpg",
    },
    {
      src: "../images/gridTwelve.jpg",
    },
  ];

  function handelClick(index) {
    setFullScreen(true);
    setImageClicked(index);
  }
  function handleClose(){
    setFullScreen(false);
  }
  function handleNext(){
    imageClicked + 1 === imageSrc.length ? setImageClicked(0): setImageClicked(imageClicked + 1)
  }
  function handlePre(){
    imageClicked === 0 ? setImageClicked(imageSrc.length - 1) : setImageClicked(imageClicked - 1)
  }
  return (
    <>
      <div className={style.imageWraper}>
        {imageSrc.map((value, index) => (
          <div
            className={style.imageGrid}
            key={index}
            onClick={() => handelClick(index)}
          >
            <img src={value.src} alt="" />
          </div>
        ))}
      </div>
      {fullScreen && (
        <div className={style.fullScreen}>
          <img
            src="../images/closeBtn.svg"
            alt=""
            className={style.closeBtn}
            onClick={() => handleClose()}
          />
          <img
            src="../images/nextBtn.png"
            alt=""
            className={style.nextBtn}
            onClick={() => handleNext()}
          />
          <img
            src="../images/preBtn.png"
            alt=""
            className={style.preBtn}
            onClick={() => handlePre()}
          />
          <div className={style.imageContainer}>
            <img src={imageSrc[imageClicked].src} alt="" />
          </div>
        </div>
      )}
    </>
  );
}

export default Gallery;
