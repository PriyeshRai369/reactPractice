import React, { useState } from "react";
import CardContainer from "../CardContainer/CardContainer";

function Cards({ noOfData }) {
  return (
    <>
      {noOfData.map((value) => {
        return (
          <CardContainer value={value} key={value.id}/>
        );
      })}
    </>
  );
}

export default Cards;
