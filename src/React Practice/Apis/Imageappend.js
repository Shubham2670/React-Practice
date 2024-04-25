import axios from 'axios';
import React, { useState } from 'react'

const Imageappend = () => {
    // const[image,setImage] = useState('')
    const [data,setData] =useState({username:"" ,password:""})
    // const handleImage=(e)=>{
    //     console.log(e.target.files)
    //     setImage(e.target.files[0])
    // };

    const handleChange=(e)=>{
        const {name , value} = e.target;
        setData({...data,[name]:value});
     }
    
    const handleApi=()=>{
        const formData =new FormData();
        // formData.append("image" ,image)
        formData.append("username" , data.username )
        formData.append("password" , data.password )
        axios.post("http://localhost:3006/posts",formData,{
            headers:{
                // 'content-type':'multipart/form-data',
                'content-type':'application/json'
            }
        }).then((res)=>{
            // setImage(res.data)
            setData(res.data)
        })
    }

  return (
    <div>
    {/*  <input type='file' name='file' onChange={handleImage} />*/}
      
      <input type='text' placeholder='username' name='username' value={data.username} onChange={handleChange} />
      <input type='text' placeholder='password' name='password' value={data.password} onChange={handleChange} />
      <button onClick={handleApi}>Submit</button>
    </div>
  )
}

export default Imageappend
