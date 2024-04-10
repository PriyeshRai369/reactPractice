import React from 'react'
import style from './Popup.module.css'

function Popup({closeBtn}) {
  return (
    <div className={style.container}>
        <div className={style.box}>
            <h4 className={style.closeBtn} onClick={()=>closeBtn()}>&#10008;</h4>
            <h1>All Filds Are Require.😒</h1>
        </div>
    </div>
  )
}

export default Popup