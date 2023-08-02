import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import './counterSlice';
import { increment,decrement,incrementByAmount,incrementAsync,selectCount } from "./counterSlice"
export  function Counter(){
    const count= useSelector(selectCount)
    const [incrementAmount,setIncrementAmount]=useState('2');
    const dispatch=useDispatch();
    return(
      <div>
      <div >
        <button
          className="txt1"
           onClick={() => dispatch(increment())}
        >
          +
        </button>
        <span  >{count}</span>
        <button
        className="txt1"
        onClick={() => dispatch(decrement())}
        >
          -
        </button>
      </div>
      <div >
        <input
          value={incrementAmount}
          onChange={e => setIncrementAmount(e.target.value)}
        />
         <button
         className="txt1"
          onClick={() =>
            dispatch(incrementByAmount(Number(incrementAmount) || 0))
          }
        >
          Add Amount
        </button>
        <button
          className="txt1"
          onClick={() => dispatch(incrementAsync(Number(incrementAmount) || 0))}
        >
          Add Async
        </button>
      </div> 
    </div>
           )
}