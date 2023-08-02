import { useRef } from "react";
import UserCon from "./UserCon";

function Useref(){
  
    const inputRef=useRef(null)
    function handle(){
         inputRef.current.value="1000"
         inputRef.current.focus()
         inputRef.current.style.color="red"
         //inputRef.current.style.display="none";
    }
    return(
        <div>
            <h1>use ref in react</h1>
            <input type="text" ref={inputRef}></input>
            <button onClick={handle}>handle Click</button>
          
        </div>
    )
}
export default Useref;