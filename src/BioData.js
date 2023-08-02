import React from 'react'

const BioData = () => {
    const data=[
        {
            name:"shraddha",age:30,id:1
        },
        {
            name:"komal",age:20,id:2
        },
        {
            name:"preety",age:30,id:3
        }
    ]
    console.log(data,"=====>")
  return (
    <div>
      {
          data.map((item,index)=>{
              return(
                  <div key={index}>
                      <h1>name{item.name} age{item.age}</h1>
                  </div>
              )
          })
      }
    </div>
  )
}

export default BioData
