import { useState } from "react"
import TodoHeader from "./components/TodoHeader"
import TodoItems from "./components/TodoItems"
import TodoMessage from "./components/TodoMessage"
function App() {
  const [todoData, setTodoData] = useState([])
  function addItems(text,date){
    const newData = [...todoData,{name:text,date:date}]
    setTodoData(newData)
  }
  function handleDeleteItem(index){
    const val = todoData.filter((_, i) => i !== index);
    setTodoData(val)
  }
  return (
    <>
      <TodoHeader addItems={addItems} />
      {todoData.length === 0 && <TodoMessage />}
      <TodoItems data={todoData} 
      handleClick={handleDeleteItem} />
    </>
  )
}

export default App
