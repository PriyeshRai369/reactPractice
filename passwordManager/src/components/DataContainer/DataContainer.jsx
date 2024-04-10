import React from 'react'
import style from './DataContainer.module.css'

function DataContainer({data,deleteFild,copyBtn}) {
  return (
    <div className={style.container}>
        {data.length > 0 && 
            <table border={1} style={{width:"100%",borderCollapse:"collapse",overflow:'scroll'}}>
            <tr>
                <th style={{minWidth:"100px"}}>Srno</th>
                <th style={{minWidth:"500px"}}>Website Name</th>
                <th style={{minWidth:"250px"}}>Username</th>
                <th style={{minWidth:"250px",padding:"0px"}}>Password</th>
                <th style={{minWidth:"200px"}}>Actions</th>
            </tr>
        {data.map((value,index)=>{
            return(
                <tr key={index}>
                <td>{index + 1}</td>
                <td>{value.webName}</td>
                <td>{value.userName} </td>
                <td style={{padding:"20px 0 20px",position:"relative"}}>{value.password} 
                <button
                className={style.copyButton}
                title='click to copy'
                    onClick={() => copyBtn(value.password)}>
                    <img src="./copy.png" alt="copyToClipboard" className={style.copyBtn} />
                </button>
                 </td>
                <td>
                    <button 
                    className={style.btn}
                    onClick={()=>deleteFild(index)}
                    >
                        Delete
                    </button>  
                </td>
            </tr>
            )
        })}
        </table>
        }
    </div>
  )
}

export default DataContainer