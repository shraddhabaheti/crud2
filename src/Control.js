import React, { useState } from 'react'

const Control = () => {
    //let curDate=new Date(2022,30,8 ,5);
    let curDate=new Date();
    let greeting='';
    let cssStyle={};
    curDate=curDate.getHours();
    const[name,setName]=useState('');
    const[fullName,setFullname]=useState('');
    if(curDate >=1 && curDate <12){
        greeting="good morning"
        cssStyle.color="red"
    }else if(curDate >=12 && curDate <19){
        greeting="good afternoon"
         cssStyle.color="green"
    }else{
        greeting="good night"
        cssStyle.color="blue"
    }
    const handleChange=(e)=>{
        setName(e.target.value)
       
    }
    const inputSubmit=()=>{
        setFullname(name)
        setName('');
    }
  
  return (
    <div>
        
      <h1>Hello{fullName}</h1>
     
      <input type="text" onChange={handleChange} value={name} placeholder='enter the name' name='name'/>
      <button type="submit" onClick={inputSubmit}>Click</button>
      <h1>Hello,<span style={cssStyle}>{greeting}</span></h1>
    </div>
  )
}

export default Control
