import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
function Login(){
    const navigate=useNavigate();
    const [state,setState]=useState({
        userName:"",
        password:"",
    });
    const handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
      
            
       setState({
          ...state,
          [name]: value
        });
    }
  
const onSubmit =async(e)=>{
      e.preventDefault();
    const { userName,  password } = state
        let inputData = {
        userName: userName,
          password: password,       
         }
        let response = await fetch('http://192.168.1.11:8000/api/user/login', {
            method: "post",
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
              'Accept': 'application/json'
            },
            body: JSON.stringify(inputData)
          });
  
  
          let user = await response.json();
          localStorage.setItem("token",user.token);
          navigate('/home')

}
    return(
        <div>
           <form onSubmit={onSubmit}>
               <label>userName</label>
               <input type="text" value={state.userName} name="userName" onChange={handleChange}/>
               <br/><br/>
               <label>password</label>
               <input type="text" value={state.password} name="password" onChange={handleChange}/><br/><br/>
               <button type="submit">Submit</button>
           </form>
          
        </div>
    )
}


export default Login;
