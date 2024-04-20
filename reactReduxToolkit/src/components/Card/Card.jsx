import React from 'react'
import style from './Card.module.css'
import Header from '../Header/Header'
import CounterValue from '../CounterValue/CounterValue'
import Buttons from '../Buttons/Buttons'
function Card() {
  return (
    <div className={style.container}>
        <Header/>
        <CounterValue />
        <Buttons />
    </div>
  )
}

export default Card