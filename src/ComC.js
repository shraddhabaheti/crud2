import React from 'react'
import { firstname,middlename,lastname} from './App'
const ComC = () => {
  return (
  <>
  <firstname.Consumer>
      {(fname)=>{
          return(
             <lastname.Consumer>
                 {(lname)=>{
                     return(
                         <middlename.Consumer>
                            { (mname)=>{
                                return <h1>{`my name${fname}${mname}${lname}`}</h1>
                             }}
                         </middlename.Consumer>
                        
                     )
                 }}
             </lastname.Consumer>
          );
      }}
  </firstname.Consumer>
  </>
  )
}

export default ComC
