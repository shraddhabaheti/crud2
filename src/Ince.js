import React, { useContext, useState } from 'react'


function Ince(props) {
  
    const [num,setNum]=useState(0);
    const number=300;
    const incum=()=>{
        setNum(num+1);
    }

    const denum=()=>{
        if(num>0){
            setNum(num-1)
        }else{
            setNum(0)
        }
       
    }
  return (
   
    <div>
      
      <h1>{num}</h1>
      <button onClick={incum}>Incerement</button>
      <button onClick={denum}>decrement</button>
      <button onClick={()=>props.sum(number)}>click Sum</button>
    </div>
  
   

   
   
  )
}

export default Ince
