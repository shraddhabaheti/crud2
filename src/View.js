import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function View() {
   const [data,setData]=useState([]);
   
   const parms=useParams();
   const getApi = async()=>{
       try{
        let res= await axios.get(`https://jsonplaceholder.typicode.com/photos/${parms.id}`)
        let newData = res?.data
        setData(newData)
      
       }catch(err){
            console.log(err)
       }
     
   }
    useEffect(()=>{
       getApi()
   },[])

   return(
       <div>
           <h1>{data?.title}</h1>
           <img src={data?.url}></img>
           <h2>{data?.id}</h2>
           <h3>{data?.albumId}</h3>

       </div>
   )
}
    
export default View;