import { useState } from "react";
import "./App.css";

function App() {
  const [view, setView] = useState(true);
  function change(){
    setView(!view)
  }

  return (
    <>
      <div className="container">
        <input
          type={view ? "password" : "text" }
          name="password"
          id="password"
          placeholder="Enter Password"
        />
        {
          view ? <img src="../public/view.png"  onClick={change} /> : 
            <img src="../public/hide.png"  onClick={change} />
        }
      </div>
    </>
  );
}

export default App;
