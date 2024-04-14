import { useRef, useState } from "react"


function App() {
  const [data,setData] = useState({
    name:"",
    password:""
  });
  // useRef()

  function handleChange(event){
    const {value,name} = event.target
    // console.log(value,name);
    setData((preValue)=>{
      return{
        ...preValue,
        [name]:value
      }
    })
  }

  return (
    <div>
      <h1>React Forms</h1>
      <form>
        <input type="text" onChange={handleChange}  name="name" />Name
        <input type="password"  onChange={handleChange} name="password" />Password
        <button type="submit">Submit</button>
      </form>
      {data.name}
      <br/>
      {data.password}
    </div>
  )
}

export default App
