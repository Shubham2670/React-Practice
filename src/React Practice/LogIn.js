import React, { useState } from "react";

const LogIn = ({value}) => {
  const [data, setData] = useState([{ username: "", password: "" }]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };
  const handeSubmit = (e) => {
    e.preventDefault();
    value(p => [...p, data])
  };

  return (
    <div>
      <form>
        <label>UserName</label>
        <input
          type="text"
          placeholder="Enter User Name"
          name="username"
          value={data.username}
          onChange={handleChange} 
        />
        <br />
        <label>Password</label> 
        <input
          type="text"
          placeholder="Enter PassWord Name"
          name="password"
          value={data.password}
          onChange={handleChange}
        />
        <button onClick={handeSubmit}>Submit</button>
      </form>

      <div>
      </div>
    </div>
  );
};

export default LogIn;
