import React from 'react'
import { useRouter } from 'next/router';
function ProductDetail(){
    const router=useRouter();
    
     const productid =  router.query.productid
     
    return <>
    
    <br/>
    <br/>
    <br/>
    
    <h1 >Detail About product{productid}</h1>
  
    </>
}
export default ProductDetail;