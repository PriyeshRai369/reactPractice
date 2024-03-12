import style from './App.module.css'
import Display from './components/Display/Display';
import Buttons from './components/Buttons/Buttons';
function App() {
  return (
    <div className={style.calcContainer}>
    <div className={style.box}>
      <Display />
      <Buttons />
    </div>
  </div>
  );
}

export default App;
