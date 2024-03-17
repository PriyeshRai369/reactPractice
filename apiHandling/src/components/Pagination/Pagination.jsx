import React from 'react'
import style from './Pagination.module.css'

function Loading({noOfPage,selectedPage,page}) {

  return (
    <div className={style.loading}>
      <button className={style.btn}
      onClick={()=>selectedPage(page-1)}
      >Previus</button>
      
      {
        [...Array(Math.round(noOfPage.length / 8))].map((_,i)=>
        <span 
        className={page===i+1 ? style.selected : ""}
        key={i} onClick={()=>selectedPage(i+1)}>{i+1}</span>)
      }
      <button className={style.btn}
      onClick={()=>selectedPage(page+1)}
      >Next</button>
    </div>
  )
}

export default Loading

