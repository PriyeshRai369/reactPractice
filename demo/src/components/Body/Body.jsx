import React from 'react'
import style from './Body.module.css'

function Body({children}) {
  return (
    <div className={style.notesContainer}>{children}</div>
  )
}

export default Body