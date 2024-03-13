import React from "react";
import style from "./Data.module.css";
import Button from "../Buttons/Button";

function Data({ data, handleClick }) {
  return (
    <ul className="list-group">
      {data.map((value, index) => {
        return (
          <li key={index} className={`list-group-item ${style.ls}`}>
            {value}
            <Button  handleClick={()=>handleClick(value,index)} />
          </li>
        );
      })}
    </ul>
  );
}

export default Data;
