import "./App.css";
import { useEffect, useState } from "react";
import Cards from "./components/Cards/Cards";

function App() {
  const [data, setData] = useState([]);
  const [noOfPage,setNoOfPage] = useState(1)

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((res) => setData(res.products));
  }, []);

  function handleselectedPage(pageNo){
    if(pageNo >=1 && pageNo <= Math.round(data.length / 8) && pageNo !== noOfPage)
    setNoOfPage(pageNo)
  }

  return (
    <Cards noOfData={data} page={noOfPage} selectedPage={handleselectedPage} />
  );
}

export default App;
