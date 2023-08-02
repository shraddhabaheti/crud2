import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {  ordered, restocked } from './cakeSlice'
const CakeView = () => {
   const numOfCakes= useSelector((state)=>state.cake.numOfCakes)
   const dispatch=useDispatch()

  return (
    <div>
        <h2>Number of cake{numOfCakes}</h2>
        <button onClick={()=>dispatch(ordered())}>ordered cake</button>
        <button onClick={()=>dispatch(restocked(5))}>restocked cake</button>
    </div>
  )
}

export default CakeView
