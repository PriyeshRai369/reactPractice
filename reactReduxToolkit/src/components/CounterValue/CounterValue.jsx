import React from 'react'
import style from './CounterValue.module.css'
import { useSelector } from 'react-redux'

function CounterValue() {
  const {value} = useSelector(store => store.counter)
  return (
    <div className={style.counterValueContainer}>
        <h1 className={style.counterValue}>{value}</h1>
    </div>
  )
}

export default CounterValue