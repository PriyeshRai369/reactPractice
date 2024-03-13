import style from "./App.module.css";
import Display from "./components/Display/Display";
import Buttons from "./components/Buttons/Buttons";
import Container from "./components/Container/Container";
import { useState } from "react";
function App() {
  const [numbers,setNumbers]= useState("")
  function onClick(value){
    if(value === "C"){
      setNumbers("")
    }
    else if( value === "="){
      const result = eval(numbers)
      setNumbers(result)
    }
    else{
      let nums = numbers + value
      setNumbers(nums)
    }
  }

  return (
    <Container>
      <div className={style.box}>
        <Display value={numbers} />
        <Buttons handleClick={onClick} />
      </div>
    </Container>
  );
}

export default App;
