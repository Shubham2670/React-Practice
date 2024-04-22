import React, { useEffect, useState } from 'react'
import axios from "axios";

const Axiosmathod = () => {
    const[data,setData] = useState()
const url = "http://localhost:3000/posts"

useEffect=()=>{
    axios.get(url).then((response)=>{
       set
    })
}

  return (
    <div>
      
    </div>
  )
}

export default Axiosmathod
