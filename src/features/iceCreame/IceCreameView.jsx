import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {ordered , restcoked} from './iceCreameSlice'
const IceCreameView = () => {
   const numOfICeCreame= useSelector((state)=>state.icecreame.numOfIceCreame)
   const dispatch= useDispatch()
   const [value,setValue]=React.useState(1)
  return (
    <div>
       <h2> num of icecreame {numOfICeCreame} </h2>

       <button onClick={()=>dispatch(ordered())}>IceCreameOrder</button>
       <input type="number" value={value} onChange={(e)=>setValue(parseInt(e.target.value))}></input>
       <button onClick={()=>dispatch(restcoked(value))}>IceCreameRestoked</button>
    </div>
  )
}

export default IceCreameView
