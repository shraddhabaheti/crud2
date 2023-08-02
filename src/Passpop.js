import React, { useState } from 'react'

function Passpop({card}) {
    let {creator_name,description,saleName}=card;
    const [show,setShow]=useState(false);
  return (
    <div>
      <button onClick={()=>setShow(!show)}>{show ? "-" : "+" }</button>
      <h1>{creator_name}</h1>
      {
        show && <h2>{description}</h2>
      }
    
      <h3>{saleName}</h3>
    </div>
  )
}

export default Passpop
