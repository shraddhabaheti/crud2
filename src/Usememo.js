import { useMemo, useState } from "react";

function Usememo(){
    const[count,setCount]=useState(0);
    const[item,setItem]=useState(10);
    const[countOne,setCountOne]=useState(0)
    const [counttwo,setCounttwo]=useState(0)
    const  multimeno = useMemo(function multimeno(){
      console.log("multimeno")
      return count*5
    },[count] )
    const countOneIncrement=()=>{
        setCountOne(countOne+1);
    }
    const counttwoIncrement=()=>{
        setCounttwo(counttwo+1)
    }
  const evenNumber=  useMemo(()=>{
    let i=0;
    while(i<20000000)i++
    return countOne % 2 == 0
},[countOne])

    
    return(
        <div>
         <h1>Usememo Hooks in react</h1>
         <h5>Count:-{count}</h5>
         <h5>Item:-{item}</h5>
         <h5>{multimeno}</h5>
         <button type="submit" onClick={()=>setCount(count+1)}>CountIncrement</button>
         <button type="submit" onClick={()=>setItem(count*3)}>countItem</button><br/>
         <button type="submit" onClick={countOneIncrement}>incrementCount{countOne}</button>
         <span>{evenNumber?"even" :'odd'}</span>
         <button type="submit" onClick={counttwoIncrement}>incrementCount{counttwo}</button>
        
        </div>
    )
}
export default Usememo;