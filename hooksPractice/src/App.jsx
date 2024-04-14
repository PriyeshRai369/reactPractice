import { useRef } from 'react'
import './App.css'

function App() {
  const name = useRef("");
  const branch = useRef("");
  function handleSubmit(event){
    event.preventDefault();
    const myName = name.current.value;
    const myBranch = name.current.value;
    console.log(myName,myBranch);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input 
        ref={name}
        type="text" 
        name='myName'
        placeholder='Enter Your Name' />
        <input 
        ref={branch}
        type="text" 
        name='myBranch'
        placeholder='Enter Your Branch Name' />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App
