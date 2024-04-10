import React from 'react'
import style from './Navbar.module.css'
import Heading from '../Heading/Heading'

function Navbar() {
  return (
    <nav className={style.navbar}>
        <Heading />
    </nav>
  )
}

export default Navbar