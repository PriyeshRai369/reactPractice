import React from 'react'
import style from './Heading.module.css';

function Heading() {
  return (
    <h3 className={style.heading}>&lt;Secure <span>Nest</span>/&gt;</h3>
  )
}

export default Heading