import React, { useEffect, useState } from 'react'

const AxiosPost = () => {
    const [data, setData] = useState({ name: " ", Technology: " " });
    const [get ,setGet] = useState([])

  const handlechange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const getapi = async (e)=>{
    try{
       const getapi = await fetch("http://localhost:3005/posts")
       const data1 =await getapi.json()
       setGet(data1)
    }
    catch(err){
       console.log(err)
    }

  }
  useEffect(()=>{
      console.log("useEffect")
      getapi()
  },[])



  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
     const response = await fetch("http://localhost:3005/posts", {
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body: JSON.stringify(data)
     }
         
        );
        const Jsondata = await response.json(); 
        setData(Jsondata)
        setData({name:"",Technology:""})
    }catch(error){
console.log(error);
    }
   
  };

  return (
    <div>
      <label> Name :</label>
      <input  style={{marginRight:"200px"}}
        type="text"
        name="name"
        value={data.name}
        onChange={handlechange}
        placeholder="Enter Your name"
      />
      <label>Technology:</label>
      <input   style={{marginRight:"200px"}}
        type="text"
        placeholder="Enter Your technology"
        name="Technology"
        value={data.Technology}
        onChange={handlechange}
       
      />

      <button onClick={handleSubmit}>Submit</button>

      {
        get.map((curval , index)=>{
            return <h1 style={{marginTop:"30px"}} key={index}>{index+1}{curval.name} {curval.Technology}</h1>
        })
      }
    </div>
  );
}

export default AxiosPost
