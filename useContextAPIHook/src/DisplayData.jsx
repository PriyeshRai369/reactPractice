import React,{useContext} from 'react'
import Context from './Context'

const DisplayData = () => {
    const data = useContext(Context)
  return (
    <div>{data}</div>
  )
}

export default DisplayData