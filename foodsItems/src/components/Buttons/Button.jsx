import React from 'react'
import style from './Button.module.css'

function Button({handleClick}) {
  return (
    <button className={`${style.buttons}  btn btn-danger`}
    onClick={handleClick}
    >Delete</button>
  )
}

export default Button