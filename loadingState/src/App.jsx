import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [data, setData] = useState("");

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((res) => setData(res.products));
  }, []);

  console.log(data);
  return (
    <main>
      <h1>Hello</h1>
    </main>
  );
}

export default App;
