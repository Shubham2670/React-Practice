import React from 'react';
import axios from "axios";

const ArrayAxios = () => {
    const sendData=()=>{
        const dataArray =[1,2,3,4]
        const formData = new FormData()
        dataArray.forEach((item,index)=>{
            formData.append(`data ${index}`,item)
        })
        axios.post("http://localhost:3006/posts",formData,{
          headers
        })
    }

  return (
    <div>
      
    </div>
  )
}

export default ArrayAxios
