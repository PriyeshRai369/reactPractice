import React from 'react'
import style from './Buttons.module.css'
import { useDispatch } from 'react-redux'

function Buttons() {
  const dispatch = useDispatch()
  function handleInc(){
     dispatch({type:"INC"}) 
  }
  function handleDec(){
    dispatch({type:"DEC"})
  }
  return (
    <div className={style.btnContainer}>
        <button className={style.btn} onClick={handleInc}>+1</button>
        <button className={style.btn} onClick={handleDec}>-1</button>
    </div>
  )
}

export default Buttons