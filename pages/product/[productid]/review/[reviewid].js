import { useRouter } from "next/router"
function Review(){
    const route=useRouter();
   const {productid,reviewid}=route.query;
    return(
        <div>
            <br/>
            <br/>
            <br/>
            <br/>
         <h1>Review route{reviewid} for product {productid}</h1>
        </div>
    )
}
export default Review;