import axios from "axios";
import React, { useState } from "react";

const AxiosPut = () => {

  const [data, setData] = useState({id:2, name: " ", Technology: " " });

  const handlechange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3005/posts",{},{
      headers:{
        "Content-Type":"application/json"
        // "custom-headers":"headers1"
      }
    
    }).then((res)=>setData(res.data))
  };

  return (
    <div>
      <label> Name :</label>
      <input
        type="text"
        placeholder="Enter Your name"
        name="name"
        value={data.name}
        onChange={handlechange}
      />
      <label>Technology</label>
      <input
        type="text"
        placeholder="Enter Your technology"
        name="Technology"
        value={data.Technology}
        onChange={handlechange}
      />

      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default AxiosPut;
