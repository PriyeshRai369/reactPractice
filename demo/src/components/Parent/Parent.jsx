import React from 'react'
import style from './Parent.module.css'

function Parent({children}) {
  return (
    <div className={style.parent}>{children}</div>
  )
}

export default Parent