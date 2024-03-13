import Container from "./components/Container/Container";
import Body from "./components/Body/Body";
import Input from "./components/Input/Input";
import Data from "./components/Data/Data";
import { useState } from "react";

function App() {
  const [newData, setNewData] = useState(["Play cricket", "eat food"]);
  function handleKey(e){
    const key = e.key
    if(key === "Enter"){
      const value = e.target.value
      e.target.value =""
      const newItem = [...newData, value]
      setNewData(newItem)
    }
  }
  function clicked(value,index){
    console.log(value,index);
  }
  return (
    <Container>
      <Body>
        <Input handleKeyDown={handleKey} />
        <Data data={newData} handleClick={clicked}  />
      </Body>
    </Container>
  );
}

export default App;
