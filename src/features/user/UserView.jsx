import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUser } from './userSlice'
function UserView() {
    const user=useSelector((state)=>state.user)
    const dispatch=useDispatch()
    useEffect(()=>{
           dispatch(fetchUser())
    },[])

  return (
    <div>
       
       <h1> List of user </h1>
       {user.loading && <div>loading...</div>}
       {!user.loading && user.error?<div>error :{user.error}</div> :null}
       {!user.loading && user.users.length ? (
          
           <ul>
               {
                   user.users.map((user)=>(
                       
                            <li key={user.id}>{user.name} </li>
                       
                     
                       

                   ))
               }
           </ul>
 
       ):null}
    
    </div>
  )
}
{/* <>
      
      {userData?.loading ? (
          <h2>loading</h2>

      ) : userData?.error ? (
          <h2>{userData.error}</h2>
      ) : (
          <div>
              <h2>userlist</h2>
              <div>
                  {
                      result.map(user => <p>{user.name}</p>
                      
                      )
                  }
              </div>
          </div>
      )}
  </> */}

export default UserView
