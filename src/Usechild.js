import { memo } from "react";

 function Usechild({learning}){
    console.log("chiled component")
    return(
        <div>
            <h5>use callback function</h5>
        </div>
    )
}
export default memo(Usechild);