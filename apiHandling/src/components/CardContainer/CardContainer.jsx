import React from "react";
import style from "./Cards.module.css";

function CardContainer({ value }) {
  return (
    <div className={style.cardContainer}>
      <p className={style.brandName}>{value.brand}</p>
      <div className={style.imageContainer}>
        <img src={value.thumbnail} />
      </div>
      <div className={style.titleContainer}>
        <div className={style.title}>
          <h3>{value.title}</h3>
          <h5>Price:- ${value.price}</h5>
        </div>
        <div className={style.stockContainer}>
          <h3>Stocks :- {value.stock}</h3>
          <p>Discount :- {value.discountPercentage}%</p>
        </div>
        <div className={style.description}>
          <p>{value.description}</p>
        </div>
      </div>
    </div>
  );
}

export default CardContainer;
