import React, { useState } from "react";
import CardContainer from "../CardContainer/CardContainer";
import Pagination from '../Pagination/Pagination'

function Cards({ noOfData,page,selectedPage }) {
  return (
    <>
      {noOfData.slice(page * 8 - 8,page * 8).map((value) => {
        return (
          <CardContainer value={value} key={value.id}/>
        );
      })}
      {
        noOfData.length>0 && <Pagination noOfPage={noOfData} selectedPage={selectedPage} page={page} />
      }
    </>
  );
}

export default Cards;
