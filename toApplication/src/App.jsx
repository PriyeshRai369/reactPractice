import TodoHeader from "./components/TodoHeader"
import TodoItems from "./components/TodoItems"
import data from "./components/data"
function App() {

  return (
    <>
      <TodoHeader />
      <TodoItems data={data} />
    </>
  )
}

export default App
