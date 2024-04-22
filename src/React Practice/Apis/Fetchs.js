import React, { useEffect, useState } from 'react'

const Fetchs = () => {
  const [data ,setData]=useState([])
    const url = "http://localhost:3000/posts"

    useEffect(()=>{
        fetch(url).then(resp=> resp.json()).then(d=> setData(d))
    })
  return (
    <div>
       {
        data.map((curval)=>{
          return <h1 key={curval.id}>{curval.name} {curval.Technology}</h1>
          
        })
      }
    </div>
  )
}

export default Fetchs
