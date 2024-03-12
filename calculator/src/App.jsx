import style from "./App.module.css";
import Display from "./components/Display/Display";
import Buttons from "./components/Buttons/Buttons";
import Container from "./components/Container/Container";
function App() {
  return (
    <Container>
      <div className={style.box}>
        <Display />
        <Buttons />
      </div>
    </Container>
  );
}

export default App;
