import React from 'react'
import { CreatorData } from './data'
import Passpop from './Passpop'

function PassData() {
  return (
    <div>
      <h1>pass the Data</h1>
   {
       CreatorData.map((item)=>{
           return <Passpop card={item} />
       })
   }
    </div>
  )
}

export default PassData
