import { useState } from "react";

function Evenoddto(){
    const [input,setInput]=useState({
        num1:''
    });
    const [data,setData]=useState({
        num1:''
    });
    const evenodd=()=>{
        
        if(input.num1 % 2 == 0){
            setData({...input,num1:`${input.num1} is even number`})
           setInput({num1:''})
        }else{
            setData({...input,num1:`${input.num1} is odd number`})
            setInput({num1:''})
        }
    }
    const handleChange=(e)=>{
        setInput({
            ...input,
            [e.target.name]:e.target.value
        })
    }
    console.log(input)
    
    return(
        <div>
           
           <input type="number" name="num1" placeholder="enter the number" onChange={handleChange} value={input?.num1} />
           {/* <h3>{input.num1}</h3> */}
            <h3>{data.num1}</h3>
           <button type="submit" onClick={evenodd}>Clickme</button>
           
        </div>
    )
}
export default Evenoddto;