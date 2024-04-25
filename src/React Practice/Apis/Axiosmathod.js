import React, { useEffect, useState } from 'react'
import axios from "axios";

const Axiosmathod = () => {
    const[data,setData] = useState([])
const url = "http://localhost:3004/posts"

useEffect(()=>{

axios.get(url).then((res)=>setData(res.data))
},[])

  return (
    <div>
    {
      data.map((Curval)=>{
          return <h1>{Curval.name}</h1>
      })
    }
      
    </div>
  )
}

export default Axiosmathod
