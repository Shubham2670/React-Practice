import React from 'react'

const Contact = ({newdata}) => {
  return (
    <div>
     {newdata.map((cv ,index)=>(
        <div key={index}> 
        <p>{cv.username}</p>
        <p>{cv.password}</p>
        </div>
      
  ))} 
    </div>
  )
}

export default Contact
