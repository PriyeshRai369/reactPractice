import Toast from "./components/Toast"

function App() {

  const message = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus ab ipsum distinctio amet, qui id cumque dolore magni, doloremque doloribus vero ut voluptatem soluta voluptatibus fugiat ullam asperiores, repellat facilis consectetur tempora alias commodi est. Commodi ratione, error qui repudiandae iure nisi. Provident sit, veritatis ipsa fuga possimus qui iure?'
  return (
    <main>
      <Toast message={message} top={50} right={10}/>
    </main>
  )
}
export default App
