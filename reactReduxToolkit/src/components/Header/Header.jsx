import React from 'react'
import style from './Header.module.css'

const Header = () => {
  return (
    <div className={style.headingContainer}>
        <h1 className={style.heading}>Counter App</h1>
    </div>
  )
}

export default Header