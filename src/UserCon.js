import React, { useCallback, useEffect, useState } from 'react'
import { UserContext } from './App'
import Usechild from './Usechild';
const UserCon = () => {
  
    const [count,setCount]=useState(0);
    const [date,setDate]=useState();
    const currentDate=new Date().toLocaleDateString();
    const currentTime=new Date().toLocaleTimeString();
    
  const learning = useCallback(()=>{

    },[])
    
    useEffect(()=>{
        //console.log("useEffect")
        document.title=`chat (${count})`
    },[count])
  return (
    <div>

      <h1>useEffect is used to{count}</h1>
      <p>{`The current Date is:-${currentDate} ${currentTime}`}</p>
      <button onClick={()=>setCount(count+1)}>Click</button><br/>
      <h5>seletctDate{date}</h5>
      <input type="date" onChange={(e)=>setDate(e.target.value)}  className="input"/>
      {/* <Usechild learning={learning} count={count}/> */}
      <Usechild learning={learning}/>
      
    </div>
  )
}

export default UserCon
