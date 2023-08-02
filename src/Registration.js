import { useState } from "react"
import { useDispatch } from "react-redux";
import { fetchUser } from "./features/user/userSlice";

function Registration(){
    const dispatch=useDispatch()
    const [state,setState]=useState({
        username:'',
        email:'',
        profilepic:'',
        password:'',
        confirmpassword:''
    });
    const handleChange=(e)=>{
        const name=e.target.name
        const value=e.target.value
        setState({
            ...state,
            [name]:value
        })

    }
    const submit=(e)=>{
        e.preventDefault()
         dispatch(fetchUser())
     
    }
    //console.log("name",state.name)
    return(
        <div>
            <form>
                <h1>Registration form</h1>
                <label>username</label>
                <input type="text" placeholder="username" name="username" onChange={handleChange} ></input>
                 <br/><br/>
                 <label>email</label>
                <input type="email" placeholder="email" name="email" onChange={handleChange} ></input>
                 <br/><br/>
                <label>password</label>
                <input type="password" placeholder="password" name="password" onChange={handleChange}></input>
                <br/><br/>
                <label>confirmpassword</label>
                <input type="confirmpassword" placeholder="confirmpassword" name="confirmpassword" onChange={handleChange}></input>
                <button onClick={submit}>onSubmit</button>
            </form>
        </div>
    )
}
export default Registration