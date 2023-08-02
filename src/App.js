import logo from './logo.svg';
import './App.css';
import { createContext, useState } from 'react';
import BioData from './BioData';
import Shr from './Shr';
import Ince from './Ince';
import PassData from './PassData';

function App() {
  
   const [data,setData]=useState("shraddha baheti");
   const [show,setShow]=useState(true);
   
  const sum=(data)=>{
    alert(data);
  }
   const handleChange=()=>{
     let val=data;
    if(val === "shraddha baheti"){
      setData("komal Baheti")
    }else{
      setData("shraddha baheti")
    }
   
  }
  return (
    <div className="App">
   {
     show ? <Ince sum={sum} /> :<PassData />
   }
     
 
     {/* <Shr/>
     <BioData/>
   */}
    
     
    
    <h1>{data}</h1>
    <button   onClick={handleChange}>Click</button>
    </div>
  );
}

export default App ;

