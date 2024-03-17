import "./App.css";
import { useEffect, useState } from "react";
import Cards from "./components/Cards/Cards";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((res) => setData(res.products));
  }, []);
  return (
    <>
      <Cards noOfData={data} />
    </>
  );
}

export default App;
