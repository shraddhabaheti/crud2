import logo from './logo.svg';
import './App.css';
import React, { useContext, useState } from 'react';
import Usememo from './Usememo';
import Useref from './Useref';
import { createContext } from 'react';
import UserCon from './UserCon';
import Usechild from './Usechild';
import High from './High';
import Control from './Control';
import ComA from './ComA';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
const firstname=createContext();
const lastname=createContext();
const middlename=createContext();
function App() {
 
  let add_val = []
  const [nums,setNums] = useState([10,24,10,14,50,25,45,78]);
  const [total,setTotal] = useState(0)
  
  const sumFunArray=(e)=>{
    let {name,value} = e.target
    if(e.target.checked){
      add_val.push(parseInt(value))  
      let res= add_val.reduce((prev,cur)=>{
        return prev+cur;
      },0)
      console.log(res)
      setTotal(res+total)
     
    }else{
       add_val.pop(parseInt(value))
      setTotal(total-value)
      //  let index = add_val.indexOf(value)
      // add_val.slice(index,1)
      
    }
  }
  return (
    
    <div className="App">
    
     {
       nums.map((val,i)=>{
         return(
           <>
            <input type="checkbox" value={val} name="total"  onChange={sumFunArray}/>
            <label>{val}</label> <br />
                  
           </>
         )
       })
     } 
    
    <h3>total:-{total}</h3>
  
  
 
 
    <Useref/>
  <UserCon/>
   <High/>
   <Control/>
   <firstname.Provider value={"Annu"}>
     <middlename.Provider value={"bala"}>
     <lastname.Provider value={"baheti"}>
      <ComA/>
     </lastname.Provider>
     </middlename.Provider>
     
   </firstname.Provider>
    </div>
  );
  }

export default App;
export {firstname,lastname,middlename};
