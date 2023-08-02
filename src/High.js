import { useState } from "react";

function High(){
    return (
        <div>
            <h3>Hoc</h3>
            <Highorder cmp={Counter}/>
        </div>
    )
}
function Highorder(props){
    return(
        <h2 style={{backgroundColor:"red" ,width:"100px"}}><props.cmp/></h2>
    )
}
function Counter(){
    const[count,setCount]=useState(0);
    return(
        <div>
            <h3>{count}</h3>
        <button onClick={()=>setCount(count+1)}>update</button>
        </div>
        
    )
}

export default High;