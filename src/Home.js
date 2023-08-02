import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

function Home(){
    const navigate=useNavigate();
  
    const [state,setState]=useState({
     name:'',
     email:'',
     dob:'',
     position:'',
     technologies_known:'',
     technologie_type :'',
  })
  const handleChange=(e)=>{
    let name = e.target.name;
    let value = e.target.value;
  
        
   setState({
      ...state,
      [name]: value
    });
}
 const onSubmit=async(e)=>{
    e.preventDefault();
    const token1=localStorage.getItem("token")
      const { name,email,dob,position,technologies_known,technologie_type } = state
        let inputData = {
            name:name,
            email:email,
            dob:dob,
            position:position,
            technologies_known:technologies_known,
            technologie_type :technologie_type,    
         }
        let response = await fetch('http://192.168.1.11:8000/api/employees', {
            method: "post",
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
              'Accept': 'application/json',
              'Authorization': `${token1}` 
            },
            body: JSON.stringify(inputData)
           
        
          });
       
          let user = await response.json();
         //console.log(user);
       //  setUser(user);
             navigate('/edits');
    }
   
    return(
        <div>
            <h1>Welcome to home page</h1>
            <form onSubmit={onSubmit}>
                <label>name</label>
                <input type="text" name="name" value={state.name} onChange={handleChange}/><br/><br/>
                 <label>email</label>
                <input type="text" name="email" value={state.email} onChange={handleChange}/><br/><br/>

                <label> dob</label>
                <input type="date" name="dob" value={state.dob} onChange={handleChange}/><br/><br/>

                <label>position</label>
                <input type="text" name="position" value={state.position} onChange={handleChange}/><br/><br/>

                <label> technologies_known</label>
                <input type="text" name="technologies_known" value={state. technologies_known} onChange={handleChange}/><br/><br/>

                <label> technologie_type</label>
                <input type="text" name="technologie_type" value={state.technologie_type} onChange={handleChange}/><br/><br/>
               <button type="submit">Submit</button>
            
              </form> 
         </div>
     )
 }
export default Home;