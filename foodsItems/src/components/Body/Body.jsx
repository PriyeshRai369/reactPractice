import React from 'react'
import style from './Body.module.css'

function Body({children}) {
  return (
    <div className={style.box}>
        <h1>Priyesh</h1>
        {children}
    </div>
  )
}

export default Body