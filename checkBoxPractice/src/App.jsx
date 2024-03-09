import { useState } from "react";
import "./App.css";

function App() {
  const [checked, setChecked] = useState({});
  const data = ["play cricket", "watch movies", "code"];
  const [newData, setNewData] = useState(data);

  function HandleChange(e, index) {
    const isChecked = e.target.checked;
    setChecked(prevChecked => ({
      ...prevChecked,
      [index]: isChecked
    }));
  }

  function HandleClick(index) {
    const newVal = newData.filter((_, i) => i !== index);
    setNewData(newVal);
    setChecked(prevChecked => {
      const updatedChecked = { ...prevChecked };
      delete updatedChecked[index];
      return updatedChecked;
    });
  }

  return (
    <ul>
      {newData.map((value, index) => {
        return (
          <li key={index}>
            <input 
              type="checkbox" 
              onChange={(e) => HandleChange(e, index)} 
              checked={checked[index] || false} 
            />
            {value}
            {checked[index] && <button onClick={() => HandleClick(index)}>Delete</button>}
          </li>
        );
      })}
    </ul>
  );
}

export default App;
      