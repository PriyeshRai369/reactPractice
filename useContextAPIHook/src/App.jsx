import './App.css'
import { useState } from 'react'
import Context from './Context'
import DisplayData from './DisplayData'

function App() {
  const [counter, setCounter] = useState(0)

  return (
    <Context.Provider value={counter}>
        <button onClick={()=>setCounter(counter => counter+1)}>Click Me {counter}</button>
        <DisplayData />
    </Context.Provider>
  )
}

export default App
