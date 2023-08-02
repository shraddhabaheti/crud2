import React from 'react'

function Shr() {
    let curDate=new Date();
    curDate=curDate.getHours();
    let greeting=""
    if(curDate >=1 && curDate <12){
        greeting="good morning"
    }else if(curDate>=12 && curDate <19){
      greeting="good Afternonnh"
    }
    else{
        greeting="good nignt"
    }
  return (
    <div>
      <h1>Hello shraddha {greeting}</h1>
    </div>
  )
}

export default Shr
