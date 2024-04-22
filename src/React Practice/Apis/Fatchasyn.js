import React, { useEffect, useState } from 'react'

const Fatchasyn = () => {
    const [data1,setData1]=useState([])
    const api = "http://localhost:3000/posts"
    

    async function fecthing(){
        try{
            const response = await fetch(api);
            const data =await response.json();
            setData1(data)
            console.log(data)
        }catch(err){
            const error = "erorr"
            console.log(error)
        }
    } 
    useEffect(()=>{
        fecthing()
    },[])
  return (
    <div>
    {
        data1.map((curval)=>{
         return <h1>{curval.name} {curval.technology}</h1>
        })
    }
      
    </div>
  )
}

export default Fatchasyn
